import { Link } from 'react-router-dom'

// ============================================================
// USTAWIENIA STRONY ALKOHOLE ŚWIATA — edytuj tylko tę sekcję
// ============================================================

const INFORMACJE = {
  ikona:    '🍷',                           // emotka lub zdjęcie
  nazwa:    'Alkohole Świata Węgorzewo',    // tytuł strony
  opis:     'Specjalistyczny sklep z alkoholami z całego świata. Znajdziesz u nas unikalne trunki dla koneserów — od klasycznych win po rzadkie whisky.',
}

const ADRES = {
  ulica:     'ul. Przykładowa 2',           // ulica i numer
  kodMiasto: '11-600 Węgorzewo',            // kod pocztowy i miasto
  telefon:   '87 000 00 01',               // numer telefonu
  godzinaOtwarcia: 'Pn–Pt: 10:00–20:00',  // godziny w tygodniu
  godzinaSobota:   'Sob: 10:00–16:00',     // godziny w sobotę
}

// Lista kategorii produktów — możesz dodawać, usuwać lub zmieniać
const KATEGORIE = [
  { ikona: '🍷', nazwa: 'Wina',                      opis: 'Wina czerwone, białe i różowe z całego świata' },
  { ikona: '🥃', nazwa: 'Whisky',                    opis: 'Szkocka, irlandzka, bourbon i wiele innych' },
  { ikona: '🍸', nazwa: 'Gin',                       opis: 'Klasyczne i craft giny najlepszych producentów' },
  { ikona: '🍺', nazwa: 'Piwa rzemieślnicze',        opis: 'Kraftowe piwa z Polski i świata' },
  { ikona: '🥂', nazwa: 'Szampany i wino musujące',  opis: 'Na każdą wyjątkową okazję' },
  { ikona: '🍾', nazwa: 'Rum i brandy',              opis: 'Egzotyczne smaki z odległych krajów' },
]

// ============================================================
// KOD STRONY — nie musisz tu nic zmieniać
// ============================================================

export default function AlkoholeStrona() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      <div className="text-center mb-12">
        <div className="text-5xl mb-4">{INFORMACJE.ikona}</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{INFORMACJE.nazwa}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{INFORMACJE.opis}</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Co znajdziesz w naszym sklepie</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {KATEGORIE.map(kat => (
            <div key={kat.nazwa} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-amber-100">
              <div className="text-4xl mb-3">{kat.ikona}</div>
              <h3 className="font-bold text-gray-800 mb-1">{kat.nazwa}</h3>
              <p className="text-gray-500 text-sm">{kat.opis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-100 rounded-2xl p-8 mb-8 text-center">
        <h2 className="text-xl font-bold text-amber-900 mb-2">🔞 Tylko dla dorosłych</h2>
        <p className="text-amber-800">
          Sprzedaż alkoholu jest dozwolona wyłącznie osobom pełnoletnim (18+).
          Alkohol spożywany w nadmiarze szkodzi zdrowiu.
        </p>
      </section>

      <section className="bg-amber-800 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Odwiedź nas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl mb-2">📍</div>
            <p className="font-semibold">Adres</p>
            <p className="text-amber-200">{ADRES.ulica}<br/>{ADRES.kodMiasto}</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📞</div>
            <p className="font-semibold">Telefon</p>
            <p className="text-amber-200">{ADRES.telefon}</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🕐</div>
            <p className="font-semibold">Godziny</p>
            <p className="text-amber-200">{ADRES.godzinaOtwarcia}<br/>{ADRES.godzinaSobota}</p>
          </div>
        </div>
        <Link to="/kontakt" className="inline-block mt-6 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          Napisz do nas
        </Link>
      </section>

    </main>
  )
}
