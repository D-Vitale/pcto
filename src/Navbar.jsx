import pcto from "./img/pcto.png"

const Navbar = () => {
  return (
    <div id="navbar">
      <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#navbar">
          Davide Vitale
          <img src={pcto} height="30" className="d-inline-block align-top" alt="pcto" style={{marginLeft: "2vh"}} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{width: "100%", justifyContent: "flex-end"}}>
            <a className="nav-item nav-link" href="#soc">La società</a>
            <a className="nav-item nav-link" href="#comp">Compiti svolti</a>
            <a className="nav-item nav-link" href="#res">Risultati</a>
          </div>
        </div>
      </nav>
    </div>
    )
  }
  
  export default Navbar