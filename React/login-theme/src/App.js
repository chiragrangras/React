import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light-theme");
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
