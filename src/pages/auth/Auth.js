import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/configure";
import Input from "./input/Input";
import Loader from "../../components/loader/Loader";
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
        })
        .catch((error) => {
          console.log("register-error", error);
          const errorMessage = error.message;
          toast.error(`Opps, something went wrong-${errorMessage}`, {
            position: toast.POSITION.TOP_CENTER,
          });
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
        })
        .catch((error) => {
          console.log("login-error", error);
          const errorMessage = error.message;
          toast.error(`Opps, something went wrong-${errorMessage}`, {
            position: toast.POSITION.TOP_CENTER,
          });
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
            <div className="grid-container form">
              <div className="grid-item">
                {/* {isRegister && (
                  <Input
                    name="username"
                    type="text"
                    placeHolder="Username"
                    autoFocus
                    required
                    handleChange={handleChange}
                  />
                )} */}
              </div>
              <div className="grid-item">
                <Input
                  name="email"
                  type="text"
                  placeHolder="Email"
                  required
                  autoFucus
                  handleChange={handleChange}
                />
              </div>
              <div className="grid-item">
                <Input
                  name="password"
                  type="password"
                  placeHolder="Password"
                  required
                  handleChange={handleChange}
                />
              </div>
              <div className="grid-item">
                {isRegister && (
                  <Input
                    name="repeatPassword"
                    type="password"
                    placeHolder="Repeat Password"
                    handleChange={handleChange}
                  />
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
    </>
  );
};

export default Auth;
