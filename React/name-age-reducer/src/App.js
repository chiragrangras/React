import Age from './Age';
import AgeText from './AgeText';
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
      nameAgeState.age++;
      return {...nameAgeState};
    case "ageChange":
      const ageTextNr = parseInt(action.ageText);
      if(!isNaN(ageTextNr) && ageTextNr >= 18){
        nameAgeState.ageText = action.ageText;
      }
      return {...nameAgeState};
    default:
      return nameAgeState;
  }
}

function App() {
  return (
    <div className="App">
      <Name/>
      <Age/>
      <AgeText/>
    </div>
  )
}

export default App;