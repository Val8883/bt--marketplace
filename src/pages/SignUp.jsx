import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

function SignUp() {
  const [showPasswords, setShowPasswords] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();
  const handleOnChange = ({ target: { value, name } }) => {
    setFormData((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await createUser(auth, email, password);
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const { email, password, name } = formData;
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">WelcomeBack</p>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            className="nameInput"
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleOnChange}
          />
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
          <div className="signInBar">
            <p className="signInText">Sign Up</p>
            <button className="signInButton">
              <ArrowRightIcon
                style={{ fill: "#fff", width: "2rem", height: "2rem" }}
              />
            </button>
          </div>
        </form>
        {/*{Google OAuth}*/}
        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
}

export default SignUp;
