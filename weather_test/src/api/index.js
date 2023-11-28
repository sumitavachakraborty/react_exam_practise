const url = 'https://api.weatherapi.com/v1/current.json?key=258e7ecd814d415688b95515232711'

export const GetWeather = async (city) => {
  const response = await fetch(`${url}&q=${city}&aqi=yes`)
  return await response.json();
}
export const GetWeatherLocation = async (lat,lon) => {
  const response = await fetch(`${url}&q=${lat},${lon}&aqi=yes`)
  return await response.json();
}