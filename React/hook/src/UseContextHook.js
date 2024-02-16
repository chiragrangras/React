import React, { createContext } from "react"
import ParentCompo from "./ParentCompo"

export let prop = createContext();

function UseContextHook(){
    return(
        <div>
            <h1>
                UseContextHook Example
                <prop.Provider value={[{money:12000,"property": "4-5Bunglows"}]}>
                    <ParentCompo/>
                </prop.Provider>
            </h1>
        </div>
    )
}
export default UseContextHook