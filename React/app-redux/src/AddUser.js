import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./UseReducer";


function AddUser() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  let dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({name:name,email:email,phone:phone}));
  };

  return (
    <div>
      <div className="container text-start">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Phone"
                />
              </div>

              <button type="submit" className="btn btn-primary my-3">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddUser;