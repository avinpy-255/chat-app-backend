import { useState } from 'react'
import './App.css'

function App() {
return <div>
 <CardWrapper innerComponent={<TextComponent/>}/>
</div>
}

function CardWrapper({innerComponent}){
 return <div style={{border:"1px solid green"}}>
  {innerComponent}
 </div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

export default App
