import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MojeKonto() {
  const navigate = useNavigate()

  const [profil, setProfil]         = useState(null)
  const [laduje, setLaduje]         = useState(true)

  // Zmiana hasła
  const [pokazZmianaHasla, setPokazZmianaHasla] = useState(false)
  const [aktualneHaslo, setAktualneHaslo]       = useState('')
  const [noweHaslo, setNoweHaslo]               = useState('')
  const [noweHaslo2, setNoweHaslo2]             = useState('')
  const [pokazAkt, setPokazAkt]                 = useState(false)
  const [pokazNowe, setPokazNowe]               = useState(false)
  const [pokazNowe2, setPokazNowe2]             = useState(false)
  const [ladueZmiana, setLadueZmiana]           = useState(false)
  const [komunikat, setKomunikat]               = useState('')
  const [blad, setBlad]                         = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) { navigate('/zaloguj'); return }

    fetch('/api/auth/profil', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => {
        if (r.status === 401) { navigate('/zaloguj'); return null }
        return r.json()
      })
      .then(d => { if (d) { setProfil(d); setLaduje(false) } })
      .catch(() => { navigate('/zaloguj') })
  }, [])

  const wyloguj = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/zaloguj')
  }

  const zmienHaslo = async (e) => {
    e.preventDefault()
    setBlad(''); setKomunikat('')

    if (noweHaslo !== noweHaslo2) { setBlad('Nowe hasła nie są takie same'); return }

    setLadueZmiana(true)
    try {
      const token = localStorage.getItem('token')
      const odp   = await fetch('/api/auth/zmien-haslo', {
        method:  'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body:    JSON.stringify({ aktualneHaslo, noweHaslo }),
      })
      const dane = await odp.json()
      if (!odp.ok) { setBlad(dane.blad); return }
      setKomunikat(dane.wiadomosc)
      setAktualneHaslo(''); setNoweHaslo(''); setNoweHaslo2('')
      setPokazZmianaHasla(false)
      setTimeout(() => setKomunikat(''), 4000)
    } catch {
      setBlad('Błąd połączenia z serwerem')
    }
    setLadueZmiana(false)
  }

  const formatujDate = (iso) => new Date(iso).toLocaleDateString('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  if (laduje) return (
    <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af' }}>Ładuję...</div>
  )

  return (
    <div style={{ maxWidth: '560px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Nagłówek z avatarem */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: '#111827', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', margin: '0 auto 1rem',
        }}>
          👤
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', marginBottom: '0.25rem' }}>
          Moje konto
        </h1>
        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>BOSS & Alkohole Świata Węgorzewo</p>
      </div>

      {komunikat && (
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem', textAlign: 'center', color: '#166534', fontWeight: 600, marginBottom: '1.5rem' }}>
          ✅ {komunikat}
        </div>
      )}

      {/* Karta: Dane konta */}
      <div style={s.karta}>
        <h2 style={s.naglowekKarty}>📋 Dane konta</h2>

        {/* Email */}
        <div style={s.pole}>
          <label style={s.etykieta}>Adres e-mail</label>
          <div style={s.wartoscPola}>{profil.email}</div>
        </div>

        {/* Hasło — zawsze zakropkowane, bo hash */}
        <div style={s.pole}>
          <label style={s.etykieta}>Hasło</label>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ ...s.wartoscPola, flex: 1, letterSpacing: '0.2em', fontSize: '1.1rem' }}>
              ••••••••
            </div>
            <button
              onClick={() => { setPokazZmianaHasla(!pokazZmianaHasla); setBlad(''); setKomunikat('') }}
              style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline', marginLeft: '1rem', flexShrink: 0 }}
            >
              {pokazZmianaHasla ? 'Anuluj' : 'Zmień hasło'}
            </button>
          </div>
          <p style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: '0.35rem' }}>
            Ze względów bezpieczeństwa hasło jest zaszyfrowane i nie może być wyświetlone.
          </p>
        </div>

        {/* Data dołączenia */}
        <div style={{ ...s.pole, borderBottom: 'none' }}>
          <label style={s.etykieta}>Data rejestracji</label>
          <div style={s.wartoscPola}>🗓️ {formatujDate(profil.created_at)}</div>
        </div>
      </div>

      {/* Formularz zmiany hasła — pojawia się po kliknięciu */}
      {pokazZmianaHasla && (
        <div style={{ ...s.karta, border: '1px solid #fcd34d', background: '#fffbeb' }}>
          <h2 style={s.naglowekKarty}>🔑 Zmień hasło</h2>
          <form onSubmit={zmienHaslo} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {[
              { label: 'Aktualne hasło',    val: aktualneHaslo, set: setAktualneHaslo, pokaz: pokazAkt, setPokaz: setPokazAkt },
              { label: 'Nowe hasło',        val: noweHaslo,     set: setNoweHaslo,     pokaz: pokazNowe, setPokaz: setPokazNowe },
              { label: 'Powtórz nowe hasło',val: noweHaslo2,    set: setNoweHaslo2,    pokaz: pokazNowe2, setPokaz: setPokazNowe2 },
            ].map(({ label, val, set, pokaz, setPokaz }) => (
              <div key={label}>
                <label style={s.etykieta}>{label}</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={pokaz ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    value={val}
                    onChange={e => { set(e.target.value); setBlad('') }}
                    style={{ ...s.input, paddingRight: '3rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setPokaz(!pokaz)}
                    style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
                  >
                    {pokaz ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
            ))}

            {blad && <p style={{ color: '#dc2626', fontWeight: 600, margin: 0 }}>❌ {blad}</p>}

            <button type="submit" disabled={ladueZmiana} style={{ ...s.przycisk, background: '#d97706' }}>
              {ladueZmiana ? 'Zapisuję...' : '💾 Zapisz nowe hasło'}
            </button>
          </form>
        </div>
      )}

      {/* Wyloguj się */}
      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={wyloguj}
          style={{ ...s.przycisk, background: '#fff', color: '#dc2626', border: '2px solid #fecaca', width: '100%' }}
        >
          Wyloguj się
        </button>
      </div>

    </div>
  )
}

const s = {
  karta:        { background: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.5rem', marginBottom: '1rem', border: '1px solid #f3f4f6' },
  naglowekKarty:{ fontSize: '0.95rem', fontWeight: 700, color: '#374151', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' },
  pole:         { paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid #f9fafb' },
  etykieta:     { display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' },
  wartoscPola:  { fontSize: '1rem', color: '#111', fontWeight: 500 },
  input:        { width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', boxSizing: 'border-box' },
  przycisk:     { display: 'block', width: '100%', padding: '0.85rem', background: '#111827', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', textAlign: 'center' },
}
