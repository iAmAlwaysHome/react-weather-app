import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import DashboardLeftSide from "./DashboardLeftSide";
import DashboardRightSide from "./DashboardRightSide";

export default function WeatherInfo(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function handleError() {
    alert(`No data found for the entered city.\nEnter a different city`);
  }
  
  function load() {
    let apiKey= 'c119ffef35b7245a5e03b6e5724ae961';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  if (loaded) { 
      return (
        <div className="WeatherInfo">
          <div className="row no_highlights" id="regular-website">
              <div className="col-">
                <DashboardRightSide data={props.data}/>   
                <div className="row">
                      <DashboardLeftSide data={props.data}/>    
                    <div className="row">
                      <div className="col-3"></div>
                            <div className="col-6">
                              <div className="container-fluid" id="forecastCells">
                                <div className="row">
                                {forecast.map(function (dailyForecast, index) {
                                    if (index < 6) {
                                      return (
                                        <div className="col-4" key={index}>
                                          <WeatherForecastDay data={dailyForecast} />
                                        </div>
                                      );
                                    } else {
                                      return null;
                                    }
                                  })}
                                </div>
                              </div>
                            </div>
                    </div> 
              </div>
              </div>
          </div>
        </div>
      );
} else {
  load();
  return null;
}
}
 