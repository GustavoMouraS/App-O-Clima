import React, {useState } from "react";

import {
  FaLocationDot,
  FaDroplet,
  FaWind,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import "./App.css";

function App() {

  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () =>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)
    .then((res) =>{
      if(res.status === 200){
        return res.json()
      }
    })    
    .then((data) =>{
      setWeatherForecast(data)
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      handleSearch()
    }
  }

return (
  <>
    <div className="container">
      <h2>Consulte o clima em uma cidade</h2>
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          className="city-input"
          value={city}
          onChange={handleInput}
          onKeyUp={handleKeyPress}
        />
        <button onClick={handleSearch} type="submit" className="search">
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
    {weatherForecast ? (<div className="container">
      <div className="weather-data">
        <h2>
          <span className="icone">
            <FaLocationDot />
          </span>
          <span className="city">{weatherForecast.name}</span>
          <img
            src={`https://flagsapi.com/${weatherForecast.sys.country}/flat/64.png`}
            alt="Bandeira do País"
            className="country"
          />
        </h2>
        <p className="temperature">
          {parseInt(weatherForecast.main.temp)}
        </p>
      </div>
      <div className="description-container">
        <p className="description">{weatherForecast.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}.png`}
          alt="Condições do tempo"
          className="weather-icon"
        />
      </div>
      <div className="details-container">
        <p className="humidity">
          <span className="icon"><FaDroplet /></span>
          <span>{`${weatherForecast.main.humidity}%`}</span>
        </p>
        <p className="wind">
          <span className="icon"><FaWind /></span>
          <span>{`${weatherForecast.wind.speed}Km/h`}</span>
        </p>
      </div>
    </div>
    ) : null}
  </>
);

        
}


export default App;
