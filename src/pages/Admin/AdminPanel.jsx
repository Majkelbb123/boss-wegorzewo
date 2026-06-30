import { useState, useEffect } from 'react'

// ─── LOGOWANIE ────────────────────────────────────────────────

function Logowanie({ onZaloguj }) {
  const [haslo, setHaslo]   = useState('')
  const [blad, setBlad]     = useState('')
  const [laduje, setLaduje] = useState(false)

  const zaloguj = async (e) => {
    e.preventDefault()
    setLaduje(true)
    setBlad('')
    try {
      const odp = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ haslo }),
      })
      if (odp.ok) {
        onZaloguj()
      } else {
        setBlad('Złe hasło — spróbuj ponownie')
      }
    } catch {
      setBlad('Błąd połączenia z serwerem')
    }
    setLaduje(false)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
      <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '100%', maxWidth: '380px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>Panel admina</h1>
        <p style={{ color: '#888', marginBottom: '2rem', fontSize: '0.9rem' }}>BOSS & Alkohole Świata Węgorzewo</p>

        <form onSubmit={zaloguj}>
          <input
            type="password"
            placeholder="Wpisz hasło..."
            value={haslo}
            onChange={e => setHaslo(e.target.value)}
            style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', marginBottom: '1rem', boxSizing: 'border-box' }}
          />
          {blad && <p style={{ color: '#e44', marginBottom: '1rem', fontSize: '0.9rem' }}>{blad}</p>}
          <button
            type="submit"
            disabled={laduje}
            style={{ width: '100%', padding: '0.75rem', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}
          >
            {laduje ? 'Sprawdzam...' : 'Zaloguj się'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── ZAKŁADKI ─────────────────────────────────────────────────

function Zakladki({ aktywna, setAktywna }) {
  const zakladki = ['Produkty', 'Aktualności', 'Wiadomości']
  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
      {zakladki.map(z => (
        <button
          key={z}
          onClick={() => setAktywna(z)}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            background: aktywna === z ? '#1a1a1a' : '#e5e7eb',
            color:      aktywna === z ? '#fff'    : '#333',
          }}
        >
          {z}
        </button>
      ))}
    </div>
  )
}

// ─── SEKCJA PRODUKTY (dla jednej firmy) ──────────────────────

