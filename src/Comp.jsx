import plan from "./img/plan.png"
import serp from "./img/serp.jpg"
import arch from "./img/arch.jpg"
import pieg from "./img/pieg.png"

const Comp = () => {
  return (
    <div id="comp">
      <div className="container">
        <h3 className="text-center">Compiti svolti</h3>
        <div style={{width: "90vh", margin: "5vh auto"}}>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={plan} alt="plan" />
              <div className="card-body">
                <h5 className="card-title">Planimetria</h5>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={serp} alt="serp" />
              <div className="card-body">
                <h5 className="card-title">Mappatura pannelli radianti</h5>
              </div>
            </div>
          </div>
          <div className="card-deck" style={{marginTop: "4vh"}}>
            <div className="card">
              <img className="card-img-top" src={arch} alt="arch" />
              <div className="card-body">
                <h5 className="card-title">Organizzazione dell'archivio</h5>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pieg} alt="pieg" style={{paddingTop: "6vh"}} />
              <div className="card-body">
                <h5 className="card-title">Piegatura planimetrie</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comp