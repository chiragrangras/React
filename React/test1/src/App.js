import './App.css';
import FetchApiData from './FetchApiData.jsx';
import Compo1, { Compo2 } from './component.js';
import Test2 from './component1.jsx';
import Class2, { Class1, Fun1, Fun2 } from './component2.jsx';


function App(){

  return(
    <div className='App'>
      <FetchApiData/>
      <Compo1/>
      <Compo2/>
      <Test2/>
      <Fun1/>
      <Fun2 x="12" y="34"/>

      <Class1/>
      <Class2/>
      
    </div>
  )
}

export default App;