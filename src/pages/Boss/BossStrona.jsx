import { Link } from 'react-router-dom'
import ListaProduktow from '../../components/ListaProduktow'

// ============================================================
// USTAWIENIA STRONY BOSS — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ ——————————————————————————————————————————————————

const INFORMACJE = {
  ikona: '🛒',                           // emotka lub ścieżka do zdjęcia
  nazwa: 'BOSS Węgorzewo',               // tytuł strony
  opis:  'Sklep z artykułami spożywczymi i przemysłowymi. Obsługujemy klientów indywidualnych oraz firmy w handlu hurtowym i detalicznym.',
}

const ADRES = {
  ulica:            'ul. Przykładowa 1',   // ulica i numer
  kodMiasto:        '11-600 Węgorzewo',    // kod pocztowy i miasto
  telefon:          '87 000 00 00',        // numer telefonu
  godzinaOtwarcia:  'Pn–Pt: 8:00–18:00',  // godziny w tygodniu
  godzinaSobota:    'Sob: 9:00–14:00',    // godziny w sobotę
}

// Lista kategorii produktów — możesz dodawać, usuwać lub zmieniać kolejność
const KATEGORIE = [
  { ikona: '🥖', nazwa: 'Pieczywo i nabiał',    opis: 'Świeże produkty każdego dnia' },
  { ikona: '🥩', nazwa: 'Mięso i wędliny',       opis: 'Szeroki wybór wędlin i mięsa' },
  { ikona: '🥫', nazwa: 'Przetwory',             opis: 'Konserwy, dżemy, sosy' },
  { ikona: '🧹', nazwa: 'Chemia domowa',         opis: 'Środki czystości i higieny' },
  { ikona: '🛠️', nazwa: 'Artykuły przemysłowe', opis: 'Narzędzia i akcesoria' },
  { ikona: '🍬', nazwa: 'Słodycze i przekąski',  opis: 'Cukierki, batony, chipsy' },
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

// Odstęp górny i dolny nagłówka
// Opcje: 'mb-6' (mały) | 'mb-8' | 'mb-10' | 'mb-12' (domyślny) | 'mb-16' (duży)
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
// Opcje: 'bg-white' (biały, domyślny) | 'bg-gray-50' (bardzo jasny szary) | 'bg-gray-100' | 'bg-yellow-50' | 'bg-amber-50'
const KARTA_TLO = 'bg-white'

// Zaokrąglenie rogów kart
// Opcje: 'rounded-none' (ostre) | 'rounded-lg' | 'rounded-xl' (domyślne) | 'rounded-2xl' | 'rounded-3xl'
const KARTA_ZAOKRAGLENIE = 'rounded-xl'

// Cień kart
// Opcje: 'shadow-none' (bez cienia) | 'shadow-sm' | 'shadow-md' (domyślny) | 'shadow-lg' | 'shadow-xl'
const KARTA_CIEN = 'shadow-md'

// Kolor obramowania kart
// Opcje: 'border-gray-100' (bardzo jasny, domyślny) | 'border-gray-200' | 'border-gray-300' | 'border-yellow-200' | 'border-amber-200'
const KARTA_OBRAMOWANIE = 'border-gray-100'

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

// ——— SEKCJA KONTAKTOWA NA DOLE ——————————————————————————

// Kolor tła sekcji kontaktowej
// Opcje: 'bg-gray-800' (ciemny szary, domyślny) | 'bg-gray-900' | 'bg-black' | 'bg-blue-900' | 'bg-slate-800'
const KONTAKT_TLO = 'bg-gray-800'

// Kolor tytułu sekcji kontaktowej
// Opcje: 'text-yellow-400' (żółty, domyślny) | 'text-amber-400' | 'text-white' | 'text-orange-400'
const KONTAKT_TYTUL_KOLOR = 'text-yellow-400'

// Kolor tekstu (adres, telefon) w sekcji kontaktowej
// Opcje: 'text-gray-300' (jasny szary, domyślny) | 'text-gray-200' | 'text-white' | 'text-gray-400'
const KONTAKT_TEKST_KOLOR = 'text-gray-300'

// Kolor przycisku "Napisz do nas"
// Opcje: 'bg-yellow-400' (żółty, domyślny) | 'bg-amber-400' | 'bg-white' | 'bg-orange-400' | 'bg-green-400'
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

export default function BossStrona() {
  return (
    <main className="w-full px-8" style={{ paddingTop: '60px', paddingBottom: '60px' }}>

      {/* Nagłówek strony */}
      <div className="text-center" style={{ marginBottom: '60px' }}>
        <div className={`${IKONA_ROZMIAR}`} style={{ marginBottom: '16px' }}>{INFORMACJE.ikona}</div>
        <h1 className={`${TYTUL_ROZMIAR} font-bold text-gray-800`} style={{ marginBottom: '16px' }}>{INFORMACJE.nazwa}</h1>
        <p className="text-gray-600 text-lg" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>{INFORMACJE.opis}</p>
      </div>

      {/* Sekcja z kartami kategorii */}
      <section style={{ marginBottom: '60px' }}>
        <h2 className="text-2xl font-bold text-gray-800 text-center" style={{ marginBottom: '36px' }}>Nasza oferta</h2>
        <div className={`${SIATKA_KOLUMNY} ${SIATKA_ODSTEP}`}>
          {KATEGORIE.map(kat => (
            <div key={kat.nazwa} className={`${KARTA_TLO} ${KARTA_ZAOKRAGLENIE} ${KARTA_CIEN} ${KARTA_PADDING} text-center hover:shadow-lg transition-shadow border ${KARTA_OBRAMOWANIE}`}>
              <div className={`${KARTA_IKONA_ROZMIAR}`} style={{ marginBottom: '12px' }}>{kat.ikona}</div>
              <h3 className={`font-bold text-gray-800 ${KARTA_NAZWA_ROZMIAR}`} style={{ marginBottom: '4px' }}>{kat.nazwa}</h3>
              <p className={`text-gray-500 ${KARTA_OPIS_ROZMIAR}`}>{kat.opis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produkty z bazy danych */}
      <section style={{ marginBottom: '60px' }}>
        <h2 className="text-2xl font-bold text-gray-800 text-center" style={{ marginBottom: '36px' }}>
          BESTSELLERY
        </h2>
        <ListaProduktow firma="BOSS" />
      </section>

      {/* Sekcja kontaktowa */}
      <section className={`${KONTAKT_TLO} text-white rounded-2xl text-center`} style={{ padding: '48px' }}>
        <h2 className={`text-2xl font-bold ${KONTAKT_TYTUL_KOLOR}`} style={{ marginBottom: '32px' }}>Odwiedź nas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl" style={{ marginBottom: '8px' }}>📍</div>
            <p className="font-semibold">Adres</p>
            <p className={KONTAKT_TEKST_KOLOR}>{ADRES.ulica}<br/>{ADRES.kodMiasto}</p>
          </div>
          <div>
            <div className="text-3xl" style={{ marginBottom: '8px' }}>📞</div>
            <p className="font-semibold">Telefon</p>
            <p className={KONTAKT_TEKST_KOLOR}>{ADRES.telefon}</p>
          </div>
          <div>
            <div className="text-3xl" style={{ marginBottom: '8px' }}>🕐</div>
            <p className="font-semibold">Godziny</p>
            <p className={KONTAKT_TEKST_KOLOR}>{ADRES.godzinaOtwarcia}<br/>{ADRES.godzinaSobota}</p>
          </div>
        </div>
        <Link to="/kontakt" className={`inline-block ${PRZYCISK_KOLOR} ${PRZYCISK_TEKST} ${PRZYCISK_ZAOKRAGLENIE} px-6 py-2 font-bold hover:opacity-90 transition-opacity`} style={{ marginTop: '32px' }}>
          Napisz do nas
        </Link>
      </section>

    </main>
  )
}