function ProduktyFirmy({ firma, kolorFirmy }) {
  const [produkty, setProdukty]     = useState([])
  const [formularz, setFormularz]   = useState({ nazwa: '', opis: '', cena: '', kategoria: '', zdjecie_url: '' })
  const [komunikat, setKomunikat]   = useState('')
  const [blad, setBlad]             = useState('')

  const pobierz = async () => {
    const odp = await fetch(`/api/produkty?firma=${firma}`)
    setProdukty(await odp.json())
  }

  useEffect(() => { pobierz() }, [firma])

  const dodaj = async (e) => {
    e.preventDefault()
    setBlad('')
    setKomunikat('')
    const odp = await fetch('/api/admin/produkty', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formularz, firma }),
    })
    const dane = await odp.json()
    if (!odp.ok) {
      setBlad('❌ ' + dane.blad)
      return
    }
    setFormularz({ nazwa: '', opis: '', cena: '', kategoria: '', zdjecie_url: '' })
    setKomunikat('✅ Produkt dodany do ' + firma + '!')
    pobierz()
    setTimeout(() => setKomunikat(''), 3000)
  }

  const usun = async (id) => {
    if (!confirm('Usunąć ten produkt?')) return
    await fetch(`/api/admin/produkty/${id}`, { method: 'DELETE' })
    pobierz()
  }

  return (
    <div>
      {/* Nagłówek sekcji z kolorem firmy */}
      <div style={{ background: kolorFirmy, borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: '1.1rem', margin: 0 }}>
          {firma === 'BOSS' ? '🛒 BOSS Węgorzewo' : '🍷 Alkohole Świata'}
          <span style={{ fontWeight: 400, fontSize: '0.9rem', marginLeft: '0.5rem', opacity: 0.7 }}>
            — {produkty.length} produktów w bazie
          </span>
        </h2>
      </div>

      {/* Formularz dodawania */}
      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>+ Dodaj produkt do {firma === 'BOSS' ? 'BOSS' : 'Alkohole Świata'}</h3>
        <form onSubmit={dodaj} style={{ display: 'grid', gap: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <input placeholder="Nazwa produktu *" required value={formularz.nazwa} onChange={e => setFormularz({...formularz, nazwa: e.target.value})} style={styl.input} />
            <input placeholder="Kategoria" value={formularz.kategoria} onChange={e => setFormularz({...formularz, kategoria: e.target.value})} style={styl.input} />
          </div>
          <input placeholder="Opis" value={formularz.opis} onChange={e => setFormularz({...formularz, opis: e.target.value})} style={styl.input} />
          <input placeholder="Cena (np. 4.99) *" type="number" step="0.01" required value={formularz.cena} onChange={e => setFormularz({...formularz, cena: e.target.value})} style={styl.input} />
          <input placeholder="Link do zdjęcia (opcjonalnie — np. https://...jpg)" value={formularz.zdjecie_url} onChange={e => setFormularz({...formularz, zdjecie_url: e.target.value})} style={styl.input} />
          <button type="submit" style={styl.przycisk}>+ Dodaj produkt</button>
          {komunikat && <p style={{ color: 'green',   fontWeight: 600, margin: 0 }}>{komunikat}</p>}
          {blad      && <p style={{ color: '#dc2626', fontWeight: 600, margin: 0 }}>{blad}</p>}
        </form>
      </div>

      {/* Lista produktów tej firmy */}
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        {produkty.length === 0 && (
          <p style={{ color: '#888', textAlign: 'center', padding: '1rem' }}>Brak produktów — dodaj pierwszy powyżej.</p>
        )}
        {produkty.map(p => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '0.75rem 1rem', gap: '0.75rem' }}>
            {/* miniaturka zdjęcia */}
            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#f3f4f6', flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {p.zdjecie_url
                ? <img src={p.zdjecie_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML='🛒' }} />
                : <span style={{ fontSize: '1.5rem' }}>🛒</span>
              }
            </div>
            <div style={{ flex: 1 }}>
              {p.kategoria && <span style={{ fontSize: '0.75rem', color: '#888', marginRight: '0.5rem' }}>{p.kategoria}</span>}
              <strong>{p.nazwa}</strong>
              {p.cena && <span style={{ color: '#555', marginLeft: '0.75rem', fontWeight: 600 }}>{parseFloat(p.cena).toFixed(2)} zł</span>}
            </div>
            <button onClick={() => usun(p.id)} style={{ background: '#fee2e2', border: 'none', borderRadius: '8px', padding: '0.4rem 0.75rem', cursor: 'pointer', color: '#dc2626', flexShrink: 0 }}>
              Usuń
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Produkty() {
  return (
    <div style={{ display: 'grid', gap: '2.5rem' }}>
      <ProduktyFirmy firma="BOSS"     kolorFirmy="#fef9c3" />
      <ProduktyFirmy firma="ALKOHOLE" kolorFirmy="#fee2e2" />
    </div>
  )
}

// ─── SEKCJA AKTUALNOŚCI ───────────────────────────────────────

function Aktualnosci() {
  const [lista, setLista] = useState([])
  const [formularz, setFormularz] = useState({ firma: 'BOSS', tytul: '', tresc: '' })
  const [komunikat, setKomunikat] = useState('')

  const pobierz = async () => {
    const odp = await fetch('/api/aktualnosci')
    setLista(await odp.json())
  }

  useEffect(() => { pobierz() }, [])

  const dodaj = async (e) => {
    e.preventDefault()
    await fetch('/api/admin/aktualnosci', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formularz),
    })
    setFormularz({ firma: 'BOSS', tytul: '', tresc: '' })
    setKomunikat('✅ Aktualność dodana!')
    pobierz()
    setTimeout(() => setKomunikat(''), 3000)
  }

  const usun = async (id) => {
    if (!confirm('Usunąć tę aktualność?')) return
    await fetch(`/api/admin/aktualnosci/${id}`, { method: 'DELETE' })
    pobierz()
  }

  return (
    <div>
      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1rem' }}>Dodaj aktualność</h2>
        <form onSubmit={dodaj} style={{ display: 'grid', gap: '0.75rem' }}>
          <select value={formularz.firma} onChange={e => setFormularz({...formularz, firma: e.target.value})} style={styl.input}>
            <option value="BOSS">BOSS</option>
            <option value="ALKOHOLE">Alkohole Świata</option>
          </select>
          <input placeholder="Tytuł *" required value={formularz.tytul} onChange={e => setFormularz({...formularz, tytul: e.target.value})} style={styl.input} />
          <textarea placeholder="Treść..." value={formularz.tresc} onChange={e => setFormularz({...formularz, tresc: e.target.value})} rows={4} style={{...styl.input, resize: 'vertical'}} />
          <button type="submit" style={styl.przycisk}>+ Dodaj aktualność</button>
          {komunikat && <p style={{ color: 'green', fontWeight: 600 }}>{komunikat}</p>}
        </form>
      </div>

      <h2 style={{ fontWeight: 700, marginBottom: '1rem' }}>Wszystkie aktualności ({lista.length})</h2>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        {lista.map(a => (
          <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '0.75rem 1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', background: '#f3f4f6', padding: '2px 8px', borderRadius: '20px', marginRight: '0.5rem' }}>{a.firma}</span>
              <strong>{a.tytul}</strong>
              {a.tresc && <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>{a.tresc.slice(0, 80)}...</p>}
            </div>
            <button onClick={() => usun(a.id)} style={{ background: '#fee2e2', border: 'none', borderRadius: '8px', padding: '0.4rem 0.75rem', cursor: 'pointer', color: '#dc2626', flexShrink: 0, marginLeft: '1rem' }}>
              Usuń
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── SEKCJA WIADOMOŚCI ────────────────────────────────────────

function Wiadomosci() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    fetch('/api/admin/kontakty')
      .then(r => r.json())
      .then(setLista)
  }, [])

  if (lista.length === 0) {
    return <p style={{ color: '#888', textAlign: 'center', padding: '3rem' }}>Brak wiadomości od klientów.</p>
  }

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {lista.map(w => (
        <div key={w.id} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <strong>{w.imie || 'Anonim'}</strong>
            <span style={{ color: '#888', fontSize: '0.8rem' }}>{new Date(w.created_at).toLocaleDateString('pl-PL')}</span>
          </div>
          {w.email && <p style={{ color: '#555', fontSize: '0.85rem' }}>Email: {w.email}</p>}
          {w.telefon && <p style={{ color: '#555', fontSize: '0.85rem' }}>Tel: {w.telefon}</p>}
          <p style={{ marginTop: '0.5rem' }}>{w.wiadomosc}</p>
        </div>
      ))}
    </div>
  )
}

