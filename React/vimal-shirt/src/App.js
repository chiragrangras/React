import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import TrackOrder from "./TrackOrder";
import SellOurProduct from "./SellOurProduct";
import MenProduct from "./MenProduct";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
// npm i bootstrap
// npm i react-bootstrap
// npm i react-router-dom
// npm install --save react-toastify


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/men-product" element={<MenProduct />}></Route>
          <Route path="/track-order" element={<TrackOrder/>}></Route>
          <Route path="/sell-our-product" element={<SellOurProduct/>}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;