import { createContext } from 'react';
import './App.css';
import UsecontextEx from './UsecontextEx';
import UserefEx from './UserefEx';

export let data = createContext();

function App() {
  return (
    <div className="App">
      <h4>Hook Revision</h4>
      <UserefEx/>
      <data.Provider value={120}>
        <UsecontextEx/>
      </data.Provider>
    </div>
  );
}

export default App;
