import React, { useContext } from "react"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Blog from "./Blog"
import { data } from "./App"

function UseContext(){

    let val = useContext(data)
    return(
        <div>
            {val}
            <Home/>
            <About/>
            <Services/>
            <Blog/>
        </div>
    )
}
export default UseContext