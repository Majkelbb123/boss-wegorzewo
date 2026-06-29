import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

// ============================================================
// USTAWIENIA MENU — edytuj tylko tę sekcję
// ============================================================

// Kolor tła całego paska menu
// Opcje: 'bg-gray-900' (bardzo ciemny, domyślny) | 'bg-gray-800' | 'bg-black' | 'bg-white' | 'bg-amber-900' | 'bg-blue-900' | 'bg-slate-800'
const MENU_TLO = 'bg-gray-900'

// Wysokość paska menu
// Opcje: 'h-12' (wąski) | 'h-14' | 'h-16' (domyślny) | 'h-20' | 'h-24' (wysoki)
const MENU_WYSOKOSC = 'h-16'

// Kolor aktywnego linku (podstrona na której aktualnie jesteś)
// Opcje: 'text-yellow-400' (żółty, domyślny) | 'text-white' | 'text-amber-300' | 'text-green-400' | 'text-blue-400' | 'text-orange-400'
const LINK_AKTYWNY_KOLOR = 'text-yellow-400'

// Lista pozycji w menu — możesz zmieniać teksty, ale NIE zmieniaj wartości "do"
// (wartość "do" to adres strony, zmiana jej sprawi że link przestanie działać)
// Możesz dodać z powrotem: { do: '/boss', tekst: 'BOSS' }, { do: '/alkohole', tekst: 'Alkohole Świata' }, { do: '/kontakt', tekst: 'Kontakt' }
const LINKI_MENU = [
  { do: '/', tekst: 'Strona główna' },
]

// ============================================================
// KOD MENU — nie musisz tu nic zmieniać
// ============================================================

export default function Navbar() {
  const [menuOtwarte, setMenuOtwarte] = useState(false)
  const lokalizacja = useLocation()

  return (
    <nav className={`${MENU_TLO} text-white shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex justify-start items-center ${MENU_WYSOKOSC}`}>

          {/* Menu na dużych ekranach */}
          <div className="hidden md:flex space-x-6">
            {LINKI_MENU.map(link => (
              <Link
                key={link.do}
                to={link.do}
                className={`hover:${LINK_AKTYWNY_KOLOR} transition-colors ${
                  lokalizacja.pathname === link.do ? `${LINK_AKTYWNY_KOLOR} font-semibold` : ''
                }`}
              >
                {link.tekst}
              </Link>
            ))}
          </div>

          {/* Przycisk hamburgera na telefonach */}
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

        {/* Menu mobilne — pojawia się po kliknięciu hamburgera */}
        {menuOtwarte && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            {LINKI_MENU.map(link => (
              <Link
                key={link.do}
                to={link.do}
                onClick={() => setMenuOtwarte(false)}
                className={`py-2 hover:${LINK_AKTYWNY_KOLOR} transition-colors ${
                  lokalizacja.pathname === link.do ? `${LINK_AKTYWNY_KOLOR} font-semibold` : ''
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
