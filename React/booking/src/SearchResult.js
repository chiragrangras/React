import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { DatePicker } from 'antd';
import { useState } from "react";

const {RangePicker} = DatePicker;

function Search() {
  const data = ["Ahmedabad", "Ajmer", "Amritsar", "Goa"];
  const [ date,setDate ] = useState();
  console.log(date)
  const [val, setVal] = useState();
  return (
    <div>
      <Header />
      <Nav />
      <div className="d-flex banner-img">
        <div className="ml-5">
          <h1 className="mt-5">
            <span className="d-block banner-h-font">A dream stay</span>
            <span className="d-block banner-h-font">
              for a bucket list trip
            </span>
          </h1>
          <p>Make it a trip to remember in a holiday home</p>
          <div className="text-align-left">
            <a href="#" className="discover-btn">
              Discover holiday rentals
            </a>
          </div>
        </div>
      </div>
      <InputGroup className="mb-3">
        <div className="destination">
            &nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
          </svg>
          <div key={data}>
            <input
              list="data"
              onChange={(e) => setVal(e.target.value)}
              placeholder="Where are you going?"
            />
            <datalist id="data">
              {data.map((op ,index) => (
                <option key={index}>{op}</option>
              ))}
            </datalist>
          </div>
          {/* <Form.Control placeholder="Where are you going?" /> */}
        </div>
        <div className="travel-date" key={date}>
          &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path>
          </svg>
          <RangePicker
            onChange={(value)=>{
              setDate(value.map((item)=>{
                return moment(item).format("DD-MM-YYYY")
              }))
            }}
          />
        </div>
        <div className="person-count">
          &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
          </svg>
          <span>
           &nbsp; 2 Adult &#183; 0 Children &#183; 1 Room
           <FontAwesomeIcon icon={faAngleDown} size="1x" color="#000" />
          </span>
        </div>
        <div className="person-count-popup">
          <span>2 &nbsp;Adult &nbsp; :</span><br/><br/>
          <span>0 &nbsp;Children &nbsp; :</span><br/><br/>
          <span>1 &nbsp;Room &nbsp; :</span><br/><br/>
          <button className="person-count-popup-btn">Done</button>
        </div>
        <a href="/search" className="search-btn">Search</a>
      </InputGroup>
    </div>
  );
}
export default Search;
