import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <h2>Employee Data</h2>
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
                  <tr>
                    <td>Id :</td>
                    <td>Name :</td>
                    <td>Email :</td>
                    <td>Salary :</td>
                    <td>Action :</td>
                  </tr>
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
