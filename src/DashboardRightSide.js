import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DashboardRightSide(props) {
    return(
        <div className="DashboardRightSide">
            <div className="container right-side-plane">
                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 right-side-content">
                      <div className="text-center">
                      <div id="weather-icon">
                      <WeatherIcon code={props.data.icon} size={302}  />
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-3"></div>
                        <div className="col-8 " id="description-block">
                          <h4 id="description-text">
                            {props.data.description}
                          </h4>
                        </div>
                      </div>
                      <div className="text-center">
                        <h1 id="displayed-city-name">{props.data.city}</h1>
                      </div>
                    </div>
                  </div>
                </div> 
        </div>
    );
}