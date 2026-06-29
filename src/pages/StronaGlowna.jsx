import { Link } from 'react-router-dom'
import bossZdjecie from '../assets/boass zdjecie.jpg'
import alkoholeZdjecie from '../assets/alkohole zdjecie.jpg'

// ============================================================
// USTAWIENIA STRONY GŁÓWNEJ — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ PANELI SUWAKA ————————————————————————————————

const BOSS = {
  nazwa:  'BOSS',                              // nazwa na panelu
  miasto: 'Węgorzewo',                         // miasto pod nazwą
  opis:   'Artykuły spożywcze i przemysłowe',  // opis widoczny po najechaniu
}

const ALKOHOLE = {
  nazwa1: 'ALKOHOLE',                          // pierwsza linia nazwy
  nazwa2: 'ŚWIATA',                            // druga linia nazwy
  miasto: 'Węgorzewo',                         // miasto pod nazwą
  opis:   'Wina, whisky i trunki z całego świata', // opis po najechaniu
}

// ——— ZDJĘCIA W TLE PANELI ————————————————————————————————

// Zdjęcie panelu BOSS — ustaw na bossZdjecie (już wgrane) lub ścieżkę do innego pliku
const BOSS_ZDJECIE = bossZdjecie

// Zdjęcie panelu ALKOHOLE ŚWIATA — ustaw na alkoholeZdjecie lub ścieżkę do innego pliku
const ALKOHOLE_ZDJECIE = alkoholeZdjecie

// ——— ROZMIARY I WYGLĄD SUWAKA ———————————————————————————

// Wysokość suwaka (vh = procent wysokości ekranu)
// Opcje: 'h-[25vh]' (niska) | 'h-[35vh]' | 'h-[48vh]' (domyślna) | 'h-[60vh]' | 'h-[80vh]' (wysoka)
const SUWAK_WYSOKOSC = 'h-[48vh]'

// Szybkość animacji wysuwania paneli
// Opcje: 'duration-150' (błyskawiczna) | 'duration-300' (szybka) | 'duration-500' (normalna) | 'duration-700' (wolna) | 'duration-1000' (bardzo wolna)
const SUWAK_ANIMACJA = 'duration-500'

// Rozmiar ikony/emotki na panelach (pokazuje się gdy NIE ma zdjęcia)
// Opcje: 'text-4xl' | 'text-5xl' | 'text-6xl' (domyślne) | 'text-7xl' | 'text-8xl'
const SUWAK_IKONA_ROZMIAR = 'text-6xl'

// Rozmiar nazwy BOSS wewnątrz panelu
// Opcje: 'text-2xl' | 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl' | 'text-6xl'
const SUWAK_BOSS_ROZMIAR = 'text-4xl'

// Rozmiar nazwy ALKOHOLE ŚWIATA wewnątrz panelu
// Opcje: 'text-2xl' | 'text-3xl' (domyślne) | 'text-4xl' | 'text-5xl'
const SUWAK_ALKOHOLE_ROZMIAR = 'text-3xl'

// Kolor przycisku "Poznaj ofertę →" na panelach
// Opcje: 'bg-yellow-400' (żółty, domyślny) | 'bg-amber-400' | 'bg-white' | 'bg-orange-400'
const PRZYCISK_KOLOR = 'bg-yellow-400'

// Kolor tekstu przycisku
// Opcje: 'text-gray-900' (ciemny, domyślny) | 'text-black' | 'text-white'
const PRZYCISK_TEKST = 'text-gray-900'

// ——— GÓRNY PASEK Z LOGO ———————————————————————————————————

// Kolor tła górnego paska
// Opcje: 'bg-gray-900' (domyślny) | 'bg-gray-800' | 'bg-black' | 'bg-white' | 'bg-amber-900'
const LOGO_TLO = 'bg-gray-900'

// Odstęp między logami BOSS i ALKOHOLE ŚWIATA
// Opcje: 'gap-6' | 'gap-12' | 'gap-16' (domyślny) | 'gap-24' | 'gap-32'
const LOGO_ODSTEP = 'gap-16'

// Rozmiar ikony w górnym pasku
// Opcje: 'text-3xl' | 'text-4xl' | 'text-5xl' (domyślne) | 'text-6xl' | 'text-7xl'
const LOGO_IKONA_ROZMIAR = 'text-5xl'

// Rozmiar nazwy BOSS w górnym pasku
// Opcje: 'text-2xl' | 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl'
const LOGO_BOSS_ROZMIAR = 'text-4xl'

