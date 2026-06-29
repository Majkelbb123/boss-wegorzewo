import { Link } from 'react-router-dom'

// ============================================================
// USTAWIENIA STRONY ALKOHOLE ŚWIATA — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ ——————————————————————————————————————————————————

const INFORMACJE = {
  ikona: '🍷',                            // emotka lub ścieżka do zdjęcia
  nazwa: 'Alkohole Świata Węgorzewo',     // tytuł strony
  opis:  'Specjalistyczny sklep z alkoholami z całego świata. Znajdziesz u nas unikalne trunki dla koneserów — od klasycznych win po rzadkie whisky.',
}

const ADRES = {
  ulica:           'ul. Przykładowa 2',    // ulica i numer
  kodMiasto:       '11-600 Węgorzewo',     // kod pocztowy i miasto
  telefon:         '87 000 00 01',         // numer telefonu
  godzinaOtwarcia: 'Pn–Pt: 10:00–20:00', // godziny w tygodniu
  godzinaSobota:   'Sob: 10:00–16:00',   // godziny w sobotę
}

// Lista kategorii produktów — możesz dodawać, usuwać lub zmieniać kolejność
const KATEGORIE = [
  { ikona: '🍷', nazwa: 'Wina',                     opis: 'Wina czerwone, białe i różowe z całego świata' },
  { ikona: '🥃', nazwa: 'Whisky',                   opis: 'Szkocka, irlandzka, bourbon i wiele innych' },
  { ikona: '🍸', nazwa: 'Gin',                      opis: 'Klasyczne i craft giny najlepszych producentów' },
  { ikona: '🍺', nazwa: 'Piwa rzemieślnicze',       opis: 'Kraftowe piwa z Polski i świata' },
  { ikona: '🥂', nazwa: 'Szampany i wino musujące', opis: 'Na każdą wyjątkową okazję' },
  { ikona: '🍾', nazwa: 'Rum i brandy',             opis: 'Egzotyczne smaki z odległych krajów' },
]

// ——— NAGŁÓWEK STRONY ————————————————————————————————————

// Rozmiar głównej ikony/emotki na górze strony
// Opcje: 'text-4xl' | 'text-5xl' (domyślne) | 'text-6xl' | 'text-7xl' | 'text-8xl' (ogromna)
const IKONA_ROZMIAR = 'text-5xl'

// Rozmiar tytułu strony
// Opcje: 'text-2xl' | 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl' | 'text-6xl'
const TYTUL_ROZMIAR = 'text-4xl'

// Rozmiar opisu pod tytułem
// Opcje: 'text-sm' | 'text-base' | 'text-lg' (domyślne) | 'text-xl'
const OPIS_ROZMIAR = 'text-lg'

// Odstęp nagłówka
// Opcje: 'mb-6' | 'mb-8' | 'mb-10' | 'mb-12' (domyślny) | 'mb-16'
const NAGLOWEK_ODSTEP = 'mb-12'

// ——— SIATKA KART KATEGORII ——————————————————————————————

// Liczba kolumn z kartami kategorii
// Opcje:
//   'grid sm:grid-cols-2'                    ← 2 kolumny (na szerokim ekranie)
//   'grid sm:grid-cols-2 md:grid-cols-3'     ← 3 kolumny (domyślne)
//   'grid sm:grid-cols-2 md:grid-cols-4'     ← 4 kolumny (małe karty)
const SIATKA_KOLUMNY = 'grid sm:grid-cols-2 md:grid-cols-3'

// Odstęp między kartami
// Opcje: 'gap-3' (mały) | 'gap-4' | 'gap-6' (domyślny) | 'gap-8' | 'gap-10' (duży)
const SIATKA_ODSTEP = 'gap-6'

// Kolor tła kart
// Opcje: 'bg-white' (biały, domyślny) | 'bg-amber-50' | 'bg-yellow-50' | 'bg-gray-50' | 'bg-orange-50'
const KARTA_TLO = 'bg-white'

// Zaokrąglenie rogów kart
// Opcje: 'rounded-none' | 'rounded-lg' | 'rounded-xl' (domyślne) | 'rounded-2xl' | 'rounded-3xl'
const KARTA_ZAOKRAGLENIE = 'rounded-xl'

// Cień kart
// Opcje: 'shadow-none' | 'shadow-sm' | 'shadow-md' (domyślny) | 'shadow-lg' | 'shadow-xl'
const KARTA_CIEN = 'shadow-md'

// Kolor obramowania kart
// Opcje: 'border-amber-100' (domyślny) | 'border-gray-100' | 'border-gray-200' | 'border-yellow-200' | 'border-orange-200'
const KARTA_OBRAMOWANIE = 'border-amber-100'

// Wewnętrzny odstęp kart (padding)
// Opcje: 'p-4' (mały) | 'p-5' | 'p-6' (domyślny) | 'p-8' | 'p-10' (duży)
const KARTA_PADDING = 'p-6'

// Rozmiar ikony na karcie
// Opcje: 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl' | 'text-6xl'
const KARTA_IKONA_ROZMIAR = 'text-4xl'

// Rozmiar nazwy kategorii na karcie
// Opcje: 'text-sm' | 'text-base' (domyślne) | 'text-lg' | 'text-xl'
const KARTA_NAZWA_ROZMIAR = 'text-base'

// Rozmiar opisu na karcie
// Opcje: 'text-xs' | 'text-sm' (domyślne) | 'text-base'
const KARTA_OPIS_ROZMIAR = 'text-sm'

// ——— BANER "TYLKO DLA DOROSŁYCH" ————————————————————————

