import React from "react";
import { useState } from 'react';

function BoolanState() {
  let [chk, setChk] = useState(false);

//   let handlclick = (e) => {
//     // setChk(true);
//     setChk(e.target.checked);
//   };
  return (
    <div>
      {chk ? "True" : "False"}

      <input type="checkbox" 
      onChange={(e)=>{setChk(e.target.checked)}}
      ></input>
    </div>
  );
}
export default BoolanState;
