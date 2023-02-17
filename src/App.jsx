import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const url = "https://api.github.com/users";
function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getUser() {
    const response = await fetch(url);
    const userData = await response.json();
    
    setIsLoading(false);
    if (response.status > 300) {
      setIsError(true)
      isLoading(false)
    }
    setUser(userData);
  }
  useEffect(() => {
    getUser();
    console.log("UseEffect");
  }, []);
  if (isLoading) {
    return (
      <div>
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if(isError) {
    return <h1 style={{textAlign: "center"}} >Opps is Error</h1>
  }
  return (
    <div className="container">
      <h1>Github users</h1>
      <ul className="users">
        {user.map((user) => {
          return (
            <ul key={user.id}>
              <img src={user.avatar_url} alt={user.login}></img>
              <h4>{user.login}</h4>
            </ul>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
