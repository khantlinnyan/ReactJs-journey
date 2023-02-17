import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

const url = "https://api.github.com/users";
function App() {
  const [text , setText] = useState("");
  const textRef = useRef(null);
  function handleForm(e) {
    e.preventDefault();
    setText(textRef.current.value)
  }
  return(
    <div>
    <h3>{text}</h3>
      <form onSubmit={handleForm}>
        <input type="text" ref={textRef} placeholder="Enter"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
