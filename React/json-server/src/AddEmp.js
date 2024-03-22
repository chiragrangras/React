import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [salary, setSalary] = useState("");
  let [nameBlur, setNameBlur] = useState(false);
  let [emailBlur, setEmailBlur] = useState(false);
  let [emailFound, setEmailFound] = useState(false);
  let [salaryBlur,setSalaryBlur] =useState(false)
  let navigate = useNavigate();

  let handlerSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log({name,email,salary})
    let data = { name, email, salary };

    if (!name | !email | !salary) {
      alert("Please enter required data!");
      return;
    }

    let dataList = await fetch("http://localhost:4000/employees")
    .then(
      (res) => {
        return res.json();
      }
    );

    let dataFound = dataList.find((data) => data.email === email);
    if (dataFound) {
      setEmailFound(true);
      return;
    }

    fetch("http://localhost:4000/employees", {
      method: "post",
      headers: { "content-type": "application-json" },
      body: JSON.stringify(data),
    }).then((res) => {
      // return res.json()
      if (res) {
        alert("Employee created...!");
        navigate("/");
      }
    });
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
                onBlur={(e) => {
                  setNameBlur(true);
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
              />
              {nameBlur && name.length === 0 && (
                <span className="text-danger">* Enter Name</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onBlur={()=>{
                  setEmailBlur(true);
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
              />
              {emailBlur && email.length === 0 && (
                <span className="text-danger">* Enter Email</span>
              )}
              {emailFound && (
                <span className="text-danger">
                  * Email already in use. Please use another email ID.
                </span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                value={salary}
                onBlur={()=>{
                  setSalaryBlur(true)
                }}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                className="form-control"
              />
              {salaryBlur && salary.length === 0 && (
                <span className="text-danger">* Enter Salary</span>
              )}
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
