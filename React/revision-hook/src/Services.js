import React, { useContext } from "react"
import { data } from "./App"

function Services(){
    let val = useContext(data)
    return(
        <div>
         Services {val}
        </div>
    )
}
export default Services