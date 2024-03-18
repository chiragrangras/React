import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [salary, setSalary] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(name,salary);
    // console.log({name,salary});
    let data = { file,name,email,salary };
    // console.log(data);

    fetch("http://localhost:4000/employees", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      // return res.json();
      if (res) {
        alert("Employee created...!");
        navigate("/");
      }
    });
    // .then((data)=>{
    //   console.log(data)
    // })
  };

  let [file,setFile] = useState();
  function handleChange(e){
    console.log(e.target.file)
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <div className="container w-50 text-start">
        <div>
          <h2>Create Employee</h2>
          <h5>Add Image :- </h5>
        </div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <div className="form-group">
              <input type="file" onChange={handleChange} />
              <img src={file} alt=""/>
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
                {
                  name.length === 0 && <span className="text-danger">* Enter Name</span>
                }
              </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
              />
              {
                email.length === 0 && <span className="text-danger">* Enter Email</span>
              }
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