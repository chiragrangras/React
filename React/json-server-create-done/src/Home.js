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
    console.log(id);
    // navigate(`/viewemp/${id}`)
    navigate("/viewemp/" + id);
  };

  let handleEdit = (id) => {
    console.log(id);
    navigate("/editemp/" + id);
  };
  const [confirmationId, setConfirmationId] = useState("");

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
          <Link to="/addemp" className="my-3 btn btn-primary">
            Add Employee
          </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(details)} */}
                  {details &&
                    details.map((emp) => (
                      <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.salary}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleView(emp.id);
                            }}
                            className="btn bg-info"
                          >
                            View
                          </button>
                          <button
                            onClick={() => {
                              handleEdit(`${emp.id}`);
                            }}
                            className="btn bg-success mx-3"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              handleDelete(`${emp.id}`);
                            }}
                            className="btn bg-danger"
                          >
                            Delete
                          </button>
                          {confirmationId === emp.id &&(
                            <div className="confirmation-dialog">
                              <p>Are you sure you want to delete?</p>
                              <button onClick={()=>handleConfirmDelete(emp.id)}>Yes</button>
                              <button onClick={handleCancelDelete}>No</button>
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
