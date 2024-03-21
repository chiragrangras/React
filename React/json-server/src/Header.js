import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"

function Header(){
    return(
        <div>
             <Link to='/'>Home</Link>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>

        </div>
    )
}
export default Header