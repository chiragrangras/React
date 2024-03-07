import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import img from "./flag.jpg";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </button>
      <div className="header">
        <div className="nav-1">
          <h1>Booking.Com</h1>
        </div>
        <div className="nav-2">
          <h2>INR</h2>
          <img src={img} alt=""></img>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
          </svg>
          <h2>List your property</h2>
          <button className="btn">Register</button>
          <button className="btn">Sign In</button>
        </div>
      </div>
      <div className="nav-3">
        <button className="btn-1">Stays</button>
        <button className="btn-2">Flights</button>
        <button className="btn-3">Flight + Hotel</button>
        <button className="btn-4">Cars rentals</button>
        <button className="btn-5">Attractions</button>
        <button className="btn-5">Airport taxis</button>
      </div>
    </div>
  );
}

export default App;
