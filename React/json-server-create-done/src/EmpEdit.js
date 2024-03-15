import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditEmp() {
  let navigate = useNavigate();

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