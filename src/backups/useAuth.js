import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/configure";
import Input from "../components/input/Input";
import { Button } from "../components/button/Button";
import Loader from "../components/loader/Loader";
import "./auth.scss";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegister) {
      if (formData.password !== formData.repeatPassword) {
        toast.error(`Repeat password doesn't match`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      setIsLoading(true);

      //create user with firebase
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("new-user", user);
          setIsLoading(false);
          toast.success("Your account is created!");
          updateProfile(auth.currentUser, {
            displayName: formData.username,
          });
          handleClear();
        })
        .catch((error) => {
          console.log("register-error", error);
          const errorMessage = error.message;
          toast.error(`Opps, something went wrong-${errorMessage}`);
        });
    } else {
      setIsLoading(true);

      // sign in user with firebase
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("login-user", user);
          setIsLoading(false);
          toast.success("Signed in successfully.");
          handleClear();
        })
        .catch((error) => {
          console.log("login-error", error);
          const errorMessage = error.message;
          toast.error(`Opps, something went wrong-${errorMessage}`);
        });
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="container">
        <div className="card">
          <div className="title">
            <h6>{isRegister ? "Register" : "Welcome Back!"}</h6>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="authForm">
              <div className="formInput">
                {isRegister && (
                  <Input
                    name="username"
                    type="text"
                    placeHolder="Username"
                    required={true}
                    autoFocus={true}
                    handleChange={handleChange}
                  />
                )}
              </div>
              <div className="formInput">
                <Input
                  name="email"
                  type="text"
                  placeHolder="Email"
                  required={true}
                  autoFocus={true}
                  handleChange={handleChange}
                />
              </div>
              <div className="formInput">
                <Input
                  name="password"
                  type="password"
                  placeHolder="Password"
                  required={true}
                  handleChange={handleChange}
                />
              </div>
              <div className="formInput">
                {isRegister && (
                  <Input
                    name="repeatPassword"
                    type="password"
                    placeHolder="Repeat Password"
                    required={true}
                    handleChange={handleChange}
                  />
                )}
              </div>
              {!isRegister && (
                <div className="formInput link">
                  <Link to="/reset-password">I forgot my password</Link>
                </div>
              )}

              <div className="auth-btn">
                <Button
                  name={isRegister ? "Register" : "Sign In"}
                  handleClick={handleSubmit}
                />
              </div>
            </div>
          </form>

          <div className="google mt-2">
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
    </>
  );
};

export default Auth;
