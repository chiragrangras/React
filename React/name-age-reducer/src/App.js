import Age from './Age';
import './App.css';
import Name from './Name';

export let nameAgeReducer = (nameAgeState, action) => {
  
  // if(action.type == "nameChange"){

  // }else if(action.type == "ageIncrement"){

  // }else{
  //   // Throw error or return the original state
  //   return nameAgeState;
  // }
  switch(action.type){
    case "nameChange" :
      nameAgeState.name = action.name;
      return {...nameAgeState};
    case "ageIncrement":
      return;
    default:
      return nameAgeState;
  }
}

function App() {
  return (
    <div className="App">
      <Name/>
      <Age/>
    </div>
  )
}

export default App;