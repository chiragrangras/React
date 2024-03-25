import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmp() {
  let navigate = useNavigate();

  let [Id1, setId1] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [salary, setSalary] = useState("");

  let { eid } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/employees/" + eid)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setId1(data.id);
        setName(data.name);
        setEmail(data.email);
        setSalary(data.salary);
      });
  }, []);

  let handlerSubmit = (e) => {
    e.preventDefault();

    let data = { name, email, salary };

    fetch("http://localhost:4000/employees/" + eid, {
      method: "Put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res) {
        alert("Updated...!");
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="container w-50 text-start">
        <div>
          <h2>Edit Employee</h2>
        </div>
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <div className="mb-3">
              <label className="form-label">ID</label>
              <input
                type="text"
                value={Id1}
                readOnly
                className="form-control"
              />
            </div>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditEmp;