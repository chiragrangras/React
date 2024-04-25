import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { UserLogin } from "./App";


function SignIn() {
  const { setLoginUser } = useContext(UserLogin);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailBlur, setEmailBlur] = useState(false);
  const [passwordBlur, setPasswordBlur] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidationError = false;

    let inputData = { email, password };

    if (!inputData.email) {
      setEmailBlur(true);
      isValidationError = true;
    }

    if (!inputData.password) {
      setPasswordBlur(true);
      isValidationError = true;
    }
    if (isValidationError) {
      return;
    }
    if (validateerrors()) {
      console.log("proceed");
      fetch("http://localhost:4000/users")
        .then((res) => {
          return res.json();
        })
        .then((userList) => {
          console.log(userList);
          const userFound = userList.find(
            (user) => user.email === inputData.email
          );
          console.log(`User found: ${userFound}`);
          if (userFound?.password === inputData.password) {
            console.log("Login succesfull");
            setLoginUser(userFound.name);
          } else {
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
    <>
      <Header />
      <div className="signIn_box">
        <div className="container w-50 text-start">
          <div className="my-3">
            <h2 className="login">Login</h2>
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
                    if (e.target.value.length === 0) {
                      setEmailBlur(true);
                    } else {
                      setEmailBlur(false);
                    }
                  }}
                  placeholder="Enter User Email"
                />
                {emailBlur && (
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
                    if (e.target.value.length === 0) {
                      setPasswordBlur(true);
                    } else {
                      setPasswordBlur(false);
                    }
                  }}
                  placeholder="Enter User Password"
                />
                {passwordBlur && (
                  <span className="text-danger"> * Enter User Password</span>
                )}
              </div>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SignIn;
