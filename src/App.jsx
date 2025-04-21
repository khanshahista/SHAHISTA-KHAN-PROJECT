import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("kolkata");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c2e8fa799028091c598239b55384eb3d`;

      let res = await fetch(url);
      console.log(res);
      let data = await res.json();

      // console.log(data)

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeather = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setWeatherData(myNewWeather);
      setSearchValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search
          "
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                getWeather();
              }
            }}
          ></input>
          <button className="searchButton" type="button" onClick={getWeather}>
            <span>Search</span>
          </button>
        </div>
        {/*  our temp card */}

        <WeatherCard weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
