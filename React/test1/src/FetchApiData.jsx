import React from "react";

function FetchApiData() {
  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let header = " --- API DATA --- ";
        data.map((v,i) => {
          header = header + `<ol><li>${i+""+v.name}</li></ol>`;
        });
        document.getElementById("d1").innerHTML = header;
      });
  };
  return (
    <div className="App">
      
      <li id="d1"></li>
      <button onClick={getApi}>Get API Data</button>
    </div>
  );
}

export default FetchApiData;