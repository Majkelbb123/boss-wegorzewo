import { useState } from 'react'

// ============================================================
// USTAWIENIA STRONY KONTAKT — edytuj tylko tę sekcję
// ============================================================

const BOSS = {
  telefon:   '87 000 00 00',               // numer telefonu
  email:     'boss@wegorzewo.pl',          // adres e-mail
  ulica:     'ul. Przykładowa 1',          // ulica i numer
  kodMiasto: '11-600 Węgorzewo',           // kod i miasto
  godziny:   'Pn–Pt: 8:00–18:00 | Sob: 9:00–14:00',  // godziny otwarcia
}

const ALKOHOLE = {
  telefon:   '87 000 00 01',               // numer telefonu
  email:     'alkohole@wegorzewo.pl',      // adres e-mail
  ulica:     'ul. Przykładowa 2',          // ulica i numer
  kodMiasto: '11-600 Węgorzewo',           // kod i miasto
  godziny:   'Pn–Pt: 10:00–20:00 | Sob: 10:00–16:00', // godziny otwarcia
}

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
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Kontakt</h1>
      <p className="text-gray-500 text-center mb-10">Napisz do nas lub odwiedź sklep w Węgorzewie</p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Jan Kowalski" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail</label>
                <input type="email" name="email" required value={formularz.email} onChange={zmienPole}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="jan@przykład.pl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                <textarea name="wiadomosc" required rows={4} value={formularz.wiadomosc} onChange={zmienPole}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  placeholder="W czym możemy pomóc?" />
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                Wyślij wiadomość
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 text-white rounded-2xl p-6">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">🛒 BOSS Węgorzewo</h3>
            <p>📍 {BOSS.ulica}, {BOSS.kodMiasto}</p>
            <p className="mt-1">📞 {BOSS.telefon}</p>
            <p className="mt-1">📧 {BOSS.email}</p>
            <p className="mt-3 text-gray-300 text-sm">{BOSS.godziny}</p>
          </div>

          <div className="bg-amber-800 text-white rounded-2xl p-6">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">🍷 Alkohole Świata Węgorzewo</h3>
            <p>📍 {ALKOHOLE.ulica}, {ALKOHOLE.kodMiasto}</p>
            <p className="mt-1">📞 {ALKOHOLE.telefon}</p>
            <p className="mt-1">📧 {ALKOHOLE.email}</p>
            <p className="mt-3 text-amber-200 text-sm">{ALKOHOLE.godziny}</p>
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
