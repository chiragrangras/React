import React from "react"

class StateEx3 extends React.Component
{
    state = {obj:{name: "Chirag"}}

    render()
    {
        return(
            <div>
                <b onClick={()=>{this.setState({obj:{name:"Vishal"}})}}>{this.state.obj.name}</b>
            </div>
        )
    }
}
export default StateEx3