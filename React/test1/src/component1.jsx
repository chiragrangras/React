import React from "react";

class Test1 extends React.Component
{
    test1 = () => {
        alert("Class")
    }
    render(){
        return(
            <>
            <button onClick={this.test1}>Click Me1</button>
            </>
        )
    }
}

function Test2()
{
    let test2 = () => {

    }
    return(
        <>
        <Test1/>
        <button onMouseEnter={test2}>Click Me2</button>
        </>
    )
}

export default Test2;