import React from "react";
import Header from "./Header";
import Nav from "./Nav";

function Search() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="d-flex banner-img">
        <div className="ml-5">
          <h1 className="mt-5">
            <span className="d-block banner-h-font">A dream stay</span>
            <span className="d-block banner-h-font">for a bucket list trip</span>
          </h1>
          <p>Make it a trip to remember in a holiday home</p>
          <a href="#" className="discover-btn">Discover holiday rentals</a>
        </div>
      </div>
    </div>
  );
}
export default Search;
