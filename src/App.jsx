import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'07fdf33fe8e6790797858922e104b5d4'}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log('OOPS ERROR', error);
    }
  };

  const handleWeatherDetails = () => {
    fetchWeatherData();
  };

  console.log(weather);
  return (
    <>
      <h1>WAETHER APP</h1>
      <div className="weather_conatiner">
        <div className="input_text">
          <input
            type="text"
            placeholder="ENTER CITY"
            value={city}
            onChange={handleCityChange}
          />
        </div>

        <div className="button">
          <button onClick={handleWeatherDetails}>GENERATE WEATHER</button>
        </div>
        {weather && (
          <div className="info">
            <h3>{weather.name}</h3>
            <h3>VISISBILITY: {weather.visibility}</h3>
            <h4>DETAILS: {weather.weather[0].main}</h4>
            <h4>DESCRIPTION : {weather.weather[0].description}</h4>
          </div>
        )}
      </div>
    </>
  );
};
export default App;
