import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let Counter=15
let [counter,setcounter]=useState(0)
  const addVal=()=>{
    console.log('value added',counter);
    counter++
    setcounter(counter)
    
  }
  const delval=()=>{
    if(counter>0){
    setcounter(counter-1)
  }else{
    setcounter(0)
  }

  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addVal}>Increment</button>
      <br/>
      <button onClick={delval}>Decrement</button>
    </>
  )
}

export default App
