import React, {useState} from "react";

import FormattedDate from "./FormattedDate";

export default function DashboardLeftSide(props) {
    
    const [unit, setUnit] = useState("celcius");

  function handleFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    
  }

  function handleCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.data.temperature * 9/5) + 32;
  }
 
  if (unit === "celcius") {
    return (
        <div className="DashboardLeftSide">
            <div className="row">
                <div className="container left-side-plane">
                    <div className="row g-3 left-side-content">
                            <div className="col-2"></div>
                            <div className="col-10 text-center">
                                    <div className="col-5 p-2">
                                    <h3 id="date"><FormattedDate date={props.data.date} /></h3>
                                    </div>
                                    <div className="col-5 p-6">
                                    
                                    <h1 id="today-temp">{Math.round(props.data.temperature)}°C</h1>
                                    </div>
                                    <div className="col-5">
                                    <p>
                                        <i className="fas fa-tint" id="humid-icon"></i>
                                        <span id="humidity">{Math.round(props.data.humidity)}%</span>
                                        <i className="fas fa-wind" id="wind-icon"></i>
                                        <span id="wind">{Math.round(props.data.wind)} km/h</span>
                                    </p>
                                    </div>
                                    <div className="row">
                                    <div className="col-5">
                                                <button
                                                    type="submit"
                                                    className="btn btn-unit-celcius btn-lg btn-outline-light"
                                                    id="celcius"
                                                >
                                                    °C
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-desk btn-unit btn-lg btn-outline-light"
                                                    onClick={handleFahrenheit}
                                                    id="fahrenheit"
                                                >
                                                    °F
                                                </button>
                                        </div>
                                    </div>
                                
                                </div>
                    </div>
                 </div> 
            </div>
                  
        </div>
    );
  }
  else
  {
    return (
        <div className="DashboardLeftSide">
            <div className="row">
                <div className="container left-side-plane">
                    <div className="row g-3 left-side-content">
                            <div className="col-2"></div>
                            <div className="col-10 text-center">
                                    <div className="col-5 p-2">
                                    <h3 id="date"><FormattedDate date={props.data.date} /></h3>
                                    </div>
                                    <div className="col-5 p-6">
                                    
                                    <h1 id="today-temp"> {Math.round(fahrenheit())}°F</h1>
                                    </div>
                                    <div className="col-5">
                                    <p>
                                        <i className="fas fa-tint" id="humid-icon"></i>
                                        <span id="humidity">{Math.round(props.data.humidity)}%</span>
                                        <i className="fas fa-wind" id="wind-icon"></i>
                                        <span id="wind">{Math.round(props.data.wind)} km/h</span>
                                    </p>
                                    </div>
                                    <div className="row">
                                    <div className="col-5">
                            <button
                                type="submit"
                                className="btn btn-lg btn-outline-light btn-unit"
                                onClick={handleCelcius}
                                id="celcius"
                            >
                                °C
                            </button>
                            <button
                                type="submit"
                                className="btn btn-desk btn-lg btn-outline-light btn-unit-celcius"
                                id="fahrenheit"
                            >
                                °F
                            </button>
                            </div>
                                            </div>
                                        
                                        </div>
                    </div>
                </div> 
            </div>
        </div>
        );
  }
}