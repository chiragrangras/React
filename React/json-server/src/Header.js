import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import AddEmp from "./AddEmp"
import ViewEmp from "./ViewEmp";
import EditEmp from "./EditEmp";


function Header(){
    return(
        <div>
             <Link to='/'>Home</Link>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/addemp' element={<AddEmp/>}></Route>
                <Route path='/viewemp' element={<ViewEmp/>}></Route>
                <Route path='editemp' element={<EditEmp/>}></Route>
            </Routes>

        </div>
    )
}
export default Header