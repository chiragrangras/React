import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let inputData = { email, password };
    if (validateerrors()) {
      console.log("proceed");
      fetch("http://localhost:4000/users")
        .then((res) => {
          return res.json();
        })
        .then((userList) => {
          console.log(userList);
          const userFound = userList.find((user) => user.email === inputData.email);
          console.log(`User found: ${userFound}`);
          if(userFound?.password === inputData.password){
            console.log("Login succesfull");
          }else{
            console.log("Login failed. Invalid credentials");
          }
          navigate("/");
        });
    }
  };

  let validateerrors = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Please Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="signIn_box">
      <div className="container w-50 text-start">
        <div className="my-3">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="mb-3">
              <label className="form-label">User Email :&nbsp;</label>
              <input
                className="my-3"
                type="text"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Enter User Email"
              />
              {email.length === 0 && (
                <span className="text-danger"> * Enter User Email</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password :&nbsp;</label>
              <input
                className="my-3"
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="Enter User Password"
              />
              {password.length === 0 && (
                <span className="text-danger"> * Enter User Password</span>
              )}
            </div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
