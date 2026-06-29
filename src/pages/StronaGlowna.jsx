import { Link } from 'react-router-dom'

// Strona główna — dwa panele z efektem suwaka
export default function StronaGlowna() {
  return (
    <main>

      {/* Loga obu firm na górze */}
      <section className="bg-gray-900 py-10 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">

          {/* Logo BOSS */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="text-5xl">🛒</span>
              <div className="text-left">
                <div className="text-4xl font-black text-yellow-400 tracking-widest leading-none">BOSS</div>
                <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">Węgorzewo</div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
          <div className="sm:hidden w-24 h-px bg-gray-600"></div>

          {/* Logo Alkohole Świata */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="text-5xl">🍷</span>
              <div className="text-left">
                <div className="text-2xl font-black text-yellow-400 tracking-wide leading-tight">ALKOHOLE</div>
                <div className="text-2xl font-black text-amber-300 tracking-wide leading-tight">ŚWIATA</div>
                <div className="text-gray-400 text-sm tracking-[0.3em] uppercase">Węgorzewo</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Panele suwak — wyśrodkowane, 60% oryginalnej wysokości */}
      <section className="flex justify-center py-10 bg-gray-950">
      <div className="flex flex-col md:flex-row h-[42vh] min-h-[240px] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl group">

        {/* Panel BOSS */}
        <Link
          to="/boss"
          className="
            relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer
            bg-gray-800
            transition-all duration-500 ease-in-out
            md:hover:flex-[2]
            md:group-hover:flex-[0.6]
            md:group-hover:[&:hover]:flex-[2]
          "
        >
          {/* Tło z gradientem */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80"></div>

          {/* Ikona */}
          <div className="relative z-10 text-center px-8 transition-transform duration-500 hover:scale-105">
            <div className="text-6xl mb-4 drop-shadow-lg">🛒</div>
            <h2 className="text-4xl font-black text-yellow-400 tracking-widest mb-2">BOSS</h2>
            <p className="text-gray-300 text-lg tracking-widest uppercase mb-6">Węgorzewo</p>

            {/* Treść wysuwa się na hover */}
            <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
              <p className="text-gray-300 mb-4 text-sm">Artykuły spożywcze i przemysłowe</p>
              <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                Poznaj ofertę →
              </span>
            </div>
          </div>

          {/* Strzałka na dole */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-400 text-sm tracking-widest uppercase opacity-60">
            kliknij
          </div>
        </Link>

        {/* Pionowa linia podziału */}
        <div className="hidden md:block w-0.5 bg-yellow-400 opacity-30 flex-shrink-0"></div>

        {/* Panel Alkohole Świata */}
        <Link
          to="/alkohole"
          className="
            relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer
            bg-amber-900
            transition-all duration-500 ease-in-out
            md:hover:flex-[2]
            md:group-hover:flex-[0.6]
            md:group-hover:[&:hover]:flex-[2]
          "
        >
          {/* Tło z gradientem */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-950 opacity-80"></div>

          {/* Ikona */}
          <div className="relative z-10 text-center px-8 transition-transform duration-500 hover:scale-105">
            <div className="text-6xl mb-4 drop-shadow-lg">🍷</div>
            <h2 className="text-3xl font-black text-yellow-400 tracking-wide mb-1">ALKOHOLE</h2>
            <h2 className="text-3xl font-black text-amber-300 tracking-wide mb-2">ŚWIATA</h2>
            <p className="text-amber-200 text-lg tracking-widest uppercase mb-6">Węgorzewo</p>

            {/* Treść wysuwa się na hover */}
            <div className="overflow-hidden max-h-0 md:group-hover:max-h-0 md:[&:hover]:max-h-40 transition-all duration-500">
              <p className="text-amber-200 mb-4 text-sm">Wina, whisky i trunki z całego świata</p>
              <span className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                Poznaj ofertę →
              </span>
            </div>
          </div>

          {/* Strzałka na dole */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-400 text-sm tracking-widest uppercase opacity-60">
            kliknij
          </div>
        </Link>

      </div>
      </section>

      {/* Sekcja kontakt na dole */}
      <section className="bg-gray-900 py-10 px-4 text-center border-t border-gray-700">
        <p className="text-gray-400 mb-4">Znajdź nas w Węgorzewie — otwarci od poniedziałku do soboty</p>
        <Link to="/kontakt" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          Kontakt i mapa →
        </Link>
      </section>

    </main>
  )
}
