import './App.css';
import FetchApiData from './FetchApiData.jsx';
import Compo1, { Compo2 } from './component.js';
import Test2 from './component1.jsx';


function App(){

  return(
    <div className='App'>
      <FetchApiData/>
      <Compo1/>
      <Compo2/>
      <Test2/>
      
    </div>
  )
}

export default App;