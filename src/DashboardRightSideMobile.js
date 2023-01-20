import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DashboardRightSideMobile(props) {
    return(
        <div className="DashboardRightSideMobile">
                <div className="container right-side-plane">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 right-side-content ">
                        <div className="text-center">
                             <div id="weather-icon2">
                            <WeatherIcon code={props.data.icon} size={302}  />
                            </div>
                        </div>
                        <div className="col-8 " id="description-block2">
                            <h4 id="description-text2">
                            {props.data.description}
                            </h4>
                        </div>
                        <div className="text-center">
                            <h1 id="displayed-city-name2">
                            {props.data.city}
                            </h1>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
}