import './App.css'
import Pesquisa from './Pesquisa'
import { FaLocationDot, FaDroplet, FaWind } from "react-icons/fa6";


function App() {

  return (
    <>
    <div className='container'>
      <h2>Consulte o clima em uma cidade</h2>
      <Pesquisa />
    <div className="weather-data">
      <h2>
        <FaLocationDot />
        <span className='city'>Maceió</span>
        <img src="" alt="Bandeira do País" className="country" />
      </h2>
      <p className="temperature"><span>38</span>&deg;C</p>
    </div>
    <div className="description-container">
      <p className="description">Nublado</p>
      <img src="" alt="Condições do tempo" className="weather-icon" />
    </div>
    <div className="details-container">
      <p className="umidity">
        <FaDroplet />
        <span>48%</span>
      </p>
      <p className="wind">
        <FaWind />
        <span>3km/h</span>
      </p>
    </div>
    </div>
    </>
  )
}

export default App
