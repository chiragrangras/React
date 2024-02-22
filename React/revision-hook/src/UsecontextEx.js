import About from "./About";
import Blogs from "./Blogs";
import Home from "./Home";
import Services from "./Services";
import { data } from "./App";
import { useContext } from "react";

function UsecontextEx(){

    let val = useContext(data)
    return(
        <div>
            {val}
            <Home/>
            <About/>
            <Services/>
            <Blogs/>
        </div>
    )
}

export default UsecontextEx