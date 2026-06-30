// Główny serwer API — pośrednik między stroną React a bazą danych
const express = require('express')
const cors    = require('cors')
const db      = require('./db')
const auth    = require('./auth')
require('dotenv').config()

const app  = express()
const PORT = process.env.API_PORT || 3001

// cors pozwala stronie React (localhost:5175) rozmawiać z tym serwerem (localhost:3001)
app.use(cors())
app.use(express.json())

// ─── AUTORYZACJA (rejestracja, logowanie, potwierdzenie email) ─
app.use('/api/auth', auth)

// ─── PRODUKTY ────────────────────────────────────────────────
// GET /api/produkty          → wszystkie produkty
// GET /api/produkty?firma=BOSS      → tylko produkty BOSS
// GET /api/produkty?firma=ALKOHOLE  → tylko produkty Alkohole Świata
app.get('/api/produkty', async (req, res) => {
  try {
    const { firma, szukaj } = req.query

    // Budujemy zapytanie SQL zależnie od parametrów
    // ILIKE = szukaj bez rozróżniania małych/wielkich liter
    // %${szukaj}% = szukaj gdziekolwiek w tekście
    let wynik
    if (firma && szukaj) {
      wynik = await db.query(
        `SELECT * FROM produkty
         WHERE firma = $1 AND aktywny = true
         AND (nazwa ILIKE $2 OR opis ILIKE $2 OR kategoria ILIKE $2)
         ORDER BY nazwa`,
        [firma, `%${szukaj}%`]
      )
    } else if (firma) {
      wynik = await db.query(
        'SELECT * FROM produkty WHERE firma = $1 AND aktywny = true ORDER BY nazwa',
        [firma]
      )
    } else if (szukaj) {
      wynik = await db.query(
        `SELECT * FROM produkty
         WHERE aktywny = true
         AND (nazwa ILIKE $1 OR opis ILIKE $1 OR kategoria ILIKE $1)
         ORDER BY nazwa`,
        [`%${szukaj}%`]
      )
    } else {
      wynik = await db.query(
        'SELECT * FROM produkty WHERE aktywny = true ORDER BY nazwa'
      )
    }

    res.json(wynik.rows)
  } catch (blad) {
    console.error('Błąd przy pobieraniu produktów:', blad)
    res.status(500).json({ blad: 'Nie udało się pobrać produktów' })
  }
})

// ─── AKTUALNOŚCI ─────────────────────────────────────────────
// GET /api/aktualnosci             → wszystkie aktualności
// GET /api/aktualnosci?firma=BOSS  → tylko aktualności BOSS
app.get('/api/aktualnosci', async (req, res) => {
  try {
    const { firma } = req.query

    let wynik
    if (firma) {
      wynik = await db.query(
        'SELECT * FROM aktualnosci WHERE firma = $1 AND aktywna = true ORDER BY created_at DESC',
        [firma]
      )
    } else {
      wynik = await db.query(
        'SELECT * FROM aktualnosci WHERE aktywna = true ORDER BY created_at DESC'
      )
    }

    res.json(wynik.rows)
  } catch (blad) {
    console.error('Błąd przy pobieraniu aktualności:', blad)
    res.status(500).json({ blad: 'Nie udało się pobrać aktualności' })
  }
})

// ─── SKLEPY ──────────────────────────────────────────────────
// GET /api/sklepy          → oba sklepy
// GET /api/sklepy?id=1     → jeden sklep po id
app.get('/api/sklepy', async (req, res) => {
  try {
    const { id } = req.query

    let sklep
    if (id) {
      sklep = await db.query(
        'SELECT * FROM sklepy WHERE id = $1 AND aktywny = true',
        [id]
      )
    } else {
      sklep = await db.query('SELECT * FROM sklepy WHERE aktywny = true ORDER BY id')
    }

    // Dla każdego sklepu pobieramy też jego godziny otwarcia
    const wynik = await Promise.all(sklep.rows.map(async (s) => {
      const godziny = await db.query(
        'SELECT * FROM godziny WHERE sklep_id = $1 ORDER BY kolejnosc',
        [s.id]
      )
      return { ...s, godziny: godziny.rows }
    }))

    res.json(id ? wynik[0] : wynik)
  } catch (blad) {
    console.error('Błąd przy pobieraniu sklepów:', blad)
    res.status(500).json({ blad: 'Nie udało się pobrać danych sklepów' })
  }
})

// ─── KONTAKTY — zapis wiadomości z formularza ─────────────────
// POST /api/kontakt → zapisuje nową wiadomość do bazy
app.post('/api/kontakt', async (req, res) => {
  try {
    const { imie, email, telefon, wiadomosc } = req.body

    if (!imie || !wiadomosc) {
      return res.status(400).json({ blad: 'Imię i wiadomość są wymagane' })
    }

    await db.query(
      'INSERT INTO kontakty (imie, email, telefon, wiadomosc) VALUES ($1, $2, $3, $4)',
      [imie, email, telefon, wiadomosc]
    )

    res.json({ sukces: true, wiadomosc: 'Wiadomość zapisana' })
  } catch (blad) {
    console.error('Błąd przy zapisie kontaktu:', blad)
    res.status(500).json({ blad: 'Nie udało się zapisać wiadomości' })
  }
})

