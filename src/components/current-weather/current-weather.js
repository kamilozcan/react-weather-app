import React from "react";
import "./current-weather.css";

export const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img className="weather-icon" src="icon/01d.png" alt="weather" />
      </div>
      
    </div>
  );
};
