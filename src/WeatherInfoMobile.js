import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import DashboardLeftSideMobile from "./DashboardLeftSideMobile";
import DashboardRightSideMobile from "./DashboardRightSideMobile";

export default function WeatherInfoMobile(props) {
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
        <div className="WeatherInfoMobile">
          <div className="row no_highlights">
              <div className="col">                
                <DashboardRightSideMobile data={props.data}/>                    
              <div className="row">
                 <div className="col-12">
                    <DashboardLeftSideMobile data={props.data}/>
                    <div className="row">    
                        <div className="col-3"></div>
                            <div className="col-6">
                                <div className="container-fluid" id="forecastCells2">
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
        </div>
      );
} else {
  load();
  return (
    <div className="container">
        <div className="video-container">
            <video autoPlay loop muted playsInline>
              <source
                src="https://player.vimeo.com/external/563130035.hd.mp4?s=5bd311f698519ffa90aa5136b96d1e86aa78d107&amp;profile_id=175"
                type="video/mp4"
                poster="https://www.kimiaviation.com/thumbs/1800x1170/gfx/Kimi_seamless_video_first_frame.jpg"
              />
            </video>
          </div>   
    </div>
  );
}
}
