// ============================================================
// USTAWIENIA STOPKI — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ ——————————————————————————————————————————————————

const BOSS = {
  opis:    'Handel hurtowy i detaliczny',   // krótki opis firmy
  ulica:   'ul. Przykładowa 1, Węgorzewo', // adres
  telefon: '87 000 00 00',                 // numer telefonu
}

const ALKOHOLE = {
  opis:    'Specjalistyczny sklep z alkoholami', // krótki opis firmy
  ulica:   'ul. Przykładowa 2, Węgorzewo',       // adres
  telefon: '87 000 00 01',                      // numer telefonu
}

const GODZINY = {
  tygodniowe: 'Pn–Pt: 8:00–18:00',    // godziny w dni robocze
  sobota:     'Sobota: 9:00–14:00',   // godziny w sobotę
  niedziela:  'Niedziela: zamknięte', // info o niedzieli
}

const ROK = '2026' // rok w napisie prawa autorskie na samym dole

// ——— WYGLĄD ————————————————————————————————————————————————

// Kolor tła stopki
// Opcje: 'bg-gray-900' (bardzo ciemny, domyślny) | 'bg-gray-800' | 'bg-black' | 'bg-slate-900' | 'bg-neutral-900'
const TLO = 'bg-gray-900'

// Kolor tytułów kolumn (np. "BOSS Węgorzewo", "Godziny otwarcia")
// Opcje: 'text-yellow-400' (żółty, domyślny) | 'text-amber-400' | 'text-white' | 'text-orange-400' | 'text-green-400'
const KOLOR_TYTULOW = 'text-yellow-400'

// Kolor zwykłego tekstu (adresy, telefony)
// Opcje: 'text-gray-300' (jasny szary, domyślny) | 'text-gray-400' | 'text-white' | 'text-gray-200'
const KOLOR_TEKSTU = 'text-gray-300'

// Kolor tekstu praw autorskich na samym dole
// Opcje: 'text-gray-500' (ciemny szary, domyślny) | 'text-gray-400' | 'text-gray-600'
const KOLOR_PRAWA = 'text-gray-500'

// Liczba kolumn — jak wiele sekcji stopki jest obok siebie
// Opcje: 'grid md:grid-cols-2' (2 kolumny) | 'grid md:grid-cols-3' (3 kolumny, domyślne) | 'grid md:grid-cols-4' (4 kolumny)
const UKLAD_KOLUMN = 'grid md:grid-cols-3'

// Odstęp między kolumnami
// Opcje: 'gap-4' (mały) | 'gap-6' | 'gap-8' (domyślny) | 'gap-12' | 'gap-16' (duży)
const ODSTEP_KOLUMN = 'gap-8'

// Górny i dolny odstęp (padding) stopki
// Opcje: 'py-4' (mały) | 'py-6' | 'py-8' (domyślny) | 'py-12' | 'py-16' (duży)
const PADDING = 'py-8'

// Rozmiar tytułów kolumn
// Opcje: 'text-base' | 'text-lg' (domyślne) | 'text-xl' | 'text-2xl'
const ROZMIAR_TYTULOW = 'text-lg'

// Rozmiar zwykłego tekstu
// Opcje: 'text-xs' (bardzo małe) | 'text-sm' | 'text-base' (domyślne) | 'text-lg'
const ROZMIAR_TEKSTU = 'text-base'

// ============================================================
// KOD STOPKI — nie musisz tu nic zmieniać
// ============================================================

export default function Stopka() {
  return (
    <footer
      className="bg-gray-900 text-gray-300 mt-auto"
      style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
    >
      {/* Siatka 3 kolumn — na telefonie jedna pod drugą, na dużym ekranie obok siebie */}
      <div
        className="max-w-6xl mx-auto px-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          alignItems: 'start',   /* kolumny wyrównane od góry */
        }}
      >
        {/* telefon: tekst wyśrodkowany | duży ekran: tekst do lewej */}
        <div className="text-center md:text-left">
          <h3 className="text-yellow-400 font-bold text-lg" style={{ marginBottom: '0.5rem' }}>
            BOSS Węgorzewo
          </h3>
          <p>{BOSS.opis}</p>
          <p>{BOSS.ulica}</p>
          <p>tel. {BOSS.telefon}</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-yellow-400 font-bold text-lg" style={{ marginBottom: '0.5rem' }}>
            Alkohole Świata
          </h3>
          <p>{ALKOHOLE.opis}</p>
          <p>{ALKOHOLE.ulica}</p>
          <p>tel. {ALKOHOLE.telefon}</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-yellow-400 font-bold text-lg" style={{ marginBottom: '0.5rem' }}>
            Godziny otwarcia
          </h3>
          <p>{GODZINY.tygodniowe}</p>
          <p>{GODZINY.sobota}</p>
          <p>{GODZINY.niedziela}</p>
        </div>
      </div>

      {/* Pasek z prawami autorskimi na samym dole */}
      <div
        className="text-gray-500 text-sm text-center"
        style={{ marginTop: '1.5rem' }}
      >
        © {ROK} BOSS & Alkohole Świata Węgorzewo
      </div>
    </footer>
  )
}
