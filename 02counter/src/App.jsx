import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  const addVal = ()=>{
    setCounter(counter+1);    
  }
  const remVal = ()=>{
    setCounter(counter-1);
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    
    <button onClick={addVal}>Add Value {counter}</button>
    <br />
    <button onClick={remVal}>Remove Value{counter}</button>
    </>
  )
}

export default App
