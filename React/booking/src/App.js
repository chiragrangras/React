import "./App.css";
import Home from "./Home";
import Search from "./SearchResult";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;