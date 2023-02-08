import React, { useState } from "react";
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
    <section>
      <div className="container">
        <div className="card">
          <div className="logo">
            <h1>
              Sea<span>Shell</span>
            </h1>
          </div>

          <div className="grid-container">
            <div className="grid-item title">
              <h6>{isRegister ? "Register" : "Sign In"}</h6>
            </div>
            <div className="grid-item toggle">
              {isRegister ? (
                <div>
                  <p>Have an account? </p>
                  <button onClick={toggleMode}>Login</button>
                </div>
              ) : (
                <div>
                  <p>or</p>
                  <button onClick={toggleMode}>Create an account</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            {isRegister && <Input placeHolder="Username" type="text" />}
            <Input placeholder="Email" type="text" />
            <Input placeholder="Password" type="password" />
            {isRegister && (
              <Input placeHolder="Repeat Password" type="password" />
            )}
          </div>
          <div className="grid-item">
            <button type="submit" onClick={handleSubmit}>
              {isRegister ? "Register" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
