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
    switch (op.value) {
      case "+":
        result.innerHTML = (Number(n1.value) + Number(n2.value));
        break;

      case "-":
        result.innerHTML = (Number(n1.value) - Number(n2.value));
        break;

      case "*":
        result.innerHTML = (Number(n1.value) * (n2.value));
        break;

      case "/":
        result.innerHTML = (Number(n1.value) / Number(n2.value));
        break;

      case "%":
        result.innerHTML = (Number(n1.value) % Number(n2.value));
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
      op :<input type="text" id="operator"></input>
      <button onClick={Cal}>Calculate</button>
      <div id="d1"></div>
      <button onClick={GetAnimateion}>Animate</button>
    </div>
  );
}

export default App;
