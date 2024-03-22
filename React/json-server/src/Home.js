import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let [details, setDetails] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setDetails(data);
      });
  }, []);

  let handleEdit = ()=>{
    navigate('/editemp')
  }

  return (
    <div>
      <div className="container">
        <div>
          <h2>Employee Data</h2>
        </div>

        <div>
          <Link to='/addemp' className="btn btn-primary my-3">Add Employee</Link>
        </div>

        <div className="contanier">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(details)} */}
                  {details &&
                    details.map((emp) => (
                      <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.salary}</td>
                        <td>
                          <Link to='/viewemp' className="btn btn-info">View</Link>
                          <button onClick={handleEdit} className="btn btn-success mx-3">Edit</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