// ─── ADMIN — logowanie ───────────────────────────────────────
const HASLO_ADMINA = 'michal'

app.post('/api/admin/login', (req, res) => {
  const { haslo } = req.body
  if (haslo === HASLO_ADMINA) {
    res.json({ sukces: true })
  } else {
    res.status(401).json({ blad: 'Złe hasło' })
  }
})

// ─── ADMIN — produkty (dodaj / edytuj / usuń) ────────────────
app.post('/api/admin/produkty', async (req, res) => {
  try {
    const { firma, nazwa, opis, cena, kategoria, zdjecie_url } = req.body

    // Sprawdzenie w API — szybka odpowiedź zanim pójdziemy do bazy
    if (!nazwa || nazwa.trim() === '')       return res.status(400).json({ blad: 'Nazwa produktu jest wymagana' })
    if (!kategoria || !kategoria.trim())     return res.status(400).json({ blad: 'Kategoria jest wymagana' })
    if (!cena || cena <= 0)                  return res.status(400).json({ blad: 'Cena musi być większa od zera' })
    if (cena > 500)                          return res.status(400).json({ blad: 'Cena nie może przekraczać 500 zł' })
    if (!['BOSS','ALKOHOLE'].includes(firma)) return res.status(400).json({ blad: 'Nieprawidłowa firma' })

    const wynik = await db.query(
      'INSERT INTO produkty (firma, nazwa, opis, cena, kategoria, zdjecie_url) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [firma, nazwa.trim(), opis, cena, kategoria, zdjecie_url || null]
    )
    res.json(wynik.rows[0])
  } catch (blad) {
    // Tłumaczymy błędy z PostgreSQL na czytelny polski komunikat
    if (blad.constraint === 'firma_poprawna')   return res.status(400).json({ blad: 'Firma musi być BOSS lub ALKOHOLE' })
    if (blad.constraint === 'cena_dodatnia')    return res.status(400).json({ blad: 'Cena musi być większa od zera' })
    if (blad.constraint === 'cena_rozsdana')    return res.status(400).json({ blad: 'Cena nie może przekraczać 2000 zł' })
    if (blad.constraint === 'nazwa_niepusta')   return res.status(400).json({ blad: 'Nazwa nie może być pusta' })
    if (blad.constraint === 'unikalny_produkt') return res.status(400).json({ blad: 'Produkt o tej nazwie już istnieje w tej firmie' })
    if (blad.column === 'kategoria')            return res.status(400).json({ blad: 'Kategoria jest wymagana' })
    console.error(blad)
    res.status(500).json({ blad: 'Nie udało się dodać produktu' })
  }
})

app.put('/api/admin/produkty/:id', async (req, res) => {
  try {
    const { firma, nazwa, opis, cena, kategoria, aktywny, zdjecie_url } = req.body
    const wynik = await db.query(
      'UPDATE produkty SET firma=$1, nazwa=$2, opis=$3, cena=$4, kategoria=$5, aktywny=$6, zdjecie_url=$7 WHERE id=$8 RETURNING *',
      [firma, nazwa, opis, cena, kategoria, aktywny, zdjecie_url || null, req.params.id]
    )
    res.json(wynik.rows[0])
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Nie udało się edytować produktu' })
  }
})

app.delete('/api/admin/produkty/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM produkty WHERE id=$1', [req.params.id])
    res.json({ sukces: true })
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Nie udało się usunąć produktu' })
  }
})

// ─── ADMIN — aktualności (dodaj / edytuj / usuń) ─────────────
app.post('/api/admin/aktualnosci', async (req, res) => {
  try {
    const { firma, tytul, tresc } = req.body
    const wynik = await db.query(
      'INSERT INTO aktualnosci (firma, tytul, tresc) VALUES ($1,$2,$3) RETURNING *',
      [firma, tytul, tresc]
    )
    res.json(wynik.rows[0])
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Nie udało się dodać aktualności' })
  }
})

app.delete('/api/admin/aktualnosci/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM aktualnosci WHERE id=$1', [req.params.id])
    res.json({ sukces: true })
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Nie udało się usunąć aktualności' })
  }
})

// ─── ADMIN — wiadomości kontaktowe ───────────────────────────
app.get('/api/admin/kontakty', async (req, res) => {
  try {
    const wynik = await db.query('SELECT * FROM kontakty ORDER BY created_at DESC')
    res.json(wynik.rows)
  } catch (blad) {
    console.error(blad)
    res.status(500).json({ blad: 'Nie udało się pobrać wiadomości' })
  }
})

// ─── SPRAWDZENIE CZY API DZIAŁA ──────────────────────────────
app.get('/api/ping', (req, res) => {
  res.json({ status: 'ok', wiadomosc: 'API działa!' })
})

// Uruchamiamy serwer
app.listen(PORT, () => {
  console.log(`✅ Serwer API działa na porcie ${PORT}`)
  console.log(`   Sprawdź: http://localhost:${PORT}/api/ping`)
})
