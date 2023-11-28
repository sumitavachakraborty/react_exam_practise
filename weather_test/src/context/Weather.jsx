import { createContext, useContext, useState } from "react";
import { GetWeather,GetWeatherLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
}

export const WeatherProvider = (props) =>{
  let [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);


  const fetchData = async ()=>{
    const response = await GetWeather(searchCity);
    setData(response);
  }

  const getCurrenLocation = async ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      GetWeatherLocation(position.coords.latitude, position.coords.longitude).then((data)=>{setData(data)})
    })
  }

  return(
    <WeatherContext.Provider value={{data,searchCity,setSearchCity,fetchData,getCurrenLocation}}>
      {props.children}
    </WeatherContext.Provider >
  )
}