import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { DatePicker } from "antd";
import moment from "moment";
import { useState } from "react";


const { RangePicker } = DatePicker;

function App() {
  const [date, setDate] = useState();
  const [val,setVal] = useState();
  const data = ["Ahmedabad","Ajmer","Gao","Delhi"]

  return (
    <div className="App mt-4" key={date}>
      <h1>DatePicker & Dropdown List</h1>
      <RangePicker
        className="btn-pirmay"
        onChange={(value) => {
          setDate(
            value.map((item) => {
              return moment(item).format("YYYY-DD-MM");
            })
          );
        }}
      />
      <br/>
      <br/>
      <div key={data}>
      <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Serach"/>
        <datalist id="data">
          {data.map((opt, index) => <option key={index}>{opt}</option>)}
        </datalist>
        <h1>{val}</h1>
      </div>
    </div>
  );
}

export default App;