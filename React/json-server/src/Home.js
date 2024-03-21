import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function Home() {
  let [details, setDetails] = useState();

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

  return (
    <div>
      <div className="container">
        <div>
          <h2>Employee Data</h2>
        </div>

        <div>
          <button className="btn btn-primary my-3">Add Employee</button>
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
                          <button className="btn btn-info">View</button>
                          <button className="btn btn-success mx-3">Edit</button>
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
