import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [id, setID] = useState(1);
 return <div>
 <button onClick={function(){
  setID(1)
 }}>1</button>
 <button onClick={function(){
  setID(2)
 }}>2</button>
 <button onClick={function(){
  setID(3)
 }}>3</button>
 <button onClick={function(){
  setID(4)
 }}>4</button>              
  <Todo id={id}/>
 </div>


}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
   axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
   .then(response => {
    setTodo(response.data.todo)
   })
  }, [id])

  return<div>
  id = {id}
    <h1>{todo.title}</h1>
    {todo.description}
  </div>
}
export default App
