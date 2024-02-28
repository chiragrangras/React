import React, { useReducer } from "react";
import { nameAgeReducer } from "./App";

// The state variable will have following schema
// initialNameAge = {name: "string", age: number}
let initialNameAge = {};

function Name() {
  let [nameAgeState, dispatch] = useReducer(nameAgeReducer, initialNameAge);
  
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "nameChange", name: e.target.value });
        }}
      ></input>
      <h1>{nameAgeState.name ? `Hello ${nameAgeState.name}`: `` }</h1>
    </>
  );
}
export default Name;