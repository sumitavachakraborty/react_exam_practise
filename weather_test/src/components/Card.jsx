import React from "react";
import { useWeather } from "../context/Weather";
const Card = () => {
  const weather = useWeather()  
  console.log(weather)
  return(
    <div className="weather-card">
      <img src={weather?.data?.current?.condition?.icon}/>
      <h2>{weather?.data?.current?.temp_c} C</h2>
      <h4>{weather?.data?.location?.name},{weather?.data?.location?.region}</h4>
    </div>
  );
}

export default Card;