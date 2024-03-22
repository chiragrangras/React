import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [salary, setSalary] = useState("");

  let navigate = useNavigate()

  let handlerSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log({name,email,salary})
    let data = {name,email,salary}

    fetch('http://localhost:4000/employees',{
        method:'post',
        headers:{'content-type':'application-json'},
        body:JSON.stringify(data)


    })
    .then((res)=>{ 
       // return res.json()
       if(res){
        alert('Employee created...!')
        navigate('/')
       }
    })
    // .then((data)=>{
    //     console.log(data)
    // })
  };

  return (
    <div>
      <div className="container w-50 text-start">
        <div>
          <h2>Create Employee</h2>
        </div>
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddEmp;