// Czy pokazywać baner 18+ (true = tak, false = nie)
const POKAZ_BANER_18 = true

// Kolor tła banera
// Opcje: 'bg-amber-100' (jasny brązowy, domyślny) | 'bg-red-100' | 'bg-yellow-100' | 'bg-orange-100'
const BANER_TLO = 'bg-amber-100'

// Kolor tekstu tytułu banera
// Opcje: 'text-amber-900' (domyślny) | 'text-red-900' | 'text-orange-900' | 'text-gray-900'
const BANER_TYTUL = 'text-amber-900'

// Kolor tekstu treści banera
// Opcje: 'text-amber-800' (domyślny) | 'text-red-800' | 'text-orange-800' | 'text-gray-700'
const BANER_TEKST = 'text-amber-800'

// ——— SEKCJA KONTAKTOWA NA DOLE ——————————————————————————

// Kolor tła sekcji kontaktowej
// Opcje: 'bg-amber-800' (brązowy, domyślny) | 'bg-amber-900' | 'bg-orange-900' | 'bg-red-900' | 'bg-purple-900'
const KONTAKT_TLO = 'bg-amber-800'

// Kolor tytułu sekcji kontaktowej
// Opcje: 'text-yellow-400' (żółty, domyślny) | 'text-amber-300' | 'text-white' | 'text-orange-300'
const KONTAKT_TYTUL_KOLOR = 'text-yellow-400'

// Kolor tekstu (adres, telefon) w sekcji kontaktowej
// Opcje: 'text-amber-200' (jasny brązowy, domyślny) | 'text-amber-100' | 'text-white' | 'text-gray-200'
const KONTAKT_TEKST_KOLOR = 'text-amber-200'

// Kolor przycisku "Napisz do nas"
// Opcje: 'bg-yellow-400' (żółty, domyślny) | 'bg-amber-400' | 'bg-white' | 'bg-orange-400'
const PRZYCISK_KOLOR = 'bg-yellow-400'

// Kolor tekstu przycisku
// Opcje: 'text-gray-900' (ciemny, domyślny) | 'text-black' | 'text-white'
const PRZYCISK_TEKST = 'text-gray-900'

// Zaokrąglenie przycisku
// Opcje: 'rounded-none' | 'rounded-lg' | 'rounded-xl' | 'rounded-full' (pigułka, domyślne)
const PRZYCISK_ZAOKRAGLENIE = 'rounded-full'

// ============================================================
// KOD STRONY — nie musisz tu nic zmieniać
// ============================================================

export default function AlkoholeStrona() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      <div className={`text-center ${NAGLOWEK_ODSTEP}`}>
        <div className={`${IKONA_ROZMIAR} mb-4`}>{INFORMACJE.ikona}</div>
        <h1 className={`${TYTUL_ROZMIAR} font-bold text-gray-800 mb-4`}>{INFORMACJE.nazwa}</h1>
        <p className={`text-gray-600 ${OPIS_ROZMIAR} max-w-2xl mx-auto`}>{INFORMACJE.opis}</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Co znajdziesz w naszym sklepie</h2>
        <div className={`${SIATKA_KOLUMNY} ${SIATKA_ODSTEP}`}>
          {KATEGORIE.map(kat => (
            <div key={kat.nazwa} className={`${KARTA_TLO} ${KARTA_ZAOKRAGLENIE} ${KARTA_CIEN} ${KARTA_PADDING} text-center hover:shadow-lg transition-shadow border ${KARTA_OBRAMOWANIE}`}>
              <div className={`${KARTA_IKONA_ROZMIAR} mb-3`}>{kat.ikona}</div>
              <h3 className={`font-bold text-gray-800 mb-1 ${KARTA_NAZWA_ROZMIAR}`}>{kat.nazwa}</h3>
              <p className={`text-gray-500 ${KARTA_OPIS_ROZMIAR}`}>{kat.opis}</p>
            </div>
          ))}
        </div>
      </section>

      {POKAZ_BANER_18 && (
        <section className={`${BANER_TLO} rounded-2xl p-8 mb-8 text-center`}>
          <h2 className={`text-xl font-bold ${BANER_TYTUL} mb-2`}>🔞 Tylko dla dorosłych</h2>
          <p className={BANER_TEKST}>
            Sprzedaż alkoholu jest dozwolona wyłącznie osobom pełnoletnim (18+).
            Alkohol spożywany w nadmiarze szkodzi zdrowiu.
          </p>
        </section>
      )}

      <section className={`${KONTAKT_TLO} text-white rounded-2xl p-8 text-center`}>
        <h2 className={`text-2xl font-bold ${KONTAKT_TYTUL_KOLOR} mb-4`}>Odwiedź nas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl mb-2">📍</div>
            <p className="font-semibold">Adres</p>
            <p className={KONTAKT_TEKST_KOLOR}>{ADRES.ulica}<br/>{ADRES.kodMiasto}</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📞</div>
            <p className="font-semibold">Telefon</p>
            <p className={KONTAKT_TEKST_KOLOR}>{ADRES.telefon}</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🕐</div>
            <p className="font-semibold">Godziny</p>
            <p className={KONTAKT_TEKST_KOLOR}>{ADRES.godzinaOtwarcia}<br/>{ADRES.godzinaSobota}</p>
          </div>
        </div>
        <Link to="/kontakt" className={`inline-block mt-6 ${PRZYCISK_KOLOR} ${PRZYCISK_TEKST} ${PRZYCISK_ZAOKRAGLENIE} px-6 py-2 font-bold hover:opacity-90 transition-opacity`}>
          Napisz do nas
        </Link>
      </section>

    </main>
  )
}
