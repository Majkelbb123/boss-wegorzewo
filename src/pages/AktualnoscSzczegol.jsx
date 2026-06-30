import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function AktualnoscSzczegol() {
  const { id } = useParams()
  const [wpis, setWpis]     = useState(null)
  const [laduje, setLaduje] = useState(true)
  const [blad, setBlad]     = useState('')

  useEffect(() => {
    fetch(`/api/aktualnosci/${id}`)
      .then(r => {
        if (!r.ok) throw new Error()
        return r.json()
      })
      .then(d => { setWpis(d); setLaduje(false) })
      .catch(() => { setBlad('Nie udało się wczytać aktualności'); setLaduje(false) })
  }, [id])

  const formatujDate = (iso) => {
    const d = new Date(iso)
    return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  const kolorFirmy = (firma) => firma === 'BOSS' ? '#1d4ed8' : '#7f1d1d'
  const tloFirmy   = (firma) => firma === 'BOSS' ? '#eff6ff' : '#fff1f2'

  if (laduje) return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1rem', textAlign: 'center', color: '#9ca3af' }}>
      Ładuję...
    </div>
  )

  if (blad || !wpis) return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1rem' }}>
      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
        <p style={{ color: '#dc2626', fontWeight: 600 }}>Nie znaleziono aktualności</p>
        <Link to="/aktualnosci" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#1d4ed8', textDecoration: 'none', fontWeight: 600 }}>
          ← Wróć do aktualności
        </Link>
      </div>
    </div>
  )

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Przycisk powrotu */}
      <Link
        to="/aktualnosci"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1.5rem' }}
      >
        ← Wszystkie aktualności
      </Link>

      {/* Karta artykułu */}
      <article style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden' }}>

        {/* Pasek koloru firmy */}
        <div style={{ height: '6px', background: kolorFirmy(wpis.firma) }} />

        <div style={{ padding: '2rem' }}>

          {/* Firma + data */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{
              padding: '0.3rem 1rem',
              borderRadius: '999px',
              background: tloFirmy(wpis.firma),
              color: kolorFirmy(wpis.firma),
              fontSize: '0.85rem',
              fontWeight: 700,
            }}>
              {wpis.firma === 'BOSS' ? '🛒 BOSS Węgorzewo' : '🍷 Alkohole Świata'}
            </span>
            <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
              📅 {formatujDate(wpis.created_at)}
            </span>
          </div>

          {/* Tytuł */}
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', lineHeight: 1.3, marginBottom: '1.5rem' }}>
            {wpis.tytul}
          </h1>

          {/* Separator */}
          <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', marginBottom: '1.5rem' }} />

          {/* Treść — każda linia jako osobny akapit */}
          <div style={{ color: '#374151', lineHeight: 1.85, fontSize: '1.05rem' }}>
            {wpis.tresc.split('\n').map((linia, i) =>
              linia.trim()
                ? <p key={i} style={{ marginBottom: '1rem' }}>{linia}</p>
                : <br key={i} />
            )}
          </div>

        </div>
      </article>

      {/* Przycisk powrotu na dole */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link
          to="/aktualnosci"
          style={{ display: 'inline-block', padding: '0.75rem 2rem', background: '#111827', color: '#fff', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}
        >
          ← Wróć do aktualności
        </Link>
      </div>

    </div>
  )
}
