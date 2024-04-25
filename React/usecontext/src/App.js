import { createContext } from "react";
import "./App.css";
import UseContext from "./Usecontext";

export let data = createContext();

function App() {
  return (
    <div className="App">
      <h1>UseContext Hook</h1>
      <data.Provider value={120}>
        <UseContext />
      </data.Provider>
    </div>
  );
}

export default App;