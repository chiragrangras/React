import "./App.css";

import { useReducer } from "react";

function App() {
  let initialValue = { num: 1 };

  let valueReducer = (value, action) => {
    switch (action.type) {
      case "increment":
        return { num: value.num + 1 };

      case "decrement":
        return { num: value.num - 1 };

      default:
        return value;
    }
  };

  let [value, dispatch] = useReducer(valueReducer, initialValue);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <h4>{value.num}</h4>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
