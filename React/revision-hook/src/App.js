import { createContext } from 'react';
import './App.css';
// import UsecontextEx from './UsecontextEx';
// import UserefEx from './UserefEx';
import UseReducerHook from './UseReducerHook';

export let data = createContext();

function App() {
  return (
    <div className="App">
      <h4>Hook Revision</h4>
      {/* <UserefEx/>
       <data.Provider>
        <UsecontextEx/>
      </data.Provider>  */}
      <UseReducerHook/>
    </div>
  );
}

export default App;
