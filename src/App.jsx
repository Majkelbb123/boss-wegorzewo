import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Stopka from './components/Stopka'
import StronaGlowna from './pages/StronaGlowna'
import BossStrona from './pages/Boss/BossStrona'
import AlkoholeStrona from './pages/Alkohole/AlkoholeStrona'
import Kontakt from './pages/Kontakt'
import AdminPanel from './pages/Admin/AdminPanel'
import Logowanie from './pages/Logowanie'

// Panel admina ma własny wygląd — bez Navbar i Stopki
function Zawartosc() {
  const lokalizacja = useLocation()
  const czyAdmin = lokalizacja.pathname === '/admin'

  if (czyAdmin) {
    return <AdminPanel />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<StronaGlowna />} />
          <Route path="/boss" element={<BossStrona />} />
          <Route path="/alkohole" element={<AlkoholeStrona />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/zaloguj" element={<Logowanie />} />
          <Route path="/potwierdz-email" element={<Logowanie />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
      <Stopka />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Zawartosc />
    </BrowserRouter>
  )
}

export default App
