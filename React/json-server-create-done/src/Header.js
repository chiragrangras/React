import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Addemp from "./AddEmp"
import ViewEmp from "./Viewemp"

function Header(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/addemp' element={<Addemp/>}></Route>
                <Route path='/viewemp/:id' element={<ViewEmp/>}></Route>
            </Routes>
        </div>
    )
}
export default Header