// Rozmiar nazwy ALKOHOLE ŚWIATA w górnym pasku
// Opcje: 'text-xl' | 'text-2xl' (domyślne) | 'text-3xl' | 'text-4xl'
const LOGO_ALKOHOLE_ROZMIAR = 'text-2xl'

// Górny i dolny odstęp górnego paska
// Opcje: 'py-4' | 'py-6' | 'py-8' | 'py-10' (domyślny) | 'py-14'
const LOGO_PADDING = 'py-10'

// ——— SEKCJA OPISÓW (pod suwakiem) ————————————————————————

// Kolor tła sekcji opisów
// Opcje: 'bg-white' (biały, domyślny) | 'bg-gray-50' | 'bg-gray-100' | 'bg-amber-50'
const OPISY_TLO = 'bg-white'

// Górny i dolny odstęp sekcji opisów
// Opcje: 'py-10' | 'py-12' | 'py-16' (domyślny) | 'py-20' | 'py-24'
const OPISY_PADDING = 'py-16'

// Tytuł sekcji opisów
const OPISY_TYTUL = 'Nasze sklepy w Węgorzewie'

// Opis BOSS w sekcji opisów
const OPIS_BOSS = {
  ikona:    '🛒',
  tytul:    'BOSS Węgorzewo',
  tekst:    'Sklep wielobranżowy z bogatą ofertą artykułów spożywczych, nabiału, wędlin oraz artykułów przemysłowych. Obsługujemy zarówno klientów indywidualnych, jak i firmy w ramach handlu hurtowego.',
  godziny:  'Pn–Pt: 8:00–18:00 | Sob: 9:00–14:00',
  przycisk: 'Dowiedz się więcej →',
}

// Opis ALKOHOLE ŚWIATA w sekcji opisów
const OPIS_ALKOHOLE = {
  ikona:    '🍷',
  tytul:    'Alkohole Świata Węgorzewo',
  tekst:    'Wyjątkowy sklep dla miłośników alkoholi z całego świata. Wina, whisky, giny, ruma i wiele innych trunków od sprawdzonych producentów. Zapraszamy koneserów i poszukiwaczy nowych smaków.',
  godziny:  'Pn–Pt: 10:00–20:00 | Sob: 10:00–16:00',
  przycisk: 'Dowiedz się więcej →',
}

// Kolor karty BOSS w sekcji opisów
// Opcje: 'bg-gray-800' (ciemny szary, domyślny) | 'bg-gray-900' | 'bg-slate-800' | 'bg-blue-900'
const OPIS_BOSS_TLO = 'bg-gray-800'

// Kolor karty ALKOHOLE ŚWIATA w sekcji opisów
// Opcje: 'bg-amber-800' (brązowy, domyślny) | 'bg-amber-900' | 'bg-orange-900' | 'bg-red-900'
const OPIS_ALKOHOLE_TLO = 'bg-amber-800'

// ——— PASEK KONTAKTOWY NA DOLE ——————————————————————————

// Kolor tła dolnego paska (nad stopką)
// Opcje: 'bg-gray-900' (domyślny) | 'bg-gray-800' | 'bg-black' | 'bg-amber-950'
const DOLNY_TLO = 'bg-gray-900'

// Tekst w dolnym pasku
const DOLNY_TEKST = 'Znajdź nas w Węgorzewie — jesteśmy tu dla Ciebie'

