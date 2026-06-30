// Moduł autoryzacji: rejestracja, potwierdzenie email, logowanie
const express    = require('express')
const bcrypt     = require('bcryptjs')
const jwt        = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const crypto     = require('crypto')
const db         = require('./db')

const router = express.Router()

// ── Konfiguracja emaili ────────────────────────────────────────
// Dane brane z pliku .env
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST || 'smtp.wp.pl',
  port:   parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const ADRES_STRONY = process.env.ADRES_STRONY || 'http://localhost:5173'
const JWT_SECRET   = process.env.JWT_SECRET   || 'boss-tajny-klucz-2025'

// ── REJESTRACJA ────────────────────────────────────────────────
// POST /api/auth/rejestracja
router.post('/rejestracja', async (req, res) => {
  try {
    const { email, haslo } = req.body

    if (!email || !haslo)           return res.status(400).json({ blad: 'Email i hasło są wymagane' })
    if (haslo.length < 6)           return res.status(400).json({ blad: 'Hasło musi mieć co najmniej 6 znaków' })
    if (!email.includes('@'))       return res.status(400).json({ blad: 'Nieprawidłowy adres email' })

    // Sprawdź czy email już istnieje
    const istniejacy = await db.query('SELECT id FROM uzytkownicy WHERE email = $1', [email.toLowerCase()])
    if (istniejacy.rows.length > 0) return res.status(400).json({ blad: 'Konto z tym adresem email już istnieje' })

    // Zaszyfruj hasło (bcrypt robi to automatycznie — nie da się odczytać)
    const haslo_hash = await bcrypt.hash(haslo, 12)

    // Zapisz użytkownika do bazy — od razu aktywny (potwierdzony = true)
    await db.query(
      'INSERT INTO uzytkownicy (email, haslo_hash, potwierdzony) VALUES ($1, $2, true)',
      [email.toLowerCase(), haslo_hash]
    )

    res.json({ sukces: true, wiadomosc: 'Rejestracja udana! Możesz się teraz zalogować.' })

  } catch (blad) {
    console.error('Błąd rejestracji:', blad)
    res.status(500).json({ blad: 'Nie udało się wysłać emaila. Sprawdź połączenie z serwerem pocztowym.' })
  }
})

// ── POTWIERDZENIE EMAILA ───────────────────────────────────────
// GET /api/auth/potwierdz/:token
router.get('/potwierdz/:token', async (req, res) => {
  try {
    const { token } = req.params

    const wynik = await db.query(
      'UPDATE uzytkownicy SET potwierdzony = true, token_email = NULL WHERE token_email = $1 RETURNING id, email',
      [token]
    )

    if (wynik.rows.length === 0) {
      return res.status(400).json({ blad: 'Link jest nieprawidłowy lub już został użyty' })
    }

    res.json({ sukces: true, wiadomosc: 'Email potwierdzony! Możesz się teraz zalogować.' })

  } catch (blad) {
    console.error('Błąd potwierdzania:', blad)
    res.status(500).json({ blad: 'Coś poszło nie tak' })
  }
})

// ── LOGOWANIE ──────────────────────────────────────────────────
// POST /api/auth/logowanie
router.post('/logowanie', async (req, res) => {
  try {
    const { email, haslo } = req.body

    if (!email || !haslo) return res.status(400).json({ blad: 'Email i hasło są wymagane' })

    // Znajdź użytkownika
    const wynik = await db.query('SELECT * FROM uzytkownicy WHERE email = $1', [email.toLowerCase()])
    const user  = wynik.rows[0]

    if (!user) return res.status(401).json({ blad: 'Nieprawidłowy email lub hasło' })

    // Sprawdź hasło
    const hasloPoprawne = await bcrypt.compare(haslo, user.haslo_hash)
    if (!hasloPoprawne) return res.status(401).json({ blad: 'Nieprawidłowy email lub hasło' })

    // Wygeneruj token sesji (JWT) — ważny 7 dni
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({
      sukces: true,
      token,
      uzytkownik: { id: user.id, email: user.email },
    })

  } catch (blad) {
    console.error('Błąd logowania:', blad)
    res.status(500).json({ blad: 'Coś poszło nie tak' })
  }
})

// ── MIDDLEWARE: sprawdź czy użytkownik jest zalogowany ─────────
function weryfikujToken(req, res, next) {
  const naglowek = req.headers.authorization
  if (!naglowek) return res.status(401).json({ blad: 'Brak tokenu — zaloguj się' })
  const token = naglowek.split(' ')[1] // format: "Bearer <token>"
  try {
    req.uzytkownik = jwt.verify(token, JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ blad: 'Token nieważny lub wygasł — zaloguj się ponownie' })
  }
}

// ── PROFIL ─────────────────────────────────────────────────────
// GET /api/auth/profil   (wymaga tokenu)
router.get('/profil', weryfikujToken, async (req, res) => {
  try {
    const wynik = await db.query(
      'SELECT id, email, created_at FROM uzytkownicy WHERE id = $1',
      [req.uzytkownik.id]
    )
    if (wynik.rows.length === 0) return res.status(404).json({ blad: 'Nie znaleziono użytkownika' })
    res.json(wynik.rows[0])
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Błąd serwera' })
  }
})

// ── ZMIANA HASŁA ───────────────────────────────────────────────
// PUT /api/auth/zmien-haslo   (wymaga tokenu)
router.put('/zmien-haslo', weryfikujToken, async (req, res) => {
  try {
    const { aktualneHaslo, noweHaslo } = req.body

    if (!aktualneHaslo || !noweHaslo) return res.status(400).json({ blad: 'Oba pola są wymagane' })
    if (noweHaslo.length < 6)         return res.status(400).json({ blad: 'Nowe hasło musi mieć co najmniej 6 znaków' })

    // Pobierz aktualne hasło z bazy
    const wynik = await db.query('SELECT haslo_hash FROM uzytkownicy WHERE id = $1', [req.uzytkownik.id])
    const user  = wynik.rows[0]

    // Sprawdź czy aktualne hasło jest poprawne
    const poprawne = await bcrypt.compare(aktualneHaslo, user.haslo_hash)
    if (!poprawne) return res.status(400).json({ blad: 'Aktualne hasło jest nieprawidłowe' })

    // Zaszyfruj i zapisz nowe hasło
    const nowyHash = await bcrypt.hash(noweHaslo, 12)
    await db.query('UPDATE uzytkownicy SET haslo_hash = $1 WHERE id = $2', [nowyHash, req.uzytkownik.id])

    res.json({ sukces: true, wiadomosc: 'Hasło zostało zmienione!' })
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Błąd serwera' })
  }
})

module.exports = router
