import { Link } from 'react-router-dom'

// ============================================================
// USTAWIENIA STRONY GŁÓWNEJ — edytuj tylko tę sekcję
// ============================================================

// ——— TREŚĆ (teksty i emotki) ——————————————————————————————

const BOSS = {
  ikona:   '🛒',                               // emotka wyświetlana w logo i panelu
  nazwa:   'BOSS',                             // nazwa firmy
  miasto:  'Węgorzewo',                        // miasto wyświetlane pod nazwą
  opis:    'Artykuły spożywcze i przemysłowe', // opis widoczny po najechaniu na panel
}

const ALKOHOLE = {
  ikona:   '🍷',                               // emotka wyświetlana w logo i panelu
  nazwa1:  'ALKOHOLE',                         // pierwsza linia nazwy (wyświetlana osobno)
  nazwa2:  'ŚWIATA',                           // druga linia nazwy
  miasto:  'Węgorzewo',                        // miasto wyświetlane pod nazwą
  opis:    'Wina, whisky i trunki z całego świata', // opis widoczny po najechaniu
}

const KONTAKT = {
  tekst:    'Znajdź nas w Węgorzewie — otwarci od poniedziałku do soboty', // tekst w dolnym pasku
  przycisk: 'Kontakt i mapa →',                // napis na żółtym przycisku
}

// ——— GÓRNY PASEK Z LOGO ———————————————————————————————————

// Kolor tła górnego paska
// Opcje: 'bg-gray-900' | 'bg-gray-800' | 'bg-black' | 'bg-white' | 'bg-amber-900' | 'bg-blue-900' | 'bg-slate-900'
const LOGO_TLO = 'bg-gray-900'

// Odstęp (przerwa) między logiem BOSS a logiem ALKOHOLE ŚWIATA
// Opcje: 'gap-4' (mały) | 'gap-8' | 'gap-12' | 'gap-16' (domyślny) | 'gap-24' | 'gap-32' (bardzo duży)
const LOGO_ODSTEP = 'gap-16'

// Rozmiar ikony/emotki w górnym pasku
// Opcje: 'text-3xl' (małe) | 'text-4xl' | 'text-5xl' (domyślne) | 'text-6xl' | 'text-7xl' (ogromne)
const LOGO_IKONA_ROZMIAR = 'text-5xl'

// Rozmiar nazwy BOSS w górnym pasku
// Opcje: 'text-2xl' | 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl' | 'text-6xl'
const LOGO_BOSS_ROZMIAR = 'text-4xl'

// Rozmiar nazwy ALKOHOLE ŚWIATA w górnym pasku (każda linia osobno)
// Opcje: 'text-xl' | 'text-2xl' (domyślne) | 'text-3xl' | 'text-4xl'
const LOGO_ALKOHOLE_ROZMIAR = 'text-2xl'

// Górny i dolny odstęp (padding) górnego paska
// Opcje: 'py-4' (mały) | 'py-6' | 'py-8' | 'py-10' (domyślny) | 'py-14' | 'py-20' (duży)
const LOGO_PADDING = 'py-10'

// ——— PANELE SUWAKA ————————————————————————————————————————

// Wysokość paneli suwaka (vh = procent wysokości ekranu)
// Opcje: 'h-[25vh]' (niska) | 'h-[35vh]' | 'h-[42vh]' (domyślna) | 'h-[55vh]' | 'h-[70vh]' | 'h-[85vh]' (prawie cały ekran)
const SUWAK_WYSOKOSC = 'h-[42vh]'

// Maksymalna szerokość suwaka (na szerokich ekranach)
// Opcje: 'max-w-2xl' (wąski) | 'max-w-3xl' | 'max-w-4xl' (domyślny) | 'max-w-5xl' | 'max-w-6xl' | 'max-w-full' (cała szerokość ekranu)
const SUWAK_SZEROKOSC = 'max-w-4xl'

// Zaokrąglenie rogów suwaka
// Opcje: 'rounded-none' (ostre rogi) | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' (domyślne) | 'rounded-3xl' (bardzo okrągłe)
const SUWAK_ZAOKRAGLENIE = 'rounded-2xl'

// Szybkość animacji wysuwania paneli
// Opcje: 'duration-150' (błyskawiczna) | 'duration-300' (szybka) | 'duration-500' (normalna) | 'duration-700' (wolna) | 'duration-1000' (bardzo wolna)
const SUWAK_ANIMACJA = 'duration-500'

// Rozmiar ikony/emotki wewnątrz paneli suwaka
// Opcje: 'text-4xl' | 'text-5xl' | 'text-6xl' (domyślne) | 'text-7xl' | 'text-8xl' (ogromne)
const SUWAK_IKONA_ROZMIAR = 'text-6xl'

