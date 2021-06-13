import logo from "./img/logo.png"

const Soc = () => {
  return (
  <div id="soc" className="jumbotron jumbotron-fluid">
    <div className="container" id="soc">
      <h2>3E Servizi di Ingegneria s.r.l.</h2>
      <h4>Via della Vetreria 99, 50063 Figline Valdarno (FI)</h4>
      <img src={logo} className="rounded float-right" alt="logo" />
      <div>
        <p>La 3e Servizi di Ingegneria srl nasce dalla fusione tra la RST Righi Servizi Termotecnici snc, l’Ing. Mammuccini e l’Ing. Migliorini per fornire un servizio completo ad enti pubblici, privati cittadini ed imprese nel campo della consulenza tecnica. I servizi offerti riguardano, la progettazione, la direzione lavori e la consulenza nei seguenti ambiti:</p>
        <ul>
          <li>Impianti di climatizzazione estiva ed invernale civili ed industriali</li>
          <li>Impianti elettrici</li>
          <li>Impianti di sicurezza antincendio</li>
          <li>Impianti di processo industriali</li>
          <li>Strutture</li>
          <li>Coordinamenti della sicurezza dei cantieri</li>
          <li>Prevenzione incendi</li>
          <li>Gestione ed uso razionale dell’energia ed ottimizzazione dei consumi dell’uso delle fonti energetiche primarie (elettricità e gas), progettazione e studi di fattibilità di impianti funzionanti con energie alternative</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Soc