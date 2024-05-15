import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import Header from "./Header";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <SearchBar/>
    </div>
  );
}

export default Home;
