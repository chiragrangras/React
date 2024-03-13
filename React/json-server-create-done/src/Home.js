import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Home() {

  let [details, setDetails] = useState();
  
  useEffect(() => {
    fetch("http://localhost:4001/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setDetails(data);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <h2>Employee Data</h2>
        </div>
        <div>
          <Link to='/addemp' className="my-3 btn btn-primary">Add Employee</Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(details)} */}
                  {details &&
                    details.map((emp) => (
                      <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                        <td>
                          <button className="btn bg-info">View</button>
                          <button className="btn bg-success mx-3">Edit</button>
                          <button className="btn bg-danger">Delete</button>
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