import { Link } from 'react-router-dom'
import bossZdjecie from '../assets/boass zdjecie.jpg'
import alkoholeZdjecie from '../assets/alkohole zdjecie remake.png'

// ============================================================
// USTAWIENIA STRONY GŁÓWNEJ — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ ——————————————————————————————————————————————————

const BOSS = {
  nazwa:   'BOSS',                              // nazwa firmy (widoczna na panelu)
  miasto:  'Węgorzewo',                         // miasto
  opis:    'Magazyn z zaopatrzeniem na każdą okazję.',
  przycisk: 'Poznaj ofertę →',                  // tekst przycisku
}

const ALKOHOLE = {
  miasto:  'Węgorzewo',                         // miasto
  opis:    'Specjalistyczny sklep z alkoholami z całego świata — wina, whisky, giny, ruma i wiele innych trunków od sprawdzonych producentów.',
  przycisk: 'Poznaj ofertę →',                  // tekst przycisku
}

// ——— WYGLĄD SUWAKA ———————————————————————————————————————

// Wysokość suwaka (vh = procent wysokości ekranu)
// Opcje: 'h-[30vh]' | 'h-[40vh]' | 'h-[50vh]' | 'h-[60vh]' (domyślna) | 'h-[70vh]' | 'h-[80vh]'
const SUWAK_WYSOKOSC = 'h-[60vh]'

// Szybkość animacji wysuwania paneli
// Opcje: 'duration-300' (szybka) | 'duration-500' (normalna) | 'duration-700' (wolna)
const SUWAK_ANIMACJA = 'duration-500'

// Powiększenie zdjęcia przy najechaniu (1.0 = brak, 1.1 = 10%, 1.15 = 15%)
// W kodzie poniżej zmień "scale-110" na "scale-105" (mniej) lub "scale-125" (więcej)

// ——— GÓRNY PASEK Z LOGO ———————————————————————————————————

// Kolor tła górnego paska
// Opcje: 'bg-gray-900' (domyślny) | 'bg-gray-800' | 'bg-black' | 'bg-white'
const LOGO_TLO = 'bg-gray-900'

// Górny i dolny odstęp górnego paska
// Opcje: 'py-6' | 'py-8' | 'py-10' (domyślny) | 'py-14'
const LOGO_PADDING = 'py-10'

// Odstęp między logami
// Opcje: 'gap-8' | 'gap-12' | 'gap-16' (domyślny) | 'gap-24'
const LOGO_ODSTEP = 'gap-16'

// Rozmiar ikony w górnym pasku
// Opcje: 'text-4xl' | 'text-5xl' (domyślne) | 'text-6xl' | 'text-7xl'
const LOGO_IKONA_ROZMIAR = 'text-5xl'

// Rozmiar nazwy BOSS w górnym pasku
// Opcje: 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl'
const LOGO_BOSS_ROZMIAR = 'text-4xl'

// Rozmiar nazwy ALKOHOLE ŚWIATA w górnym pasku
// Opcje: 'text-xl' | 'text-2xl' (domyślne) | 'text-3xl'
const LOGO_ALKOHOLE_ROZMIAR = 'text-2xl'

// ——— SEKCJA OPISÓW (pod suwakiem) ————————————————————————

// Kolor tła sekcji opisów
// Opcje: 'bg-white' (domyślny) | 'bg-gray-50' | 'bg-gray-100'
const OPISY_TLO = 'bg-white'

// Górny i dolny odstęp sekcji
// Opcje: 'py-12' | 'py-16' (domyślny) | 'py-20' | 'py-24'
const OPISY_PADDING = 'py-16'

// Tytuł sekcji opisów
const OPISY_TYTUL = 'Nasze sklepy w Węgorzewie'

// Opis BOSS w sekcji
const OPIS_BOSS = {
  tytul:   'BOSS Węgorzewo',
  tekst:   'Sklep wielobranżowy z bogatą ofertą artykułów spożywczych, nabiału, wędlin oraz artykułów przemysłowych. Obsługujemy zarówno klientów indywidualnych, jak i firmy w ramach handlu hurtowego.',
  godziny: 'Pn–Pt: 8:00–18:00 | Sob: 9:00–14:00',
}

