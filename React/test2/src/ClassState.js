import React from "react";


class TestState extends React.Component
{
    x=12;
    
    state = {num:11};

    y= ()=>{

        this.setState({num:12})
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