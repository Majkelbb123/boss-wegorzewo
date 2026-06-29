import { useState } from 'react'

// ============================================================
// USTAWIENIA STRONY KONTAKT — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ ——————————————————————————————————————————————————

const BOSS = {
  telefon:   '87 000 00 00',              // numer telefonu
  email:     'boss@wegorzewo.pl',         // adres e-mail
  ulica:     'ul. Przykładowa 1',         // ulica i numer
  kodMiasto: '11-600 Węgorzewo',          // kod i miasto
  godziny:   'Pn–Pt: 8:00–18:00 | Sob: 9:00–14:00',  // godziny otwarcia
}

const ALKOHOLE = {
  telefon:   '87 000 00 01',              // numer telefonu
  email:     'alkohole@wegorzewo.pl',     // adres e-mail
  ulica:     'ul. Przykładowa 2',         // ulica i numer
  kodMiasto: '11-600 Węgorzewo',          // kod i miasto
  godziny:   'Pn–Pt: 10:00–20:00 | Sob: 10:00–16:00', // godziny otwarcia
}

// ——— WYGLĄD NAGŁÓWKA STRONY —————————————————————————————

// Rozmiar tytułu "Kontakt"
// Opcje: 'text-2xl' | 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl' | 'text-6xl'
const TYTUL_ROZMIAR = 'text-4xl'

// Górny i dolny odstęp całej strony (padding)
// Opcje: 'py-6' | 'py-8' | 'py-10' | 'py-12' (domyślny) | 'py-16' | 'py-20'
const STRONA_PADDING = 'py-12'

// ——— FORMULARZ KONTAKTOWY ————————————————————————————————

// Kolor tła karty formularza
// Opcje: 'bg-white' (biały, domyślny) | 'bg-gray-50' | 'bg-amber-50' | 'bg-yellow-50'
const FORMULARZ_TLO = 'bg-white'

// Zaokrąglenie karty formularza
// Opcje: 'rounded-none' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' (domyślne) | 'rounded-3xl'
const FORMULARZ_ZAOKRAGLENIE = 'rounded-2xl'

// Cień karty formularza
// Opcje: 'shadow-none' | 'shadow-sm' | 'shadow-md' (domyślny) | 'shadow-lg' | 'shadow-xl'
const FORMULARZ_CIEN = 'shadow-md'

// Kolor podświetlenia pól formularza (gdy klikniesz na pole)
// Opcje: 'focus:ring-yellow-400' (żółty, domyślny) | 'focus:ring-amber-400' | 'focus:ring-blue-400' | 'focus:ring-green-400' | 'focus:ring-gray-400'
const FORMULARZ_KOLOR_FOKUS = 'focus:ring-yellow-400'

// Kolor przycisku "Wyślij wiadomość"
// Opcje: 'bg-yellow-400' (żółty, domyślny) | 'bg-amber-400' | 'bg-gray-800' | 'bg-blue-600' | 'bg-green-600'
const PRZYCISK_KOLOR = 'bg-yellow-400'

// Kolor tekstu na przycisku
// Opcje: 'text-gray-900' (ciemny, domyślny) | 'text-black' | 'text-white'
const PRZYCISK_TEKST = 'text-gray-900'

// Zaokrąglenie przycisku
// Opcje: 'rounded-none' | 'rounded-lg' | 'rounded-xl' | 'rounded-full' (pigułka, domyślne)
const PRZYCISK_ZAOKRAGLENIE = 'rounded-lg'

// ——— KARTY Z ADRESAMI ————————————————————————————————————

// Kolor tła karty BOSS
// Opcje: 'bg-gray-800' (ciemny szary, domyślny) | 'bg-gray-900' | 'bg-black' | 'bg-blue-900' | 'bg-slate-800'
const BOSS_KARTA_TLO = 'bg-gray-800'

// Kolor tytułu karty BOSS
// Opcje: 'text-yellow-400' (żółty, domyślny) | 'text-amber-300' | 'text-white' | 'text-green-400'
const BOSS_TYTUL_KOLOR = 'text-yellow-400'

// Kolor tekstu szczegółów BOSS (adres, telefon itp.)
// Opcje: 'text-gray-300' (jasny szary, domyślny) | 'text-gray-200' | 'text-white' | 'text-gray-400'
const BOSS_TEKST_KOLOR = 'text-gray-300'

// Kolor tła karty ALKOHOLE ŚWIATA
// Opcje: 'bg-amber-800' (brązowy, domyślny) | 'bg-amber-900' | 'bg-orange-900' | 'bg-red-900' | 'bg-purple-900'
const ALKOHOLE_KARTA_TLO = 'bg-amber-800'

// Kolor tytułu karty ALKOHOLE ŚWIATA
// Opcje: 'text-yellow-400' (żółty, domyślny) | 'text-amber-300' | 'text-white' | 'text-orange-300'
const ALKOHOLE_TYTUL_KOLOR = 'text-yellow-400'

