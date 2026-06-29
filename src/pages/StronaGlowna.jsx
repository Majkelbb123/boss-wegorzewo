import { Link } from 'react-router-dom'

// Strona główna — prezentacja obu firm
export default function StronaGlowna() {
  return (
    <main>
      {/* Baner powitalny */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Witamy w <span className="text-yellow-400">Węgorzewie</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Dwie marki, jeden cel — najlepsza oferta dla Ciebie
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/boss" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
            Zobacz BOSS
          </Link>
          <Link to="/alkohole" className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-colors">
            Alkohole Świata
          </Link>
        </div>
      </section>

      {/* Dwie karty firm */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">

        {/* Karta BOSS */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="bg-gray-800 p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold text-yellow-400">BOSS</h2>
            <p className="text-gray-300 mt-2">Węgorzewo</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Sklep z szeroką ofertą artykułów spożywczych i przemysłowych.
              Obsługujemy zarówno klientów indywidualnych jak i firmy.
            </p>
            <ul className="text-gray-500 space-y-1 mb-6">
              <li>✓ Artykuły spożywcze</li>
              <li>✓ Artykuły przemysłowe</li>
              <li>✓ Sprzedaż hurtowa i detaliczna</li>
            </ul>
            <Link to="/boss" className="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
              Poznaj ofertę →
            </Link>
          </div>
        </div>

        {/* Karta Alkohole Świata */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="bg-amber-800 p-8 text-center">
            <div className="text-6xl mb-4">🍷</div>
            <h2 className="text-3xl font-bold text-yellow-400">Alkohole Świata</h2>
            <p className="text-amber-200 mt-2">Węgorzewo</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Specjalistyczny sklep z alkoholami z całego świata. Wina, whisky,
              giny i wiele więcej — dla prawdziwych koneserów.
            </p>
            <ul className="text-gray-500 space-y-1 mb-6">
              <li>✓ Wina z całego świata</li>
              <li>✓ Whisky, rum, gin</li>
              <li>✓ Limitowane edycje</li>
            </ul>
            <Link to="/alkohole" className="block text-center bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
              Poznaj ofertę →
            </Link>
          </div>
        </div>
      </section>

      {/* Sekcja lokalizacja */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Znajdź nas w Węgorzewie</h2>
        <p className="text-gray-600 mb-6">Jesteśmy otwarci od poniedziałku do soboty</p>
        <Link to="/kontakt" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          Zobacz mapę i kontakt
        </Link>
      </section>
    </main>
  )
}
