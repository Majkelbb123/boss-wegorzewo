// ============================================================
// USTAWIENIA STOPKI — edytuj tylko tę sekcję
// ============================================================

const BOSS = {
  opis:      'Handel hurtowy i detaliczny',  // krótki opis firmy
  ulica:     'ul. Przykładowa 1, Węgorzewo', // adres
  telefon:   '87 000 00 00',                // numer telefonu
}

const ALKOHOLE = {
  opis:      'Specjalistyczny sklep z alkoholami', // krótki opis firmy
  ulica:     'ul. Przykładowa 2, Węgorzewo',       // adres
  telefon:   '87 000 00 01',                      // numer telefonu
}

const GODZINY = {
  tygodniowe:  'Pn–Pt: 8:00–18:00',  // godziny w tygodniu
  sobota:      'Sobota: 9:00–14:00',  // godziny w sobotę
  niedziela:   'Niedziela: zamknięte', // informacja o niedzieli
}

const ROK_PRAWA_AUTORSKIE = '2025' // rok w prawach autorskich na dole

// ============================================================
// KOD STOPKI — nie musisz tu nic zmieniać
// ============================================================

export default function Stopka() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-2">BOSS Węgorzewo</h3>
          <p>{BOSS.opis}</p>
          <p>{BOSS.ulica}</p>
          <p>tel. {BOSS.telefon}</p>
        </div>

        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-2">Alkohole Świata</h3>
          <p>{ALKOHOLE.opis}</p>
          <p>{ALKOHOLE.ulica}</p>
          <p>tel. {ALKOHOLE.telefon}</p>
        </div>

        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-2">Godziny otwarcia</h3>
          <p>{GODZINY.tygodniowe}</p>
          <p>{GODZINY.sobota}</p>
          <p>{GODZINY.niedziela}</p>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-sm">
        © {ROK_PRAWA_AUTORSKIE} BOSS & Alkohole Świata Węgorzewo
      </div>
    </footer>
  )
}
