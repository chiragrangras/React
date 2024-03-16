import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmp() {
  let navigate = useNavigate();

  let [id1,setId1] = useState('');
  let [name,setName] = useState('');
  let [salary,setSalary] = useState('');

  let {eid} = useParams();
  // console.log(eid)

  useEffect(()=>{
    fetch('http://localhost:4000/employees/'+eid)
    .then((res)=>{ return res.json()})
    .then((data)=>{
      setId1(data.id)
      setName(data.name)
      setSalary(data.salary)
    })
  },[])

  let handleSubmit = (e) => {};

  return (
    <div>
      <div className="container w-50 text-start">
        <div>
          <h2>Create Employee</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <div className="mb-3">
              <label className="form-label">ID</label>
              <input
                type="text"
                readOnly
                value={id1}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"          
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
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
export default EditEmp;