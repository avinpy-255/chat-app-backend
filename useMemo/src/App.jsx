import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const[Counter, setCounter] = useState(0);
  const [Input, setInput] = useState(1);

  let count = useMemo(()=>{
    let finalcount = 0;
      for(let i =  1; i<=Input; i++){
    finalcount += i;
}   
}, [Input])

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="enter a number"></input><br/>
      Sum is {count}<br/>
      <button type="button" onClick={()=> {
        setCounter(Counter + 1)
      }}>Counter({Counter})</button>
    </>
  )
}

export default App
