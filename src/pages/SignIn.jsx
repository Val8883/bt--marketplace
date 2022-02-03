import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPasswords, setShowPasswords] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleOnChange = ({ target: { value, name } }) => {
    setFormData((state) => ({ ...state, [name]: value }));
  };
  const { email, password } = formData;
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">WelcomeBack</p>
        </header>
        <form>
          <input
            className="emailInput"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input
            className="passwordInput"
            type={showPasswords ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleOnChange}
          />
          <img
            src={visibilityIcon}
            alt="show password"
            className="showPassword"
            onClick={() => setShowPasswords((state) => !state)}
          />

          <Link to={"/forgot-password"} className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon
                style={{ fill: "#fff", width: "2rem", height: "2rem" }}
              />
            </button>
          </div>
        </form>
        {/*{Google OAuth}*/}
        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
}

export default SignIn;