// Kolor tekstu szczegółów ALKOHOLE ŚWIATA
// Opcje: 'text-amber-200' (jasny brązowy, domyślny) | 'text-amber-100' | 'text-white' | 'text-gray-200'
const ALKOHOLE_TEKST_KOLOR = 'text-amber-200'

// ——— UKŁAD STRONY ————————————————————————————————————————

// Układ głównej sekcji (formularz + karty adresowe)
// Opcje:
//   'grid md:grid-cols-2 gap-10'   ← 2 kolumny obok siebie (domyślne)
//   'flex flex-col gap-8'          ← jedna pod drugą (wszystko w jednej kolumnie)
const UKLAD = 'grid md:grid-cols-2 gap-10'

// ============================================================
// KOD STRONY — nie musisz tu nic zmieniać
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
    <main className={`max-w-4xl mx-auto px-4 ${STRONA_PADDING}`}>
      <h1 className={`${TYTUL_ROZMIAR} font-bold text-gray-800 mb-2 text-center`}>Kontakt</h1>
      <p className="text-gray-500 text-center mb-10">Napisz do nas lub odwiedź sklep w Węgorzewie</p>

      <div className={UKLAD}>

        {/* Formularz */}
        <div className={`${FORMULARZ_TLO} ${FORMULARZ_ZAOKRAGLENIE} ${FORMULARZ_CIEN} p-8 border border-gray-100`}>
          <h2 className="text-xl font-bold text-gray-700 mb-6">Napisz wiadomość</h2>
          {wyslany ? (
            <div className="bg-green-100 text-green-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-semibold">Dziękujemy za wiadomość!</p>
              <p className="text-sm mt-1">Odezwiemy się wkrótce.</p>
            </div>
          ) : (
            <form onSubmit={wyslij} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                <input type="text" name="imie" required value={formularz.imie} onChange={zmienPole}
                  className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${FORMULARZ_KOLOR_FOKUS}`}
                  placeholder="Jan Kowalski" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail</label>
                <input type="email" name="email" required value={formularz.email} onChange={zmienPole}
                  className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${FORMULARZ_KOLOR_FOKUS}`}
                  placeholder="jan@przykład.pl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                <textarea name="wiadomosc" required rows={4} value={formularz.wiadomosc} onChange={zmienPole}
                  className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${FORMULARZ_KOLOR_FOKUS} resize-none`}
                  placeholder="W czym możemy pomóc?" />
              </div>
              <button type="submit" className={`w-full ${PRZYCISK_KOLOR} ${PRZYCISK_TEKST} ${PRZYCISK_ZAOKRAGLENIE} py-3 font-bold hover:opacity-90 transition-opacity`}>
                Wyślij wiadomość
              </button>
            </form>
          )}
        </div>

        {/* Karty adresowe */}
        <div className="space-y-6">
          <div className={`${BOSS_KARTA_TLO} text-white rounded-2xl p-6`}>
            <h3 className={`${BOSS_TYTUL_KOLOR} font-bold text-lg mb-4`}>🛒 BOSS Węgorzewo</h3>
            <p className={BOSS_TEKST_KOLOR}>📍 {BOSS.ulica}, {BOSS.kodMiasto}</p>
            <p className={`mt-1 ${BOSS_TEKST_KOLOR}`}>📞 {BOSS.telefon}</p>
            <p className={`mt-1 ${BOSS_TEKST_KOLOR}`}>📧 {BOSS.email}</p>
            <p className={`mt-3 text-sm ${BOSS_TEKST_KOLOR}`}>{BOSS.godziny}</p>
          </div>

          <div className={`${ALKOHOLE_KARTA_TLO} text-white rounded-2xl p-6`}>
            <h3 className={`${ALKOHOLE_TYTUL_KOLOR} font-bold text-lg mb-4`}>🍷 Alkohole Świata Węgorzewo</h3>
            <p className={ALKOHOLE_TEKST_KOLOR}>📍 {ALKOHOLE.ulica}, {ALKOHOLE.kodMiasto}</p>
            <p className={`mt-1 ${ALKOHOLE_TEKST_KOLOR}`}>📞 {ALKOHOLE.telefon}</p>
            <p className={`mt-1 ${ALKOHOLE_TEKST_KOLOR}`}>📧 {ALKOHOLE.email}</p>
            <p className={`mt-3 text-sm ${ALKOHOLE_TEKST_KOLOR}`}>{ALKOHOLE.godziny}</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 text-center text-gray-500">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="font-semibold">Węgorzewo, Polska</p>
            <p className="text-sm mt-1">Mapa Google zostanie dodana wkrótce</p>
          </div>
        </div>
      </div>
    </main>
  )
}
