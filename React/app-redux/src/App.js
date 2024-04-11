import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddUser from './AddUser'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/home'>Home</Link>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/adduser' element={<AddUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;