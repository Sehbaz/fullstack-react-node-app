import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BASE_URL } from "./index";

function App() {
  const [count, setCount] = React.useState(0);
  //using state for store people data
  const [people, setPeople] = React.useState([]);
  async function getPeople() {
    const res = await fetch(`${BASE_URL}/?count= ${count}`);
    const resData = await res.json();
    setPeople(resData.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>React and Node People Fetcher</h1>
          <input
            style={{ fontSize: " 1.2rem" }}
            placeholder="Number of people"
            type="number"
            onChange={event => setCount(event.target.value)}
          />
          <button style={{ fontSize: " 1.2rem" }} onClick={getPeople}>
            Submit
          </button>
          {/*{JSON.stringify(people)}*/}
          {people.map(person => (
            <div
              key={person.email}
              style={{
                width: "100%",
                display: "flex ",
                marginTop: "0.5em",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <img
                style={{ borderRadius: "50%", height: "100%" }}
                src={person.picture.large}
                alt={person.name.first}
              />
              <div>
                <h3>{person.name.first}</h3>
                <p>{person.email}</p>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
