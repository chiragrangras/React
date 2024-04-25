import "./App.css";
import "./SignIn.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import TrackOrder from "./TrackOrder";
import SellOurProduct from "./SellOurProduct";
import MenProduct from "./MenProduct";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import WomenProduct from "./WomenProuduct";
// npm i bootstrap
// npm i react-bootstrap
// npm i react-router-dom
// npm install --save react-toastify
export const UserLogin = createContext();

function App() {
  const [loginUser, setLoginUser] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <UserLogin.Provider
          value={{ loginUser, setLoginUser }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/men-product" element={<MenProduct />}></Route>
            <Route path="/women-product" element={<WomenProduct />}></Route>
            <Route path="/track-order" element={<TrackOrder />}></Route>
            <Route
              path="/sell-our-product"
              element={<SellOurProduct />}
            ></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
          </Routes>
        </UserLogin.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