// Opis ALKOHOLE w sekcji
const OPIS_ALKOHOLE = {
  tytul:   'Alkohole Świata Węgorzewo',
  tekst:   'Wyjątkowy sklep dla miłośników alkoholi z całego świata. Wina, whisky, giny, rumy i wiele innych trunków od sprawdzonych producentów. Zapraszamy koneserów i poszukiwaczy nowych smaków.',
  godziny: 'Pn–Pt: 10:00–20:00 | Sob: 10:00–16:00',
}

// ============================================================
// KOD STRONY — nie musisz tu nic zmieniać
// ============================================================

export default function StronaGlowna() {
  return (
    <main>

      {/* Górny pasek z logami */}
      <section className={`${LOGO_TLO} ${LOGO_PADDING} px-4`}>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 sm:${LOGO_ODSTEP}`}>

          <div className="inline-flex items-center gap-3">
            <span className={LOGO_IKONA_ROZMIAR}>🛒</span>
            <div className="text-left">
              <div className={`${LOGO_BOSS_ROZMIAR} font-black text-yellow-400 tracking-widest leading-none`}>{BOSS.nazwa}</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{BOSS.miasto}</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
          <div className="sm:hidden w-24 h-px bg-gray-600"></div>

          <div className="inline-flex items-center gap-3">
            <span className={LOGO_IKONA_ROZMIAR}>🍷</span>
            <div className="text-left">
              <div className={`${LOGO_ALKOHOLE_ROZMIAR} font-black text-yellow-400 tracking-wide leading-tight`}>ALKOHOLE</div>
              <div className={`${LOGO_ALKOHOLE_ROZMIAR} font-black text-amber-300 tracking-wide leading-tight`}>ŚWIATA</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{ALKOHOLE.miasto}</div>
            </div>
          </div>

        </div>
      </section>

      {/* Suwak — dwa panele ze zdjęciami */}
      <div className={`flex flex-col md:flex-row ${SUWAK_WYSOKOSC} min-h-[200px] w-full group`}>

        {/* ===== Panel BOSS ===== */}
        {/*
          Tło panelu jest BIAŁE — logo BOSS ma białe tło, więc zlewa się z panelem.
          Zdjęcie wypełnia cały panel (object-cover). Przy najechaniu powiększa się.
          Od dołu wyjeżdża opis.
        */}
        <Link
          to="/boss"
          className={`group/boss relative flex-1 overflow-hidden cursor-pointer bg-white transition-all ${SUWAK_ANIMACJA} ease-in-out md:hover:flex-[2] md:group-hover:flex-[0.6] md:group-hover:[&:hover]:flex-[2]`}
        >
          {/* Zdjęcie — pełne tło z efektem zoom */}
          <img
            src={bossZdjecie}
            alt="BOSS Węgorzewo"
            className={`absolute inset-0 w-full h-full object-contain object-center scale-100 group-hover/boss:scale-110 transition-transform duration-700 ease-out`}
          />

          {/* Gradient od dołu — przyciemnia dolną część żeby tekst był czytelny */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Nazwa i miasto — zawsze widoczne na dole */}
          <div className="absolute bottom-8 inset-x-0 text-center z-10 transition-all duration-500 group-hover/boss:opacity-0 group-hover/boss:translate-y-4">
            <p className="text-3xl font-black text-yellow-400 tracking-widest drop-shadow-xl">{BOSS.nazwa}</p>
            <p className="text-white/70 text-xs tracking-[0.25em] uppercase mt-1">{BOSS.miasto}</p>
          </div>

          {/* Opis — wyjeżdża od dołu przy hover */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-black/85 px-6 py-7 text-center translate-y-full group-hover/boss:translate-y-0 transition-transform duration-500 ease-out">
            <p className="text-xl font-black text-yellow-400 mb-2">{BOSS.nazwa}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">{BOSS.opis}</p>
            <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
              {BOSS.przycisk}
            </span>
          </div>
        </Link>

        {/* Linia rozdzielająca panele */}
        <div className="hidden md:block w-px bg-yellow-400/40 flex-shrink-0"></div>

        {/* ===== Panel ALKOHOLE ŚWIATA ===== */}
        {/*
          Tło panelu jest CIEMNOCZERWONE — banner ma ciemne tło, zlewa się z panelem.
          Identyczna struktura jak BOSS.
        */}
        <Link
          to="/alkohole"
          className={`group/alkohole relative flex-1 overflow-hidden cursor-pointer transition-all ${SUWAK_ANIMACJA} ease-in-out md:hover:flex-[2] md:group-hover:flex-[0.6] md:group-hover:[&:hover]:flex-[2]`}
          style={{ backgroundColor: '#2a0000' }}
        >
          {/* Zdjęcie — pełne tło z efektem zoom */}
          <img
            src={alkoholeZdjecie}
            alt="Alkohole Świata Węgorzewo"
            className={`absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover/alkohole:scale-110 transition-transform duration-700 ease-out`}
          />


          {/* Gradient od dołu */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Nazwa i miasto — zawsze widoczne na dole */}
          <div className="absolute bottom-8 inset-x-0 text-center z-10 transition-all duration-500 group-hover/alkohole:opacity-0 group-hover/alkohole:translate-y-4">
            <p className="text-2xl font-black text-yellow-400 tracking-wide drop-shadow-xl leading-tight">ALKOHOLE</p>
            <p className="text-2xl font-black text-amber-300 tracking-wide drop-shadow-xl leading-tight">ŚWIATA</p>
            <p className="text-white/70 text-xs tracking-[0.25em] uppercase mt-1">{ALKOHOLE.miasto}</p>
          </div>

          {/* Opis — wyjeżdża od dołu przy hover */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-black/85 px-6 py-7 text-center translate-y-full group-hover/alkohole:translate-y-0 transition-transform duration-500 ease-out">
            <p className="text-xl font-black text-yellow-400 mb-2">ALKOHOLE ŚWIATA</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">{ALKOHOLE.opis}</p>
            <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
              {ALKOHOLE.przycisk}
            </span>
          </div>
        </Link>

      </div>

      {/* Sekcja opisów pod suwakiem */}
      <section className={`${OPISY_TLO} pt-10 pb-16 w-full`}>
        <div className="w-full px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{OPISY_TYTUL}</h2>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{OPIS_BOSS.tytul}</h3>
              <p className="text-gray-300 leading-relaxed mb-5">{OPIS_BOSS.tekst}</p>
              <p className="text-gray-400 text-sm mb-6">🕐 {OPIS_BOSS.godziny}</p>
              <Link to="/boss" className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                Dowiedz się więcej →
              </Link>
            </div>

            <div className="bg-amber-800 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{OPIS_ALKOHOLE.tytul}</h3>
              <p className="text-amber-100 leading-relaxed mb-5">{OPIS_ALKOHOLE.tekst}</p>
              <p className="text-amber-300 text-sm mb-6">🕐 {OPIS_ALKOHOLE.godziny}</p>
              <Link to="/alkohole" className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                Dowiedz się więcej →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Sekcja "Nasza historia" */}
      <section className="bg-white w-full py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-800 mb-8 tracking-wide">NASZA HISTORIA</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Wszystko zaczęło się w Węgorzewie — małym mieście na Mazurach, gdzie sąsiedzi znają się z imienia, a dobre słowo znaczy więcej niż reklama. To właśnie tutaj, ponad dwie dekady temu, rodzina Bossów otworzyła swój pierwszy sklep. Kilka półek, kilku stałych klientów i jeden prosty cel: dać mieszkańcom to, czego potrzebują, blisko domu.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Z biegiem lat oferta rosła razem z zaufaniem klientów. Do asortymentu spożywczego dołączyły artykuły przemysłowe, a sklep stał się miejscem, do którego zagląda się nie tylko po zakupy — ale też po rozmowę. Wtedy właśnie narodził się pomysł na coś więcej.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tak powstały <span className="font-bold text-yellow-600">Alkohole Świata Węgorzewo</span> — sklep dla tych, którzy szukają czegoś wyjątkowego. Whisky ze Szkocji, wina z Toskanii, ruma z Kuby. Mazury spotykają świat — i to właśnie w Węgorzewie.
          </p>
        </div>
      </section>

      {/* Dolny pasek kontaktowy */}
      <section className="bg-gray-900 py-10 px-4 text-center border-t border-gray-700">
        <p className="text-gray-400 mb-4">Znajdź nas w Węgorzewie — jesteśmy tu dla Ciebie</p>
        <Link to="/kontakt" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
          Kontakt i mapa →
        </Link>
      </section>

    </main>
  )
}
