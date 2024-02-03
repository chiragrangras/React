import React from "react";


class TestState extends React.Component
{
    x=12;
    
    state = {num:1};

    y= ()=>{

        this.setState()
        //alert("class alert...!")
    }

    render()
    {
        return(
            <>
            <h1 onClick={this.y}>
                Class {this.x}
                <br/>
                State : {this.state.num}
            </h1>
            </>
        )
    }
}

export default TestState;