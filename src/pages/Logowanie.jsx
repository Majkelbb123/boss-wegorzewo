import { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

// ── Ekran potwierdzenia emaila (/potwierdz-email?token=...) ───
function PotwierdzEmail() {
  const [searchParams] = useSearchParams()
  const [stan, setStan] = useState('ladowanie') // ladowanie | ok | blad
  const [komunikat, setKomunikat] = useState('')

  useEffect(() => {
    const token = searchParams.get('token')
    if (!token) { setStan('blad'); setKomunikat('Brak tokenu w linku'); return }

    fetch(`/api/auth/potwierdz/${token}`)
      .then(r => r.json())
      .then(d => {
        if (d.sukces) { setStan('ok'); setKomunikat(d.wiadomosc) }
        else          { setStan('blad'); setKomunikat(d.blad) }
      })
      .catch(() => { setStan('blad'); setKomunikat('Błąd połączenia z serwerem') })
  }, [])

  return (
    <div style={s.strona}>
      <div style={s.karta}>
        {stan === 'ladowanie' && <p style={{ textAlign: 'center', color: '#6b7280' }}>Sprawdzam link...</p>}
        {stan === 'ok' && <>
          <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>✅</div>
          <h2 style={s.tytul}>Email potwierdzony!</h2>
          <p style={s.opis}>{komunikat}</p>
          <Link to="/zaloguj" style={s.przycisk}>Zaloguj się</Link>
        </>}
        {stan === 'blad' && <>
          <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>❌</div>
          <h2 style={s.tytul}>Coś poszło nie tak</h2>
          <p style={{ ...s.opis, color: '#dc2626' }}>{komunikat}</p>
          <Link to="/zaloguj" style={s.przycisk}>Wróć do logowania</Link>
        </>}
      </div>
    </div>
  )
}

// ── Główna strona logowania / rejestracji ──────────────────────
export default function Logowanie() {
  const navigate = useNavigate()
  const [tryb, setTryb]               = useState('logowanie') // logowanie | rejestracja
  const [email, setEmail]             = useState('')
  const [haslo, setHaslo]             = useState('')
  const [haslo2, setHaslo2]           = useState('')
  const [laduje, setLaduje]           = useState(false)
  const [blad, setBlad]               = useState('')
  const [sukces, setSukces]           = useState('')
  const [pokazHaslo, setPokazHaslo]   = useState(false)
  const [pokazHaslo2, setPokazHaslo2] = useState(false)

  // Sprawdź czy to strona potwierdzenia emaila
  const [searchParams] = useSearchParams()
  if (searchParams.get('token')) return <PotwierdzEmail />

  const wyczysc = () => { setBlad(''); setSukces('') }

  const submit = async (e) => {
    e.preventDefault()
    wyczysc()

    if (tryb === 'rejestracja' && haslo !== haslo2) {
      setBlad('Hasła nie są takie same'); return
    }

    setLaduje(true)
    try {
      const endpoint = tryb === 'logowanie' ? '/api/auth/logowanie' : '/api/auth/rejestracja'
      const odp  = await fetch(endpoint, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, haslo }),
      })
      const dane = await odp.json()

      if (!odp.ok) {
        setBlad(dane.blad); setLaduje(false); return
      }

      if (tryb === 'logowanie') {
        // Zapisz token sesji w przeglądarce
        localStorage.setItem('token', dane.token)
        localStorage.setItem('email', dane.uzytkownik.email)
        navigate('/')
      } else {
        setSukces(dane.wiadomosc)
        setEmail(''); setHaslo(''); setHaslo2('')
      }
    } catch {
      setBlad('Błąd połączenia z serwerem')
    }
    setLaduje(false)
  }

  return (
    <div style={s.strona}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Karta logowania / rejestracji */}
        <div style={s.karta}>
          <h1 style={s.tytul}>
            {tryb === 'logowanie' ? 'Zaloguj się' : 'Utwórz konto'}
          </h1>
          <p style={s.opis}>
            {tryb === 'logowanie' ? 'Witaj z powrotem' : 'Dołącz do BOSS & Alkohole Świata'}
          </p>

          {sukces ? (
            // Komunikat po udanej rejestracji
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
              <p style={{ color: '#166534', fontWeight: 600, marginBottom: '0.5rem' }}>Konto założone!</p>
              <p style={{ color: '#15803d', fontSize: '0.9rem' }}>{sukces}</p>
              <button onClick={() => { setSukces(''); setTryb('logowanie') }} style={{ ...s.przycisk, marginTop: '1rem', display: 'inline-block' }}>
                Zaloguj się
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={s.etykieta}>Adres e-mail</label>
                <input type="email" placeholder="twoj@email.pl" required value={email}
                  onChange={e => { setEmail(e.target.value); wyczysc() }} style={s.input} />
              </div>

              <div>
                <label style={s.etykieta}>Hasło</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={pokazHaslo ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    value={haslo}
                    onChange={e => { setHaslo(e.target.value); wyczysc() }}
                    style={{ ...s.input, paddingRight: '3rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setPokazHaslo(!pokazHaslo)}
                    style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0' }}
                    title={pokazHaslo ? 'Ukryj hasło' : 'Pokaż hasło'}
                  >
                    {pokazHaslo ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {tryb === 'rejestracja' && (
                <div>
                  <label style={s.etykieta}>Powtórz hasło</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={pokazHaslo2 ? 'text' : 'password'}
                      placeholder="••••••••"
                      required
                      value={haslo2}
                      onChange={e => { setHaslo2(e.target.value); wyczysc() }}
                      style={{ ...s.input, paddingRight: '3rem' }}
                    />
                    <button
                      type="button"
                      onClick={() => setPokazHaslo2(!pokazHaslo2)}
                      style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0' }}
                      title={pokazHaslo2 ? 'Ukryj hasło' : 'Pokaż hasło'}
                    >
                      {pokazHaslo2 ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
              )}

              {blad && <p style={{ color: '#dc2626', fontSize: '0.9rem', margin: 0 }}>❌ {blad}</p>}

              <button type="submit" disabled={laduje} style={s.przycisk}>
                {laduje ? 'Chwilka...' : tryb === 'logowanie' ? 'Zaloguj się' : 'Zarejestruj się'}
              </button>
            </form>
          )}

          {/* Przełącznik logowanie ↔ rejestracja */}
          {!sukces && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
              <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                {tryb === 'logowanie' ? 'Nie masz jeszcze konta?' : 'Masz już konto?'}{' '}
                <button
                  onClick={() => { setTryb(tryb === 'logowanie' ? 'rejestracja' : 'logowanie'); wyczysc() }}
                  style={{ background: 'none', border: 'none', color: '#111827', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}
                >
                  {tryb === 'logowanie' ? 'Zarejestruj się' : 'Zaloguj się'}
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Panel administratora */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link to="/admin" style={{ color: '#9ca3af', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            🔧 Panel administratora
          </Link>
        </div>

      </div>
    </div>
  )
}

// ── Style ──────────────────────────────────────────────────────
const s = {
  strona:   { minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' },
  karta:    { background: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' },
  tytul:    { fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.25rem', color: '#111' },
  opis:     { color: '#9ca3af', marginBottom: '2rem', fontSize: '0.9rem' },
  etykieta: { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' },
  input:    { width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' },
  przycisk: { display: 'block', width: '100%', padding: '0.85rem', background: '#111827', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', textAlign: 'center', textDecoration: 'none' },
}
