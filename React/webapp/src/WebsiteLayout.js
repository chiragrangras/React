import React from "react"
import './web.css'
import Header from "./Header"
import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"

function WebsiteLayout(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default WebsiteLayout