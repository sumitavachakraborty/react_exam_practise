import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [password, setPassword] = useState("")
  const passRef = useRef(null)
  
  const passwordGenerate = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() *str.length+1)
      pass += str.charAt(char);
      
    }
    setPassword(pass)
  },[length,setPassword])
  
  const copyPassword = () => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
  }


  useEffect(() => {
    passwordGenerate();
  },[length,passwordGenerate])

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password genrator</h1>
      <div className="flex justify-center flex-col">  
        <div className='flex justify-center my-4'>
          <input 
          type="text"
          value={password}
          className='py-2'
          ref={passRef}
          />
          <button type="button" className='bg-gray-300 p-2' onClick={copyPassword}>Copy</button>  
        <input type="range" 
        min={6} max={100} value={length} 
        onChange={(e)=> setLength(e.target.value)}
        className='cursor-pointer' />
        </div>
        
        <label>length</label>
      </div>
    </>
  )
}

export default App
