import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Hung";
  const age = 18;
  const isFemale = true;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tam Nhu Ngốc Ngốc</p>

        <p>
          Xin chao {name} - {age} - {isFemale ? "Famale" : "Male"}
        </p>

        {isFemale ? <p>Famale</p> : <p>Male</p>}
        {isFemale && <p>Famale</p>}
        {!isFemale && <p>Male</p>}

        {isFemale && (
          <div>
            <p>Famale</p>
            <p>Famale</p>
            <p>Famale</p>
          </div>
        )}

        {isFemale && (
          <React.Fragment>
            <p>Famale 1</p>
            <p>Famale 2</p>
            <p>Famale 3</p>
          </React.Fragment>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li> // using inline style
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
