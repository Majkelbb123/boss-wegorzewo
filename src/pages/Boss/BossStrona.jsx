import { Link } from 'react-router-dom'

// Strona sekcji BOSS
export default function BossStrona() {
  const kategorie = [
    { ikona: '🥖', nazwa: 'Pieczywo i nabiał', opis: 'Świeże produkty każdego dnia' },
    { ikona: '🥩', nazwa: 'Mięso i wędliny', opis: 'Szeroki wybór wędlin i mięsa' },
    { ikona: '🥫', nazwa: 'Przetwory', opis: 'Konserwy, dżemy, sosy' },
    { ikona: '🧹', nazwa: 'Chemia domowa', opis: 'Środki czystości i higieny' },
    { ikona: '🛠️', nazwa: 'Artykuły przemysłowe', opis: 'Narzędzia i akcesoria' },
    { ikona: '🍬', nazwa: 'Słodycze i przekąski', opis: 'Cukierki, batony, chipsy' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* Nagłówek sekcji */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🛒</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">BOSS Węgorzewo</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Sklep z artykułami spożywczymi i przemysłowymi. Obsługujemy klientów indywidualnych
          oraz firmy w handlu hurtowym i detalicznym.
        </p>
      </div>

      {/* Siatka kategorii */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nasza oferta</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kategorie.map(kat => (
            <div key={kat.nazwa} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-4xl mb-3">{kat.ikona}</div>
              <h3 className="font-bold text-gray-800 mb-1">{kat.nazwa}</h3>
              <p className="text-gray-500 text-sm">{kat.opis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Informacje kontaktowe */}
      <section className="bg-gray-800 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Odwiedź nas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl mb-2">📍</div>
            <p className="font-semibold">Adres</p>
            <p className="text-gray-300">ul. Przykładowa 1<br/>11-600 Węgorzewo</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📞</div>
            <p className="font-semibold">Telefon</p>
            <p className="text-gray-300">87 000 00 00</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🕐</div>
            <p className="font-semibold">Godziny</p>
            <p className="text-gray-300">Pn–Pt: 8:00–18:00<br/>Sob: 9:00–14:00</p>
          </div>
        </div>
        <Link to="/kontakt" className="inline-block mt-6 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          Napisz do nas
        </Link>
      </section>
    </main>
  )
}
