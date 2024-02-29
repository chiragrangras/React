import React, { useReducer } from "react"
import { nameAgeReducer } from "./App";

let initialNameAge = {age: 18};

function Age(){

    let [nameAgeState,dispatch] = useReducer(nameAgeReducer,initialNameAge);

    return(
        <>
        <button onClick={()=>{
            dispatch({ type : "ageIncrement"})
        }}>Age</button>
        <h4>You are {nameAgeState.age}</h4>
        </>
    )
}
export default Age