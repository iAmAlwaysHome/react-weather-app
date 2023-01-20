import React from "react";
import WeatherDesktop from "./WeatherDesktop";
import WeatherMobile from "./WeatherMobile";

export default function App() {
  return (
    <div className="App">
      <div className="container">        
        <WeatherDesktop defaultCity="Moscow" /> 
        <WeatherMobile defaultCity="Moscow" /> 
      </div>
    </div>
  );
}
