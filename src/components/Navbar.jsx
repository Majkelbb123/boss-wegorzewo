import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

// Górne menu nawigacyjne — widoczne na każdej stronie
export default function Navbar() {
  const [menuOtwarte, setMenuOtwarte] = useState(false)
  const lokalizacja = useLocation()

  const linki = [
    { do: '/', tekst: 'Strona główna' },
    { do: '/boss', tekst: 'BOSS' },
    { do: '/alkohole', tekst: 'Alkohole Świata' },
    { do: '/kontakt', tekst: 'Kontakt' },
  ]

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Nazwa */}
          <Link to="/" className="text-xl font-bold text-yellow-400 hover:text-yellow-300">
            BOSS & ALKOHOLE ŚWIATA
          </Link>

          {/* Menu na dużych ekranach */}
          <div className="hidden md:flex space-x-6">
            {linki.map(link => (
              <Link
                key={link.do}
                to={link.do}
                className={`hover:text-yellow-400 transition-colors ${
                  lokalizacja.pathname === link.do ? 'text-yellow-400 font-semibold' : ''
                }`}
              >
                {link.tekst}
              </Link>
            ))}
          </div>

          {/* Przycisk hamburgera na małych ekranach */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOtwarte(!menuOtwarte)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOtwarte
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Menu mobilne — pokazuje się po kliknięciu hamburgera */}
        {menuOtwarte && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            {linki.map(link => (
              <Link
                key={link.do}
                to={link.do}
                onClick={() => setMenuOtwarte(false)}
                className={`py-2 hover:text-yellow-400 transition-colors ${
                  lokalizacja.pathname === link.do ? 'text-yellow-400 font-semibold' : ''
                }`}
              >
                {link.tekst}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
