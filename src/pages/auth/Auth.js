import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import "./auth.scss";
import { useAuthContext } from "../../context/authContext";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { login, register } = useAuthContext();

  // const navigate = useNavigate();

  // const Redirect = () => {
  //   useEffect(() => {
  //     const previousPage = localStorage.getItem("previousPage");
  //     if (previousPage) {
  //       localStorage.removeItem("previousPage");
  //       navigate(`${previousPage}`);
  //     } else {
  //       navigate("/");
  //     }
  //   });

  //   console.log("redirect is called");
  // };

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
      await register(formData.email, formData.password, formData.username)
        .then(() => {
          // Signed in
          setIsLoading(false);
          toast.success("Your account is created!");
          handleClear();
        })
        .catch((error) => {
          toast.error(`Opps, something went wrong, please try again`);
        });
    } else {
      setIsLoading(true);

      // sign in user with firebase
      await login(formData.email, formData.password)
        .then(() => {
          setIsLoading(false);
          toast.success("Signed in successfully.");
          handleClear();
        })
        .catch((error) => {
          toast.error(`Opps, something went wrong, please try again`);
        });
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
  };
  return (
    <section className="auth-section">
      {isLoading && <Loader />}
      <div className="container mb-3">
        <div className="card">
          <div className="title">
            <h6>{isRegister ? "Register" : "Welcome Back!"}</h6>
          </div>

          <form onSubmit={handleSubmit}>
            {isRegister && (
              <Input
                name="username"
                type="text"
                value={formData.username}
                placeHolder="Username"
                required={true}
                autoFocus={true}
                handleChange={handleChange}
              />
            )}

            <Input
              name="email"
              type="text"
              value={formData.email}
              placeHolder="Email"
              required={true}
              autoFocus={true}
              handleChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              value={formData.password}
              placeHolder="Password"
              required={true}
              handleChange={handleChange}
            />

            {isRegister && (
              <Input
                name="repeatPassword"
                type="password"
                value={formData.password}
                placeHolder="Repeat Password"
                required={true}
                handleChange={handleChange}
              />
            )}

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
          </form>

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
    </section>
  );
};

export default Auth;
