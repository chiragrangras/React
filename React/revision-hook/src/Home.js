import React, { useContext } from "react"
import { data } from "./App"

function Home(){

    let kisibhivar = useContext(data)
    
    return(
        <div>
            Home {kisibhivar}
        </div>
    )
}
export default Home