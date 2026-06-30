import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Aktualnosci() {
  const [aktualnosci, setAktualnosci] = useState([])
  const [laduje, setLaduje]           = useState(true)
  const [blad, setBlad]               = useState('')
  const [filtr, setFiltr]             = useState('wszystkie') // wszystkie | BOSS | ALKOHOLE

  useEffect(() => {
    const url = filtr === 'wszystkie' ? '/api/aktualnosci' : `/api/aktualnosci?firma=${filtr}`
    fetch(url)
      .then(r => r.json())
      .then(d => { setAktualnosci(d); setLaduje(false) })
      .catch(() => { setBlad('Nie udało się pobrać aktualności'); setLaduje(false) })
  }, [filtr])

  const formatujDate = (iso) => {
    const d = new Date(iso)
    return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  // Kolor firmy — BOSS = niebieski, ALKOHOLE = burgundowy
  const kolorFirmy = (firma) => firma === 'BOSS' ? '#1d4ed8' : '#7f1d1d'
  const tloFirmy   = (firma) => firma === 'BOSS' ? '#eff6ff' : '#fff1f2'

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Nagłówek */}
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', marginBottom: '0.5rem' }}>
        📰 Aktualności
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
        Najnowsze informacje i promocje z BOSS Węgorzewo i Alkohole Świata
      </p>

      {/* Filtry */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[
          { klucz: 'wszystkie', etykieta: '🔍 Wszystkie' },
          { klucz: 'BOSS',      etykieta: '🛒 BOSS' },
          { klucz: 'ALKOHOLE',  etykieta: '🍷 Alkohole Świata' },
        ].map(({ klucz, etykieta }) => (
          <button
            key={klucz}
            onClick={() => setFiltr(klucz)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '999px',
              border: '2px solid',
              borderColor: filtr === klucz ? '#111827' : '#e5e7eb',
              background: filtr === klucz ? '#111827' : '#fff',
              color: filtr === klucz ? '#fff' : '#374151',
              fontWeight: filtr === klucz ? 700 : 400,
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.15s',
            }}
          >
            {etykieta}
          </button>
        ))}
      </div>

      {/* Stany ładowania / błędu */}
      {laduje && (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af', fontSize: '1.1rem' }}>
          Ładuję aktualności...
        </div>
      )}
      {blad && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1.5rem', color: '#dc2626', textAlign: 'center' }}>
          ❌ {blad}
        </div>
      )}

      {/* Brak aktualności */}
      {!laduje && !blad && aktualnosci.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
          <p style={{ fontSize: '1.1rem' }}>Brak aktualności do wyświetlenia</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Wróć tu wkrótce — pojawią się nowe informacje</p>
        </div>
      )}

      {/* Lista aktualności */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {aktualnosci.map(a => (
          <Link
            key={a.id}
            to={`/aktualnosci/${a.id}`}
            style={{ textDecoration: 'none' }}
          >
            <article
              style={{
                background: '#fff',
                borderRadius: '14px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                overflow: 'hidden',
                border: '1px solid #f3f4f6',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.13)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Pasek koloru firmy na górze karty */}
              <div style={{ height: '4px', background: kolorFirmy(a.firma) }} />

              <div style={{ padding: '1.5rem' }}>
                {/* Znacznik firmy + data */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.85rem',
                    borderRadius: '999px',
                    background: tloFirmy(a.firma),
                    color: kolorFirmy(a.firma),
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}>
                    {a.firma === 'BOSS' ? '🛒 BOSS Węgorzewo' : '🍷 Alkohole Świata'}
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                    {formatujDate(a.created_at)}
                  </span>
                </div>

                {/* Tytuł */}
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {a.tytul}
                </h2>

                {/* Skrócona treść — pierwsze 150 znaków */}
                <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.95rem', margin: '0 0 0.75rem 0' }}>
                  {a.tresc.length > 150 ? a.tresc.slice(0, 150) + '…' : a.tresc}
                </p>

                {/* Przycisk "czytaj więcej" */}
                <span style={{ color: kolorFirmy(a.firma), fontSize: '0.9rem', fontWeight: 600 }}>
                  Czytaj więcej →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

    </div>
  )
}
