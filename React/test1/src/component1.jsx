import React from "react";

class Test1 extends React.Component
{
    test1 = () => {
        // alert("Class")
        document.getElementById("b1").style.background = "lightblue"
        document.getElementById("b1").style.color = "red"
        document.getElementById("b1").style.border = "1px solid black"
    }
    render(){
        return(
            <>
            <button id="b1" onClick={this.test1}>Click Me1</button>
            </>
        )
    }
}

function Test2()
{
    let test2 = () => {
        // alert("Function")
        document.getElementById("b2").style.background = "lightblue"
        document.getElementById("b2").style.color = "red"
        document.getElementById("b2").style.border = "1px solid black"
    }
    return(
        <>
        <Test1/>
        <button id="b2" onClick={test2}>Click Me2</button>
        </>
    )
}

export default Test2;