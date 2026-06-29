import { useState } from 'react'

// ============================================================
// DANE SKLEPÓW — edytuj tutaj
// ============================================================

const BOSS = {
  telefon:   '87 000 00 00',
  email:     'boss@wegorzewo.pl',
  ulica:     'ul. Przykładowa 1',
  kodMiasto: '11-600 Węgorzewo',
  godzinyTydz: 'Pn–Pt: 8:00–18:00',
  godzinySob:  'Sobota: 9:00–14:00',
  godzinyNied: 'Niedziela: zamknięte',
}

const ALKOHOLE = {
  telefon:   '87 000 00 01',
  email:     'alkohole@wegorzewo.pl',
  ulica:     'ul. Przykładowa 2',
  kodMiasto: '11-600 Węgorzewo',
  godzinyTydz: 'Pn–Pt: 10:00–20:00',
  godzinySob:  'Sobota: 10:00–16:00',
  godzinyNied: 'Niedziela: zamknięte',
}

// ============================================================
// KOD STRONY
// ============================================================

export default function Kontakt() {
  const [formularz, setFormularz] = useState({ imie: '', email: '', wiadomosc: '' })
  const [wyslany, setWyslany] = useState(false)

  function zmienPole(e) {
    setFormularz({ ...formularz, [e.target.name]: e.target.value })
  }

  function wyslij(e) {
    e.preventDefault()
    setWyslany(true)
  }

  return (
    <main>

      {/* Nagłówek — ciepłe powitanie */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>👋</div>
        <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#fbbf24', marginBottom: '16px', lineHeight: '1.2' }}>
          Chętnie porozmawiamy!
        </h1>
        <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
          Masz pytanie, zamówienie albo po prostu chcesz się przywitać?<br/>
          Jesteśmy tu dla Ciebie — w sklepie, przez telefon lub e-mail.
        </p>
      </section>

      {/* Trzy szybkie sposoby kontaktu */}
      <section style={{ background: '#f8fafc', padding: '48px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ background: 'white', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '2px solid #fef3c7' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📞</div>
            <h3 style={{ fontWeight: '700', color: '#1f2937', fontSize: '17px', marginBottom: '8px' }}>Zadzwoń</h3>
            <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '12px' }}>Odbieramy od pon. do sob.</p>
            <a href={`tel:${BOSS.telefon.replace(/\s/g,'')}`} style={{ display: 'block', color: '#d97706', fontWeight: '800', fontSize: '18px', textDecoration: 'none', marginBottom: '4px' }}>{BOSS.telefon}</a>
            <a href={`tel:${ALKOHOLE.telefon.replace(/\s/g,'')}`} style={{ display: 'block', color: '#b45309', fontWeight: '800', fontSize: '18px', textDecoration: 'none' }}>{ALKOHOLE.telefon}</a>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '2px solid #fef3c7' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✉️</div>
            <h3 style={{ fontWeight: '700', color: '#1f2937', fontSize: '17px', marginBottom: '8px' }}>Napisz e-mail</h3>
            <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '12px' }}>Odpowiadamy w ciągu doby.</p>
            <a href={`mailto:${BOSS.email}`} style={{ display: 'block', color: '#d97706', fontWeight: '700', fontSize: '14px', textDecoration: 'none', marginBottom: '4px' }}>{BOSS.email}</a>
            <a href={`mailto:${ALKOHOLE.email}`} style={{ display: 'block', color: '#b45309', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>{ALKOHOLE.email}</a>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '2px solid #fef3c7' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📍</div>
            <h3 style={{ fontWeight: '700', color: '#1f2937', fontSize: '17px', marginBottom: '8px' }}>Odwiedź nas</h3>
            <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '12px' }}>Znajdziesz nas w centrum Węgorzewa.</p>
            <p style={{ color: '#d97706', fontWeight: '700', fontSize: '14px', marginBottom: '4px' }}>{BOSS.ulica}</p>
            <p style={{ color: '#b45309', fontWeight: '700', fontSize: '14px' }}>{ALKOHOLE.ulica}</p>
          </div>

        </div>
      </section>

      {/* Karty sklepów */}
      <section style={{ background: 'white', padding: '48px 32px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '800', color: '#1f2937', marginBottom: '40px' }}>Nasze sklepy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>

          {/* BOSS */}
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
            <div style={{ background: '#1f2937', padding: '24px 28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🛒</div>
              <h3 style={{ color: '#fbbf24', fontWeight: '900', fontSize: '20px', margin: '0' }}>BOSS Węgorzewo</h3>
              <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '4px' }}>Artykuły spożywcze i przemysłowe</p>
            </div>
            <div style={{ background: '#f9fafb', padding: '24px 28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <span style={{ color: '#374151', fontSize: '15px' }}>{BOSS.ulica}, {BOSS.kodMiasto}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>📞</span>
                  <a href={`tel:${BOSS.telefon.replace(/\s/g,'')}`} style={{ color: '#d97706', fontWeight: '700', fontSize: '16px', textDecoration: 'none' }}>{BOSS.telefon}</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>✉️</span>
                  <a href={`mailto:${BOSS.email}`} style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>{BOSS.email}</a>
                </div>
                <div style={{ marginTop: '8px', background: '#fef3c7', borderRadius: '12px', padding: '12px 16px' }}>
                  <p style={{ fontWeight: '700', color: '#92400e', fontSize: '13px', margin: '0 0 4px 0' }}>🕐 Godziny otwarcia</p>
                  <p style={{ color: '#78350f', fontSize: '13px', margin: '0 0 2px 0' }}>{BOSS.godzinyTydz}</p>
                  <p style={{ color: '#78350f', fontSize: '13px', margin: '0 0 2px 0' }}>{BOSS.godzinySob}</p>
                  <p style={{ color: '#a8a29e', fontSize: '13px', margin: '0' }}>{BOSS.godzinyNied}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ALKOHOLE */}
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
            <div style={{ background: '#7c2d12', padding: '24px 28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🍷</div>
              <h3 style={{ color: '#fbbf24', fontWeight: '900', fontSize: '20px', margin: '0' }}>Alkohole Świata</h3>
              <p style={{ color: '#fca5a5', fontSize: '13px', marginTop: '4px' }}>Specjalistyczny sklep z alkoholami</p>
            </div>
            <div style={{ background: '#f9fafb', padding: '24px 28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <span style={{ color: '#374151', fontSize: '15px' }}>{ALKOHOLE.ulica}, {ALKOHOLE.kodMiasto}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>📞</span>
                  <a href={`tel:${ALKOHOLE.telefon.replace(/\s/g,'')}`} style={{ color: '#b45309', fontWeight: '700', fontSize: '16px', textDecoration: 'none' }}>{ALKOHOLE.telefon}</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>✉️</span>
                  <a href={`mailto:${ALKOHOLE.email}`} style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>{ALKOHOLE.email}</a>
                </div>
                <div style={{ marginTop: '8px', background: '#fef3c7', borderRadius: '12px', padding: '12px 16px' }}>
                  <p style={{ fontWeight: '700', color: '#92400e', fontSize: '13px', margin: '0 0 4px 0' }}>🕐 Godziny otwarcia</p>
                  <p style={{ color: '#78350f', fontSize: '13px', margin: '0 0 2px 0' }}>{ALKOHOLE.godzinyTydz}</p>
                  <p style={{ color: '#78350f', fontSize: '13px', margin: '0 0 2px 0' }}>{ALKOHOLE.godzinySob}</p>
                  <p style={{ color: '#a8a29e', fontSize: '13px', margin: '0' }}>{ALKOHOLE.godzinyNied}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Formularz kontaktowy */}
      <section style={{ background: '#f1f5f9', padding: '48px 32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '800', color: '#1f2937', marginBottom: '8px' }}>Wyślij wiadomość</h2>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '15px', marginBottom: '32px' }}>Masz pytanie? Napisz — odpowiemy tak szybko jak to możliwe.</p>

          {wyslany ? (
            <div style={{ background: 'white', borderRadius: '24px', padding: '48px 32px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1f2937', marginBottom: '8px' }}>Dziękujemy!</h3>
              <p style={{ color: '#6b7280', fontSize: '15px' }}>Twoja wiadomość dotarła. Odezwiemy się wkrótce!</p>
            </div>
          ) : (
            <form onSubmit={wyslij} style={{ background: 'white', borderRadius: '24px', padding: '40px 36px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: '600', color: '#374151', fontSize: '14px', marginBottom: '6px' }}>Imię i nazwisko</label>
                <input type="text" name="imie" required value={formularz.imie} onChange={zmienPole}
                  placeholder="Jan Kowalski"
                  style={{ width: '100%', border: '2px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor='#fbbf24'}
                  onBlur={e => e.target.style.borderColor='#e5e7eb'} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: '600', color: '#374151', fontSize: '14px', marginBottom: '6px' }}>Adres e-mail</label>
                <input type="email" name="email" required value={formularz.email} onChange={zmienPole}
                  placeholder="jan@przykład.pl"
                  style={{ width: '100%', border: '2px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor='#fbbf24'}
                  onBlur={e => e.target.style.borderColor='#e5e7eb'} />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontWeight: '600', color: '#374151', fontSize: '14px', marginBottom: '6px' }}>Wiadomość</label>
                <textarea name="wiadomosc" required rows={5} value={formularz.wiadomosc} onChange={zmienPole}
                  placeholder="W czym możemy Ci pomóc?"
                  style={{ width: '100%', border: '2px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', outline: 'none', boxSizing: 'border-box', resize: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor='#fbbf24'}
                  onBlur={e => e.target.style.borderColor='#e5e7eb'} />
              </div>
              <button type="submit"
                style={{ width: '100%', background: '#fbbf24', color: '#1f2937', fontWeight: '800', fontSize: '16px', padding: '14px', borderRadius: '14px', border: 'none', cursor: 'pointer' }}>
                Wyślij wiadomość →
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  )
}
