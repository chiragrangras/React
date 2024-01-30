import './App.css';
import FetchApiData from './FetchApiData.jsx';
import Compo1, { Compo2 } from './component.js';


function App(){

  return(
    <div className='App'>
      <FetchApiData/>
      <Compo1/>
      <Compo2/>
      
    </div>
  )
}

export default App;