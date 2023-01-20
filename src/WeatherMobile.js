import React, { useState } from "react";
import WeatherInfoMobile from "./WeatherInfoMobile";
import axios from "axios";
import "./Weather.css";

export default function WeatherMobile(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    if (
      response !== undefined &&
      response.data !== undefined &&
      response.data.main !== undefined
    )
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  
  function handleError() {
    alert(`No weather data found for ${city}.\nEnter a different city`);
    setCity(props.defaultCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey= 'c119ffef35b7245a5e03b6e5724ae961';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }
  
  function showPosition(position) {
    let apiKey = `c119ffef35b7245a5e03b6e5724ae961`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }
  
  function searchLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);   
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherMobile">
        <div className="mobile">
            <div className="video-container">
            <video autoPlay loop muted playsInline>
                <source
                src="https://player.vimeo.com/external/563130035.hd.mp4?s=5bd311f698519ffa90aa5136b96d1e86aa78d107&amp;profile_id=175"
                type="video/mp4"
                poster="https://www.kimiaviation.com/thumbs/1800x1170/gfx/Kimi_seamless_video_first_frame.jpg"
                />
            </video>
            </div>
            
            <div id="regular-website2">
            <div className="row">
                <div className="container">
                <div className="row">
                    <form id="user-input2" onSubmit={handleSubmit}>
                    <div className="container form-container2">
                        <div className="row content">
                        <div className="col-5"></div>
                        <div className="col-7">
                            <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a city! :)"
                                id="enter-city2"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                            <div className="input-group-append">
                                <button
                                className="btn btn-lg btn-outline-light btn-search"                                
                                id="search-input2"
                                type="submit"
                                value="Search"
                                >
                                <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            <div className="col-sm">
                                <button
                                className="btn btn-lg btn-outline-light user-location"
                                type="button"
                                id="user-location2"
                                onClick={searchLocation}
                                >
                                <i className="fa-solid fa-map-location-dot"></i>
                                </button>
                            </div>
                            </div>
                            <a
                            href="https://github.com/iAmAlwaysHome/react-weather-app"
                            target="_blank"
                            className="github"
                            rel="noreferrer"
                            >
                            <i className=" fa-brands fa-github"></i> source code{" "}
                            </a>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                
                <WeatherInfoMobile data={weatherData} coordinates={weatherData.coordinates}/>  
               
            </div>
            </div>
            
        </div>        
      </div>
    );
  } else {
    search();
    return(
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
 ); }
}
