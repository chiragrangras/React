import React from "react";
import "./App.css";

function App() {
  function GetAnimateion() {
    document.getElementById("d1").className = "box";
  }

  function Cal() {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let result = document.getElementById("res");
    let op = document.getElementById("operator");
    switch (op) {
      case "+":
        result.innerHTML = n1 + n2;
        break;

      case "-":
        result.innerHTML = n1 - n2;
        break;

      case "*":
        result.innerHTML = n1 * n2;
        break;

      case "/":
        result.innerHTML = n1 / n2;
        break;

      case "%":
        result.innerHTML = n1 % n2;
        break;

      default:
        result.innerHTML = "Value is a not defined..!";
    }
  }

  return (
    <div className="App">
      num1 : <input type="text" id="n1"></input>
      <br />
      num2 : <input type="text" id="n2"></input>
      <br />
      <b id="res"></b>
      <input type="text" id="operator"></input>
      <button onClick={Cal}>Calculate</button>
      <div id="d1"></div>
      <button onClick={GetAnimateion}>Animate</button>
    </div>
  );
}

export default App;
