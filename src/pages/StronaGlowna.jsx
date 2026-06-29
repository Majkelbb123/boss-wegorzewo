import { Link } from 'react-router-dom'

// ============================================================
// USTAWIENIA STRONY GŁÓWNEJ — edytuj tylko tę sekcję
// ============================================================

const BOSS = {
  ikona:   '🛒',                    // emotka lub ścieżka do zdjęcia
  nazwa:   'BOSS',                  // nazwa firmy
  miasto:  'Węgorzewo',             // miasto
  opis:    'Artykuły spożywcze i przemysłowe',  // krótki opis pod nazwą
}

const ALKOHOLE = {
  ikona:   '🍷',                    // emotka lub ścieżka do zdjęcia
  nazwa1:  'ALKOHOLE',              // pierwsza linia nazwy
  nazwa2:  'ŚWIATA',                // druga linia nazwy
  miasto:  'Węgorzewo',             // miasto
  opis:    'Wina, whisky i trunki z całego świata',  // krótki opis pod nazwą
}

const KONTAKT = {
  tekst:   'Znajdź nas w Węgorzewie — otwarci od poniedziałku do soboty',
  przycisk: 'Kontakt i mapa →',
}

// ============================================================
// KOD STRONY — nie musisz tu nic zmieniać
// ============================================================

export default function StronaGlowna() {
  return (
    <main>

      {/* Loga obu firm na górze */}
      <section className="bg-gray-900 py-10 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">

          <div className="inline-flex items-center gap-3">
            <span className="text-5xl">{BOSS.ikona}</span>
            <div className="text-left">
              <div className="text-4xl font-black text-yellow-400 tracking-widest leading-none">{BOSS.nazwa}</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{BOSS.miasto}</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
          <div className="sm:hidden w-24 h-px bg-gray-600"></div>

          <div className="inline-flex items-center gap-3">
            <span className="text-5xl">{ALKOHOLE.ikona}</span>
            <div className="text-left">
              <div className="text-2xl font-black text-yellow-400 tracking-wide leading-tight">{ALKOHOLE.nazwa1}</div>
              <div className="text-2xl font-black text-amber-300 tracking-wide leading-tight">{ALKOHOLE.nazwa2}</div>
              <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">{ALKOHOLE.miasto}</div>
            </div>
          </div>

        </div>
      </section>

      {/* Panele suwak */}
      <section className="flex justify-center py-10 bg-gray-950">
        <div className="flex flex-col md:flex-row h-[42vh] min-h-[240px] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl group">

          {/* Panel BOSS */}
          <Link to="/boss" className="
            relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer
            bg-gray-800
            transition-all duration-500 ease-in-out
            md:hover:flex-[2]
            md:group-hover:flex-[0.6]
            md:group-hover:[&:hover]:flex-[2]
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80"></div>
            <div className="relative z-10 text-center px-8 transition-transform duration-500 hover:scale-105">
              <div className="text-6xl mb-4 drop-shadow-lg">{BOSS.ikona}</div>
              <h2 className="text-4xl font-black text-yellow-400 tracking-widest mb-2">{BOSS.nazwa}</h2>
              <p className="text-gray-300 text-lg tracking-widest uppercase mb-6">{BOSS.miasto}</p>
              <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
                <p className="text-gray-300 mb-4 text-sm">{BOSS.opis}</p>
                <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">Poznaj ofertę →</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-400 text-sm tracking-widest uppercase opacity-60">kliknij</div>
          </Link>

          <div className="hidden md:block w-0.5 bg-yellow-400 opacity-30 flex-shrink-0"></div>

          {/* Panel Alkohole Świata */}
          <Link to="/alkohole" className="
            relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer
            bg-amber-900
            transition-all duration-500 ease-in-out
            md:hover:flex-[2]
            md:group-hover:flex-[0.6]
            md:group-hover:[&:hover]:flex-[2]
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-950 opacity-80"></div>
            <div className="relative z-10 text-center px-8 transition-transform duration-500 hover:scale-105">
              <div className="text-6xl mb-4 drop-shadow-lg">{ALKOHOLE.ikona}</div>
              <h2 className="text-3xl font-black text-yellow-400 tracking-wide mb-1">{ALKOHOLE.nazwa1}</h2>
              <h2 className="text-3xl font-black text-amber-300 tracking-wide mb-2">{ALKOHOLE.nazwa2}</h2>
              <p className="text-amber-200 text-lg tracking-widest uppercase mb-6">{ALKOHOLE.miasto}</p>
              <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
                <p className="text-amber-200 mb-4 text-sm">{ALKOHOLE.opis}</p>
                <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">Poznaj ofertę →</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-400 text-sm tracking-widest uppercase opacity-60">kliknij</div>
          </Link>

        </div>
      </section>

      {/* Pasek kontaktowy na dole */}
      <section className="bg-gray-900 py-10 px-4 text-center border-t border-gray-700">
        <p className="text-gray-400 mb-4">{KONTAKT.tekst}</p>
        <Link to="/kontakt" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          {KONTAKT.przycisk}
        </Link>
      </section>

    </main>
  )
}
