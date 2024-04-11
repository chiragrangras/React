import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddUser from './AddUser'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EditUser from './EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/home'>Home</Link>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/adduser' element={<AddUser/>}></Route>
        <Route path='/edituser/:id' element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;