import team from "./img/team.jpg"
import autocad from "./img/autocad.png"

const Res = () => {
  return (
    <div id="res" className="jumbotron jumbotron-fluid">
      <div className="container" id="soc">
        <h3 className="text-center">Competenze migliorate e/o acquisite</h3>
        <img src={team} className="rounded float-left" alt="team" style={{width: "45vh", marginRight: "5vh"}} />
        <img src={autocad} className="rounded float-right" alt="team" style={{width: "30vh", margin: "-5vh 5vh"}} />
        <div>
          <p className="text-center">Teamwork</p>
          <p className="text-right">Utilizzo di particolari software (Autocad, SketchUp)</p>
          <p className="text-left">Comunicare efficacemente con gli altri</p>
          <p className="text-right">Gestire il tempo a disposizione</p>
          <p className="text-center">Gestire dubbi e insicurezze</p>
        </div>
      </div>
    </div>
  )
}

export default Res