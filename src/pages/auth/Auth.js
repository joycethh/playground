import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./input/Input";
import "./auth.scss";
const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log("isSignup");
    } else {
      console.log("Sign in");
    }
  };
  const toggleMode = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="title">
          <h6>{isRegister ? "Register" : "Welcome Back!"}</h6>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid-container form">
            <div className="grid-item">
              {isRegister && <Input placeHolder="Username" type="text" />}
            </div>
            <div className="grid-item">
              <Input
                placeHolder="Email"
                type="text"
                required
                autoFucus
                handleChange={handleChange}
              />
            </div>
            <div className="grid-item">
              <Input
                placeHolder="Password"
                type="password"
                required
                handleChange={handleChange}
              />
            </div>
            <div className="grid-item">
              {isRegister && (
                <Input placeHolder="Repeat Password" type="password" />
              )}
            </div>
            {!isRegister && (
              <div className="grid-item link">
                <Link to="/reset-password">I forgot my password</Link>
              </div>
            )}

            <div className="grid-item">
              <button type="submit" onClick={handleSubmit}>
                {isRegister ? "Register" : "Sign In"}
              </button>
            </div>
          </div>
        </form>

        <div className="google">
          <span>-- or --</span>
          <button>login in with google</button>
        </div>

        <div className="toggle">
          {isRegister ? (
            <div>
              <p>Already a user? </p>
              <button onClick={toggleMode}>Sign In</button>
            </div>
          ) : (
            <div>
              <p>Don't have an account?</p>
              <button onClick={toggleMode}>Create one</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
