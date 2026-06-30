import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Logowanie() {
  const [email, setEmail]   = useState('')
  const [haslo, setHaslo]   = useState('')

  const zaloguj = (e) => {
    e.preventDefault()
    // Tu w przyszłości będzie wysyłanie danych do serwera
    alert('Logowanie będzie działać wkrótce!')
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>

        {/* Karta logowania */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.25rem', color: '#111' }}>Zaloguj się</h1>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.9rem' }}>Witaj z powrotem</p>

          <form onSubmit={zaloguj} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
                Adres e-mail
              </label>
              <input
                type="email"
                placeholder="twoj@email.pl"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.4rem' }}>
                Hasło
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={haslo}
                onChange={e => setHaslo(e.target.value)}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '0.85rem', background: '#111827', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem' }}
            >
              Zaloguj się
            </button>
          </form>

          {/* Zarejestruj się */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Nie masz jeszcze konta?{' '}
              <button
                onClick={() => alert('Rejestracja będzie dostępna wkrótce!')}
                style={{ background: 'none', border: 'none', color: '#111827', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}
              >
                Zarejestruj się
              </button>
            </p>
          </div>
        </div>

        {/* Panel administratora — na dole, oddzielony */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link
            to="/admin"
            style={{ color: '#9ca3af', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            🔧 Panel administratora
          </Link>
        </div>

      </div>
    </div>
  )
}
