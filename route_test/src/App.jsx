import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './components/root'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Root /> }></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
