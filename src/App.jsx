import Navbar from "./Navbar"
import Soc from "./Soc"
import Comp from "./Comp"
import Res from "./Res"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

const App = () => {
  return (
    <div className="App">
      <Fade top>
        <Navbar />
        <Soc />
      </Fade>
      <Zoom>
        <Comp />
      </Zoom>
      <Fade top>
        <Res />
      </Fade>
    </div>
  )
}

export default App