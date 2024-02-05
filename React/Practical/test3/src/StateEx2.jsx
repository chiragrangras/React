import React from "react"

class StateEx2 extends React.Component
{
    state = {arr:[12,34,"hi"]}
    render()
    {
        return(
            <>
            <h1 onClick={()=>{this.setState({arr:[112,34,"hi"]})}}>Change Array State</h1>

            <h5>Array : {this.state.arr.join(" ")}</h5>
            </>
        )
    }
}
export default StateEx2