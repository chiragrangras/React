import React from "react";

class StateExStringWithInputs extends React.Component {
  
  state = {test: 'hi'}

  render() {
    return (
      <div>
        Name :{" "}
        <input
          type="text"
          value={this.state.test}
          onChange={(e) => {
            this.setState({test:e.target.value})}}
        ></input><br/>
        {this.state.test}
      </div>
    );
  }
}
export default StateExStringWithInputs
