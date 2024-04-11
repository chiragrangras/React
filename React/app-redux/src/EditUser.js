import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "./UseReducer";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditUser() {
  let { id } = useParams();
  // console.log(id)
  let users = useSelector((state) => state.user);
  // console.log(users)

  let existingUser = users.filter((user) => {
    return user.id == id;
  });

  // arr =[1,2,3]
  // let [x,y] = arr
  // console.log(existingUser[0]);

  let { name, email, phone } = existingUser[0];
  // console.log(name,email)

  let [id1,setId] = useState(id)
  let [uname, setuName] = useState(name);
  let [uemail, setuEmail] = useState(email);
  let [uphone, setuPhone] = useState(phone);

  let dispatch = useDispatch();

  let nav = useNavigate();

  // let i=3;

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id: id1, name: uname, email: uemail, phone: uphone }));
    nav("/home");
  };

  return (
    <div>
      <div>
        <h1>Edit User</h1>
      </div>
      <div className="container text-start">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Id</label>
                <input
                  type="text"
                  value={id1}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  disabled
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={uname}
                  onChange={(e) => {
                    setuName(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  value={uemail}
                  onChange={(e) => {
                    setuEmail(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  value={uphone}
                  onChange={(e) => {
                    setuPhone(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Phone"
                />
              </div>

              <button type="submit" className="btn btn-primary my-3">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditUser;
