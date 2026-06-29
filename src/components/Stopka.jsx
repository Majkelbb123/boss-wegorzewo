// Stopka strony — adres i kontakt
export default function Stopka() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-2">BOSS Węgorzewo</h3>
          <p>Handel hurtowy i detaliczny</p>
          <p>ul. Przykładowa 1, Węgorzewo</p>
          <p>tel. 87 000 00 00</p>
        </div>

        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-2">Alkohole Świata</h3>
          <p>Specjalistyczny sklep z alkoholami</p>
          <p>ul. Przykładowa 2, Węgorzewo</p>
          <p>tel. 87 000 00 01</p>
        </div>

        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-2">Godziny otwarcia</h3>
          <p>Pn–Pt: 8:00–18:00</p>
          <p>Sobota: 9:00–14:00</p>
          <p>Niedziela: zamknięte</p>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-sm">
        © 2025 BOSS & Alkohole Świata Węgorzewo
      </div>
    </footer>
  )
}
