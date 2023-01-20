import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }
  
  return (
    <div className="WeatherForecastDay">
       <div className="p-3 text-center forecast-cell" >
            <h5 className="cell-day">{day()}</h5>
            <div id="forecastIcon"> 
            <WeatherIcon code={props.data.weather[0].icon} size={72} />
            </div>
            <div >
              < p id="max">            
              <span  className="WeatherForecast-temperature-max" >
                {maxTemperature()}
              </span>
              <span className="WeatherForecast-temperature-min">
                {minTemperature()}
              </span>            
              </p>
            </div>
      </div>
    </div>
  );
}