// Rozmiar nazwy BOSS wewnątrz panelu
// Opcje: 'text-2xl' | 'text-3xl' | 'text-4xl' (domyślne) | 'text-5xl' | 'text-6xl'
const SUWAK_BOSS_ROZMIAR = 'text-4xl'

// Rozmiar nazwy ALKOHOLE ŚWIATA wewnątrz panelu (obie linie)
// Opcje: 'text-2xl' | 'text-3xl' (domyślne) | 'text-4xl' | 'text-5xl'
const SUWAK_ALKOHOLE_ROZMIAR = 'text-3xl'

// Kolor gradientu tła panelu BOSS
// Opcje (skopiuj i wklej cały napis):
//   'bg-gradient-to-br from-gray-700 to-gray-900'     ← ciemny szary (domyślny)
//   'bg-gradient-to-br from-blue-800 to-blue-950'     ← granatowy
//   'bg-gradient-to-br from-green-800 to-green-950'   ← ciemnozielony
//   'bg-gradient-to-br from-slate-700 to-slate-900'   ← stalowy
//   'bg-gradient-to-br from-zinc-700 to-zinc-900'     ← cynkowy szary
//   'bg-gradient-to-r from-gray-600 to-gray-900'      ← szary poziomy
const BOSS_GRADIENT = 'bg-gradient-to-br from-gray-700 to-gray-900'

// Kolor gradientu tła panelu ALKOHOLE ŚWIATA
// Opcje (skopiuj i wklej cały napis):
//   'bg-gradient-to-br from-amber-800 to-amber-950'   ← brązowy (domyślny)
//   'bg-gradient-to-br from-red-800 to-red-950'       ← czerwony
//   'bg-gradient-to-br from-purple-800 to-purple-950' ← fioletowy
//   'bg-gradient-to-br from-rose-800 to-rose-950'     ← różano-czerwony
//   'bg-gradient-to-br from-orange-800 to-orange-950' ← pomarańczowy
//   'bg-gradient-to-br from-yellow-800 to-yellow-950' ← złoty
const ALKOHOLE_GRADIENT = 'bg-gradient-to-br from-amber-800 to-amber-950'

// Kolor tła sekcji za suwakiem (obramowanie dookoła paneli)
// Opcje: 'bg-gray-950' (prawie czarny, domyślny) | 'bg-black' | 'bg-gray-900' | 'bg-white' | 'bg-gray-100'
const SUWAK_TLO_SEKCJI = 'bg-gray-950'

// Górny i dolny odstęp (padding) sekcji ze suwakiem
// Opcje: 'py-4' (mały) | 'py-6' | 'py-10' (domyślny) | 'py-16' | 'py-20' (duży)
const SUWAK_PADDING = 'py-10'

// ——— DOLNY PASEK KONTAKTOWY ——————————————————————————————

// Kolor tła dolnego paska
// Opcje: 'bg-gray-900' (domyślny) | 'bg-gray-800' | 'bg-black' | 'bg-amber-950' | 'bg-slate-900'
const KONTAKT_TLO = 'bg-gray-900'

// Górny i dolny odstęp dolnego paska
// Opcje: 'py-6' | 'py-8' | 'py-10' (domyślny) | 'py-14' | 'py-20'
const KONTAKT_PADDING = 'py-10'

// Kolor tła przycisku
// Opcje: 'bg-yellow-400' (żółty, domyślny) | 'bg-amber-400' | 'bg-orange-400' | 'bg-white' | 'bg-green-400' | 'bg-blue-400'
const KONTAKT_PRZYCISK_KOLOR = 'bg-yellow-400'

// Kolor tekstu na przycisku
// Opcje: 'text-gray-900' (ciemny, domyślny) | 'text-black' | 'text-white'
const KONTAKT_PRZYCISK_TEKST = 'text-gray-900'

