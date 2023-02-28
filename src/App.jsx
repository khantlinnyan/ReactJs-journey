import React from "react";
import { useReducer, useRef} from "react";
import "./App.css";

const intialValue = {
  people: [],
};

function reducer(state, action) {
  if (action.type === "PEOPLE_ADDED") {
    const newPeople = [...state.people, action.payload]

    return {...state, people: newPeople}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer , intialValue);

  const inputRef = useRef(null)

  function submitHandler(e) {
    e.preventDefault();

    const newItem = {id: Math.random(),name: inputRef.current.value}
    dispatch({type: "PEOPLE_ADDED", payload: newItem})

    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Enter your text"
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {state.people.map((people)=> {
          return <li key={people.id}>{people.name}</li>
        })}
      </ul>
    </>
  );
}

export default App;
