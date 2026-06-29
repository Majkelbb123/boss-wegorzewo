import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Stopka from './components/Stopka'
import StronaGlowna from './pages/StronaGlowna'
import BossStrona from './pages/Boss/BossStrona'
import AlkoholeStrona from './pages/Alkohole/AlkoholeStrona'
import Kontakt from './pages/Kontakt'

// Główny komponent aplikacji — tu ustawiamy routing (nawigację między stronami)
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<StronaGlowna />} />
            <Route path="/boss" element={<BossStrona />} />
            <Route path="/alkohole" element={<AlkoholeStrona />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
        <Stopka />
      </div>
    </BrowserRouter>
  )
}

export default App