// Zaokrąglenie przycisku
// Opcje: 'rounded-none' (prostokąt) | 'rounded-lg' | 'rounded-xl' | 'rounded-full' (pigułka, domyślne)
const KONTAKT_PRZYCISK_ZAOKRAGLENIE = 'rounded-full'

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
            <span className={LOGO_IKONA_ROZMIAR}>{BOSS.ikona}</span>
            <div className="text-left">
              <div className={`${LOGO_BOSS_ROZMIAR} font-black text-yellow-400 tracking-widest leading-none`}>{BOSS.nazwa}</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{BOSS.miasto}</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
          <div className="sm:hidden w-24 h-px bg-gray-600"></div>

          <div className="inline-flex items-center gap-3">
            <span className={LOGO_IKONA_ROZMIAR}>{ALKOHOLE.ikona}</span>
            <div className="text-left">
              <div className={`${LOGO_ALKOHOLE_ROZMIAR} font-black text-yellow-400 tracking-wide leading-tight`}>{ALKOHOLE.nazwa1}</div>
              <div className={`${LOGO_ALKOHOLE_ROZMIAR} font-black text-amber-300 tracking-wide leading-tight`}>{ALKOHOLE.nazwa2}</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{ALKOHOLE.miasto}</div>
            </div>
          </div>

        </div>
      </section>

      {/* Suwak — dwa panele */}
      <section className={`flex justify-center ${SUWAK_PADDING} ${SUWAK_TLO_SEKCJI}`}>
        <div className={`flex flex-col md:flex-row ${SUWAK_WYSOKOSC} min-h-[240px] w-full ${SUWAK_SZEROKOSC} ${SUWAK_ZAOKRAGLENIE} overflow-hidden shadow-2xl group`}>

          <Link to="/boss" className={`relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-gray-800 transition-all ${SUWAK_ANIMACJA} ease-in-out md:hover:flex-[2] md:group-hover:flex-[0.6] md:group-hover:[&:hover]:flex-[2]`}>
            <div className={`absolute inset-0 ${BOSS_GRADIENT} opacity-80`}></div>
            <div className="relative z-10 text-center px-8 transition-transform duration-500 hover:scale-105">
              <div className={`${SUWAK_IKONA_ROZMIAR} mb-4 drop-shadow-lg`}>{BOSS.ikona}</div>
              <h2 className={`${SUWAK_BOSS_ROZMIAR} font-black text-yellow-400 tracking-widest mb-2`}>{BOSS.nazwa}</h2>
              <p className="text-gray-300 text-lg tracking-widest uppercase mb-6">{BOSS.miasto}</p>
              <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
                <p className="text-gray-300 mb-4 text-sm">{BOSS.opis}</p>
                <span className={`inline-block ${KONTAKT_PRZYCISK_KOLOR} ${KONTAKT_PRZYCISK_TEKST} px-6 py-2 ${KONTAKT_PRZYCISK_ZAOKRAGLENIE} font-bold text-sm`}>Poznaj ofertę →</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-400 text-sm tracking-widest uppercase opacity-60">kliknij</div>
          </Link>

          <div className="hidden md:block w-0.5 bg-yellow-400 opacity-30 flex-shrink-0"></div>

          <Link to="/alkohole" className={`relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-amber-900 transition-all ${SUWAK_ANIMACJA} ease-in-out md:hover:flex-[2] md:group-hover:flex-[0.6] md:group-hover:[&:hover]:flex-[2]`}>
            <div className={`absolute inset-0 ${ALKOHOLE_GRADIENT} opacity-80`}></div>
            <div className="relative z-10 text-center px-8 transition-transform duration-500 hover:scale-105">
              <div className={`${SUWAK_IKONA_ROZMIAR} mb-4 drop-shadow-lg`}>{ALKOHOLE.ikona}</div>
              <h2 className={`${SUWAK_ALKOHOLE_ROZMIAR} font-black text-yellow-400 tracking-wide mb-1`}>{ALKOHOLE.nazwa1}</h2>
              <h2 className={`${SUWAK_ALKOHOLE_ROZMIAR} font-black text-amber-300 tracking-wide mb-2`}>{ALKOHOLE.nazwa2}</h2>
              <p className="text-amber-200 text-lg tracking-widest uppercase mb-6">{ALKOHOLE.miasto}</p>
              <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
                <p className="text-amber-200 mb-4 text-sm">{ALKOHOLE.opis}</p>
                <span className={`inline-block ${KONTAKT_PRZYCISK_KOLOR} ${KONTAKT_PRZYCISK_TEKST} px-6 py-2 ${KONTAKT_PRZYCISK_ZAOKRAGLENIE} font-bold text-sm`}>Poznaj ofertę →</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-400 text-sm tracking-widest uppercase opacity-60">kliknij</div>
          </Link>

        </div>
      </section>

      {/* Dolny pasek kontaktowy */}
      <section className={`${KONTAKT_TLO} ${KONTAKT_PADDING} px-4 text-center border-t border-gray-700`}>
        <p className="text-gray-400 mb-4">{KONTAKT.tekst}</p>
        <Link to="/kontakt" className={`${KONTAKT_PRZYCISK_KOLOR} ${KONTAKT_PRZYCISK_TEKST} ${KONTAKT_PRZYCISK_ZAOKRAGLENIE} px-8 py-3 font-bold hover:opacity-90 transition-opacity`}>
          {KONTAKT.przycisk}
        </Link>
      </section>

    </main>
  )
}