// Kolor i styl przycisku kontaktowego
const DOLNY_PRZYCISK_KOLOR = 'bg-yellow-400'
const DOLNY_PRZYCISK_TEKST = 'text-gray-900'

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
              <div className={`${LOGO_ALKOHOLE_ROZMIAR} font-black text-yellow-400 tracking-wide leading-tight`}>{ALKOHOLE.nazwa1}</div>
              <div className={`${LOGO_ALKOHOLE_ROZMIAR} font-black text-amber-300 tracking-wide leading-tight`}>{ALKOHOLE.nazwa2}</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{ALKOHOLE.miasto}</div>
            </div>
          </div>

        </div>
      </section>

      {/* Suwak — dwa panele, pełna szerokość */}
      <div className={`flex flex-col md:flex-row ${SUWAK_WYSOKOSC} min-h-[200px] w-full group`}>

        {/* Panel BOSS */}
        <Link to="/boss" className={`group/boss relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-gray-800 transition-all ${SUWAK_ANIMACJA} ease-in-out md:hover:flex-[2] md:group-hover:flex-[0.6] md:group-hover:[&:hover]:flex-[2]`}>
          {/* Gradient w tle */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
          {/* Logo BOSS — powiększa się gdy panel się wysuwa */}
          <div className="relative z-10 flex flex-col items-center px-8 w-full text-center">
            <div className="overflow-hidden w-[65%] max-w-xs mb-5">
              <img
                src={BOSS_ZDJECIE}
                alt="BOSS Węgorzewo"
                className={`w-full h-auto object-contain scale-100 group-hover/boss:scale-110 transition-transform ${SUWAK_ANIMACJA} ease-in-out drop-shadow-2xl`}
              />
            </div>
            <p className="text-gray-300 text-sm tracking-widest uppercase mb-5">{BOSS.miasto}</p>
            <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
              <p className="text-gray-300 mb-4 text-sm">{BOSS.opis}</p>
              <span className={`inline-block ${PRZYCISK_KOLOR} ${PRZYCISK_TEKST} px-6 py-2 rounded-full font-bold text-sm`}>Poznaj ofertę →</span>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-yellow-400 text-xs tracking-widest uppercase opacity-50">kliknij</div>
        </Link>

        <div className="hidden md:block w-0.5 bg-yellow-400 opacity-40 flex-shrink-0"></div>

        {/* Panel ALKOHOLE ŚWIATA */}
        <Link to="/alkohole" className={`group/alkohole relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-amber-950 transition-all ${SUWAK_ANIMACJA} ease-in-out md:hover:flex-[2] md:group-hover:flex-[0.6] md:group-hover:[&:hover]:flex-[2]`}>
          {/* Gradient w tle */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-red-950"></div>
          {/* Logo ALKOHOLE ŚWIATA — powiększa się gdy panel się wysuwa */}
          <div className="relative z-10 flex flex-col items-center px-8 w-full text-center">
            <div className="overflow-hidden w-[75%] max-w-sm mb-5">
              <img
                src={ALKOHOLE_ZDJECIE}
                alt="Alkohole Świata Węgorzewo"
                className={`w-full h-auto object-contain scale-100 group-hover/alkohole:scale-110 transition-transform ${SUWAK_ANIMACJA} ease-in-out drop-shadow-2xl rounded-sm`}
              />
            </div>
            <p className="text-amber-200 text-sm tracking-widest uppercase mb-5">{ALKOHOLE.miasto}</p>
            <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
              <p className="text-amber-100 mb-4 text-sm">{ALKOHOLE.opis}</p>
              <span className={`inline-block ${PRZYCISK_KOLOR} ${PRZYCISK_TEKST} px-6 py-2 rounded-full font-bold text-sm`}>Poznaj ofertę →</span>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-yellow-400 text-xs tracking-widest uppercase opacity-50">kliknij</div>
        </Link>

      </div>

      {/* Sekcja opisów — pod suwakiem */}
      <section className={`${OPISY_TLO} ${OPISY_PADDING} px-4`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{OPISY_TYTUL}</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Karta BOSS */}
            <div className={`${OPIS_BOSS_TLO} text-white rounded-2xl overflow-hidden shadow-xl`}>
              <div className="p-8">
                <div className="text-4xl mb-4">{OPIS_BOSS.ikona}</div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">{OPIS_BOSS.tytul}</h3>
                <p className="text-gray-300 leading-relaxed mb-5">{OPIS_BOSS.tekst}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <span>🕐</span>
                  <span>{OPIS_BOSS.godziny}</span>
                </div>
                <Link to="/boss" className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                  {OPIS_BOSS.przycisk}
                </Link>
              </div>
            </div>

            {/* Karta ALKOHOLE ŚWIATA */}
            <div className={`${OPIS_ALKOHOLE_TLO} text-white rounded-2xl overflow-hidden shadow-xl`}>
              <div className="p-8">
                <div className="text-4xl mb-4">{OPIS_ALKOHOLE.ikona}</div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">{OPIS_ALKOHOLE.tytul}</h3>
                <p className="text-amber-100 leading-relaxed mb-5">{OPIS_ALKOHOLE.tekst}</p>
                <div className="flex items-center gap-2 text-amber-300 text-sm mb-6">
                  <span>🕐</span>
                  <span>{OPIS_ALKOHOLE.godziny}</span>
                </div>
                <Link to="/alkohole" className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                  {OPIS_ALKOHOLE.przycisk}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dolny pasek z przyciskiem kontaktowym */}
      <section className={`${DOLNY_TLO} py-10 px-4 text-center border-t border-gray-700`}>
        <p className="text-gray-400 mb-4">{DOLNY_TEKST}</p>
        <Link to="/kontakt" className={`${DOLNY_PRZYCISK_KOLOR} ${DOLNY_PRZYCISK_TEKST} px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity`}>
          Kontakt i mapa →
        </Link>
      </section>

    </main>
  )
}
