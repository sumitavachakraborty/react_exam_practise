import { useState,useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.getCurrenLocation()
  },[])
  return (
    <>
      <h1>Weather app</h1>
      <Input />
      <Button onClick={weather.fetchData} value="search"/>
      <Card />
      <Button onClick={()=>Window.reload}
      value="refresh"/>
    </>
  )
}

export default App
