import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/home'>Home</Link>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
