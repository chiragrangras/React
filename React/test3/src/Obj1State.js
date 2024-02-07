import React, { useState } from "react";

let intialVal = {
  name: "Chirag",
  age: 30,
  address: {
      area: "Shahibaug",
      city: "Ahmedabad",
  },
};
function Obj1State() {
  let [Data, setData] = useState(intialVal);
  return(
  <div>
    <h3 onClick={()=>{setData()}}>Details</h3>
    <p>Name : {Data.name}</p>
    <p>Address : {Data.address.area}</p>
    <p>Address : {Data.address.city}</p>
  </div>
  )
}
export default Obj1State;
