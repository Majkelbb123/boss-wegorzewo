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

    // Generuj losowy token potwierdzający (64 znaki)
    const token_email = crypto.randomBytes(32).toString('hex')

    // Zapisz użytkownika do bazy
    await db.query(
      'INSERT INTO uzytkownicy (email, haslo_hash, token_email) VALUES ($1, $2, $3)',
      [email.toLowerCase(), haslo_hash, token_email]
    )

    // Wyślij email z linkiem potwierdzającym
    const link = `${ADRES_STRONY}/potwierdz-email?token=${token_email}`

    await transporter.sendMail({
      from:    `"BOSS & Alkohole Świata" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: 'Potwierdź swój adres email',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 2rem;">
          <h2 style="color: #111827;">Witaj w BOSS & Alkohole Świata!</h2>
          <p style="color: #4b5563;">Kliknij przycisk poniżej, aby potwierdzić swój adres email i aktywować konto.</p>
          <a href="${link}"
             style="display: inline-block; margin: 1.5rem 0; padding: 0.85rem 2rem; background: #111827; color: #fff; text-decoration: none; border-radius: 10px; font-weight: bold;">
            Potwierdź email
          </a>
          <p style="color: #9ca3af; font-size: 0.85rem;">
            Jeśli nie zakładałeś konta — zignoruj tę wiadomość.<br>
            Link jest ważny przez 24 godziny.
          </p>
        </div>
      `,
    })

    res.json({ sukces: true, wiadomosc: 'Rejestracja udana! Sprawdź swoją skrzynkę email i kliknij link potwierdzający.' })

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

    // Sprawdź czy email potwierdzony
    if (!user.potwierdzony) {
      return res.status(401).json({ blad: 'Najpierw potwierdź swój adres email — sprawdź skrzynkę pocztową' })
    }

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

module.exports = router
