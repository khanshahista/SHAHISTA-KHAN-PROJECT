import React, { useEffect, useState } from "react";
function WeatherCard({weatherData}) {
    const [weatherDiagram, setWeatherDiagram]=useState("");


    const {temp, humidity, pressure, weathermood, name, speed, country, sunset}= weatherData;

    useEffect(()=>{
        switch(weathermood){
            case "Cloud": setWeatherDiagram("wi-day-cloudy");
            break;

            case "Haze": setWeatherDiagram("wi-fog");
            break;

            case "Clear": setWeatherDiagram("wi-day-sunny");
            break;

            case "Mist": setWeatherDiagram("wi-dust");
            break;

            case "Smoke": setWeatherDiagram("wi-smoke")
            break;

            default: setWeatherDiagram("wi-day-cloudy");
        }

    },[weathermood])

    console.log(weathermood);


//Converting sec to hrs;
let sec=sunset;;
let date=new Date(sec*1000);//converting sec into milisecond;
let timeStr= `${date.getHours()}:${date.getMinutes()}`;

    return (
        <article className='widget'>
          <div className='weatherIcon'>
          <i className={`wi ${weatherDiagram}`}></i>
          </div>

          <div className='weatherInfo'>
            <div className='temperature'>
              <span>{temp}&deg;</span>
            </div>

            <div className='description'>
              <div className='weatherCondition'>{weathermood}</div>
              <div className='place'>{name}, {country}</div>
            </div>
          </div>

          <div className='date'>{new Date().toLocaleString()}</div>

          <div className='extra-temp'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p  className='extra-info-left-side'>
                {timeStr} <br/>
                Sunset
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p  className='extra-info-left-side'>
                {humidity} <br/>Humidity
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p  className='extra-info-left-side'>
                {pressure} <br/>
                Pressure
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p  className='extra-info-left-side'>
                {speed} <br/>
                Speed
              </p>
            </div>
          </div>
        </article>
    )
}

export default WeatherCard;