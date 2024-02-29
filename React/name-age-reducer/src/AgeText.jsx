import React, { useReducer } from "react"
import { nameAgeReducer } from "./App";

let initialNameAge = {ageText: 18};

function AgeText(){

    let [nameAgeState,dispatch] = useReducer(nameAgeReducer,initialNameAge);
    console.log(nameAgeState?.ageText)
    return(
        <>
            <label>Age : </label>
            <input
                type="number"
                onChange={(e)=>{
                    dispatch({ type: "ageChange",ageText : e.target.value})
                }}
            ></input>
            <h1>{nameAgeState.ageText ? `Your age ${nameAgeState.ageText}`: `` }</h1>
        </>
    )
}
export default AgeText