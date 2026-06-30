import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [otwarte, setOtwarte] = useState(false)
  const lokalizacja = useLocation()

  const aktywny = (sciezka) => lokalizacja.pathname === sciezka

  const zamknij = () => setOtwarte(false)

  return (
    <>
      {/* Pasek górny — tylko przycisk hamburgera */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '56px',
        background: '#111827',
        display: 'flex', alignItems: 'center', padding: '0 1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}>
        <button
          onClick={() => setOtwarte(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="Otwórz menu"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
        </button>
      </div>

      {/* Ciemne tło — kliknięcie zamyka menu */}
      {otwarte && (
        <div
          onClick={zamknij}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.5)',
          }}
        />
      )}

      {/* Wysuwany panel z lewej strony */}
      <div style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 300,
        width: '280px',
        background: '#111827',
        transform: otwarte ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        display: 'flex', flexDirection: 'column',
      }}>

        {/* Nagłówek panelu z przyciskiem X */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid #374151' }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Menu</span>
          <button onClick={zamknij} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '1.4rem', lineHeight: 1 }}>✕</button>
        </div>

        {/* Linki nawigacyjne */}
        <nav style={{ flex: 1, padding: '1rem 0' }}>

          <Link to="/" onClick={zamknij} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.85rem 1.25rem',
            color: aktywny('/') ? '#fbbf24' : '#d1d5db',
            fontWeight: aktywny('/') ? 700 : 400,
            textDecoration: 'none',
            background: aktywny('/') ? 'rgba(251,191,36,0.1)' : 'transparent',
            borderLeft: aktywny('/') ? '3px solid #fbbf24' : '3px solid transparent',
          }}>
            <span style={{ fontSize: '1.2rem' }}>🏠</span>
            Strona główna
          </Link>

          <Link to="/boss" onClick={zamknij} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.85rem 1.25rem',
            color: aktywny('/boss') ? '#fbbf24' : '#d1d5db',
            fontWeight: aktywny('/boss') ? 700 : 400,
            textDecoration: 'none',
            background: aktywny('/boss') ? 'rgba(251,191,36,0.1)' : 'transparent',
            borderLeft: aktywny('/boss') ? '3px solid #fbbf24' : '3px solid transparent',
          }}>
            <span style={{ fontSize: '1.2rem' }}>🛒</span>
            BOSS Węgorzewo
          </Link>

          <Link to="/alkohole" onClick={zamknij} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.85rem 1.25rem',
            color: aktywny('/alkohole') ? '#fbbf24' : '#d1d5db',
            fontWeight: aktywny('/alkohole') ? 700 : 400,
            textDecoration: 'none',
            background: aktywny('/alkohole') ? 'rgba(251,191,36,0.1)' : 'transparent',
            borderLeft: aktywny('/alkohole') ? '3px solid #fbbf24' : '3px solid transparent',
          }}>
            <span style={{ fontSize: '1.2rem' }}>🍷</span>
            Alkohole Świata
          </Link>

          {/* Separator */}
          <div style={{ height: '1px', background: '#374151', margin: '0.75rem 1.25rem' }} />

          <Link to="/zaloguj" onClick={zamknij} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.85rem 1.25rem',
            color: aktywny('/zaloguj') ? '#fbbf24' : '#d1d5db',
            fontWeight: aktywny('/zaloguj') ? 700 : 400,
            textDecoration: 'none',
            background: aktywny('/zaloguj') ? 'rgba(251,191,36,0.1)' : 'transparent',
            borderLeft: aktywny('/zaloguj') ? '3px solid #fbbf24' : '3px solid transparent',
          }}>
            <span style={{ fontSize: '1.2rem' }}>🔐</span>
            Zaloguj się
          </Link>

        </nav>

        {/* Kontakt na dole panelu */}
        <div style={{ borderTop: '1px solid #374151', padding: '1.25rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Kontakt</p>
          <Link to="/kontakt" onClick={zamknij} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.75rem 0',
            color: '#d1d5db',
            textDecoration: 'none',
            fontSize: '0.95rem',
          }}>
            <span style={{ fontSize: '1.1rem' }}>✉️</span>
            Napisz do nas
          </Link>
        </div>

      </div>

      {/* Odstęp pod stałym paskiem górnym */}
      <div style={{ height: '56px' }} />
    </>
  )
}