// ─── STYLE WSPÓLNE ────────────────────────────────────────────

const styl = {
  input: {
    padding: '0.65rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  przycisk: {
    padding: '0.7rem',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
}

// ─── GŁÓWNY KOMPONENT ─────────────────────────────────────────

export default function AdminPanel() {
  const [zalogowany, setZalogowany] = useState(false)
  const [zakladka, setZakladka]     = useState('Produkty')

  if (!zalogowany) {
    return <Logowanie onZaloguj={() => setZalogowany(true)} />
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6' }}>
      {/* Górny pasek */}
      <div style={{ background: '#1a1a1a', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Panel admina — BOSS & Alkohole Świata</strong>
        <button onClick={() => setZalogowany(false)} style={{ background: 'transparent', border: '1px solid #666', color: '#ccc', borderRadius: '8px', padding: '0.35rem 0.85rem', cursor: 'pointer' }}>
          Wyloguj
        </button>
      </div>

      {/* Zawartość */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        <Zakladki aktywna={zakladka} setAktywna={setZakladka} />
        {zakladka === 'Produkty'    && <Produkty />}
        {zakladka === 'Aktualności' && <Aktualnosci />}
        {zakladka === 'Wiadomości'  && <Wiadomosci />}
      </div>
    </div>
  )
}
