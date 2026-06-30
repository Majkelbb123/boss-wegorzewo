import { useState, useEffect } from 'react'

export default function ListaProduktow({ firma }) {
  const [produkty, setProdukty]   = useState([])
  const [ladowanie, setLadowanie] = useState(true)
  const [blad, setBlad]           = useState(null)
  const [szukaj, setSzukaj]       = useState('')   // tekst wpisany w wyszukiwarce

  useEffect(() => {
    const pobierzProdukty = async () => {
      try {
        setLadowanie(true)
        setBlad(null)

        // Budujemy URL z parametrami — firma i/lub fraza wyszukiwania
        const params = new URLSearchParams()
        if (firma)  params.set('firma', firma)
        if (szukaj) params.set('szukaj', szukaj)

        const odpowiedz = await fetch(`/api/produkty?${params}`)
        const dane      = await odpowiedz.json()
        setProdukty(dane)
      } catch (err) {
        setBlad('Nie udało się pobrać produktów.')
        console.error(err)
      } finally {
        setLadowanie(false)
      }
    }

    // Czekamy 300ms po ostatnim znaku zanim wyślemy zapytanie
    // Dzięki temu nie wysyłamy zapytania po każdej literze z osobna
    const opoznienie = setTimeout(pobierzProdukty, 300)
    return () => clearTimeout(opoznienie)
  }, [firma, szukaj])

  // ── pole wyszukiwania — zawsze widoczne ─────────────────────
  const wyszukiwarka = (
    <div style={{ marginBottom: '1.5rem' }}>
      <input
        type="text"
        placeholder="Szukaj produktu..."
        value={szukaj}
        onChange={e => setSzukaj(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          border: '2px solid #e5e7eb',
          borderRadius: '10px',
          fontSize: '1rem',
          boxSizing: 'border-box',
          outline: 'none',
        }}
      />
    </div>
  )

  // ── stany widoku ────────────────────────────────────────────
  if (blad) {
    return <>{wyszukiwarka}<p style={{ textAlign: 'center', padding: '2rem', color: '#e44' }}>⚠️ {blad}</p></>
  }

  if (ladowanie) {
    return <>{wyszukiwarka}<p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Szukam...</p></>
  }

  if (produkty.length === 0) {
    return <>{wyszukiwarka}<p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Brak wyników dla „{szukaj}".</p></>
  }

  // ── wyświetlanie produktów ──────────────────────────────────
  return (
    <>
    {wyszukiwarka}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        padding: '1rem 0',
      }}
    >
      {produkty.map((produkt) => (
        <div
          key={produkt.id}
          style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Zdjęcie produktu — jeśli jest URL, pokazujemy zdjęcie, inaczej emoji */}
          {produkt.zdjecie_url ? (
            <div style={{ height: '180px', background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={produkt.zdjecie_url}
                alt={produkt.nazwa}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }}
                onError={e => {
                  // jeśli zdjęcie nie wczyta — schowaj je i pokaż emoji
                  e.target.parentNode.innerHTML = '<span style="font-size:4rem">🛒</span>'
                }}
              />
            </div>
          ) : (
            <div style={{ height: '180px', background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
              🛒
            </div>
          )}

          {/* Treść karty */}
          <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            {produkt.kategoria && (
              <p style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                {produkt.kategoria}
              </p>
            )}

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>
              {produkt.nazwa}
            </h3>

            {produkt.opis && (
              <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {produkt.opis}
              </p>
            )}

            <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a1a1a', marginTop: 'auto' }}>
              {parseFloat(produkt.cena).toFixed(2)} zł
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
