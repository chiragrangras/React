import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "./App";

function SignUp() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="signup_box">
        <div className={`container w-50 signIn_box mt-5 ${theme}`}>
          <div className=" logo my-3">
            <img className="img" alt="" src="./Img/Logo.jpg" />
            <h2 className="registration">Registration</h2>
            <Link
              onClick={() => {
                theme === "light-theme"
                  ? setTheme("dark-theme")
                  : setTheme("light-theme");
              }}
            >
              <FontAwesomeIcon
                icon={theme === "light-theme" ? faMoon : faSun}
                size="1x"
                className="cursorPointer"
              />
            </Link>
          </div>
          <form>
            <div className="form-group">
              <div className="mb-3">
                <label className="form-label">User Name :&nbsp;</label>
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter User Name"
                  autoComplete="username"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">User Email :&nbsp;</label>
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter User Email"
                  autoComplete="useremail"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password :&nbsp;</label>
                <input
                  className="my-3"
                  type="password"
                  placeholder="Enter User Password"
                  autoComplete="current-password"
                />
              </div>
              <Button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </Button>
              <Button
                className="btn btn-success ms-3"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Register
              </Button>

              <p className="mt-3">
                © 2024 Chirag Rangras. All Rights Reserved.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
