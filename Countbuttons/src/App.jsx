import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Count count={count}/>
    <Button count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}){
  return <div>
    {count}
  </div>
}

function Button({count, setCounts}){
  return <div>
  <button onClick={() => setCounts(count + 1)}>
    Increment
  </button>
  <button onClick={() => setCounts(count - 1)}>
    Decrement
  </button>
  </div>
}

export default App
