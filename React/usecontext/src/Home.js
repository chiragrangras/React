import React, { useContext } from "react"
import { data } from "./App"

function Home(){
    let val = useContext(data)
    return(
        <div>
            Home {val}
        </div>
    )
}
export default Home