import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  let num = 3;
  const add = ()=> {
    setCount(count + num)
  }
  const del = ()=> {
    setCount(count - num)
  }
  console.log(add)
  
  return(
    <div>
      <h1>Count {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={del}>delete</button>
    </div>
  )
}

export default App
