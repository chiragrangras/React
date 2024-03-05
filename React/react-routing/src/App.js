import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Services';
import Service1 from './Services 1';
import Service2 from './Services 2';
import Service3 from './Services 3';
// import LazyLoading from './LazyLoading';
import React from 'react';

let LazyLoading = React.lazy(()=>(import('./LazyLoading')))

function App() {
  return (
    <div className="App">
     
    <React.Suspense fallback={<>Component ...Img...test...number</>}>
      <LazyLoading/>
    </React.Suspense>

     {/* <div>
      <ul>
        <li>
          <a>Home</a>
        </li>
      </ul>
     </div> */}

     <BrowserRouter>
        <Link to='/home'>Home </Link>
        <Link to='/about'>About </Link>
        <Link to='/service'>Services </Link>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}>
            <Route path='/service/service1' element={<Service1/>}></Route>
            <Route path='/service/service2' element={<Service2/>}></Route>
            <Route path='/service/service3' element={<Service3/>}></Route>
          </Route>
        </Routes> 
     </BrowserRouter>
    
    </div>
  );
}

export default App;