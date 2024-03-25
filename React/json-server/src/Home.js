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

  let handleView = (id) => {
    navigate("/viewemp/" + id);
  };

  let handleEdit = (id) => {
    navigate("/editemp/" + id);
  };

  let [confirmationId, setConfirmationId] = useState("");

  let handleDelete = (id) => {
    setConfirmationId(id);
  };

  let handleConfirmDelete = (id) => {
    fetch("http://localhost:4000/employees/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((res) => {
      fetch("http://localhost:4000/employees")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDetails(data);
        });
    });
    setConfirmationId("");
  };

  const handleCancelDelete = () => {
    setConfirmationId("");
  };

  return (
    <div>
      <div className="container">
        <div>
          <h2>Employee Data</h2>
        </div>

        <div>
          <Link to="/addemp" className="btn btn-primary my-3">
            Add Employee
          </Link>
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
                          <button
                            onClick={() => {
                              handleView(`${emp.id}`);
                            }}
                            className="btn btn-info"
                          >
                            View
                          </button>
                          <button
                            onClick={() => {
                              handleEdit(`${emp.id}`);
                            }}
                            className="btn btn-success mx-3"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              handleDelete(`${emp.id}`);
                            }}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                          {confirmationId === emp.id && (
                            <div className="confirmation-dialog">
                              <p>Are you sure you want to delete?</p>
                              <button
                                className="mx-2 btn btn-danger"
                                onClick={() => handleConfirmDelete(emp.id)}
                              >
                                Yes
                              </button>
                              <button
                                className="mx-2 btn btn-primary"
                                onClick={handleCancelDelete}
                              >
                                No
                              </button>
                            </div>
                          )}
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
