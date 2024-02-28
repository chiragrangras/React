import React, { useReducer } from "react"
import { nameAgeReducer } from "./App";

let initialNameAge = {};

function Age(){

    let [ageincrement,dispatch] = useReducer(nameAgeReducer,initialNameAge);

    return(
        <>
        <button onClick={()=>{
            dispatch({ type : "ageincrement"})
        }}>Age</button>
        <h4>You are</h4>
        </>
    )
}
export default Age