import React from "react"

class StateEx1 extends React.Component
{
    state = {name:"Chirag"}

    render()
    {
        return(
            <div>
            <button onClick={()=>{this.setState({name:this.state.name +1})}}>+</button>
            <b>{this.state.name}</b>
            <button onClick={()=>{this.setState({name:this.state.name + " No Prob."})}}>-</button>
            </div>
        )
    }
}
export default StateEx1