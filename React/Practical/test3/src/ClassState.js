import React from "react";

class TestState extends React.Component
{
    state = {n:1};

    increment = () =>{
        this.setState({n:this.state.n+1})
    }

    decrement = () => {
        this.setState({n:this.state.n-1})
    }
    render()
    {
        return(
            <>
            <button onClick={this.increment}>+</button>
            <h1>{this.state.n}</h1>
            <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

export default TestState;