import "./Login.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./App";

function Login() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center">
      <div className={`signIn_box mx-5 mt-5 ${theme}`}>
        <div className="container">
          <h2 className="login">Login</h2>
          <div className="logo">
            <img className="img" alt="" src="./Img/Logo.jpg" />
            <h6 className="subtitle">Amazing service</h6>
            <Link onClick={()=>{theme === "light-theme"?setTheme("dark-theme"):setTheme("light-theme")}}>
                <FontAwesomeIcon
                icon={theme === "light-theme"? faMoon : faSun}
                size="1x"
                className="cursorPointer"
                />
            </Link>
          </div>
          <form>
            <div className="form-group">
              <div>
                <label className="form-label">User Email :&nbsp;</label>
                <input
                  className="my-3"
                  type="text"
                  placeholder="Enter User Email"
                  autoComplete="username"
                />
              </div>
              <div>
                <label className="form-label">Password :&nbsp;</label>
                <input
                  className="my-3"
                  type="password"
                  placeholder="Enter User Password"
                  autoComplete="current-password"
                />
              </div>
              <div className="log_btn d-flex justify-content-center">
                <Button className="btn btn-primary">Login</Button>
                <Button
                  className="btn btn-success"
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Create account
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
