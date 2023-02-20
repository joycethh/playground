import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/configure";
import "./reset.scss";

const Reset = () => {
  const [email, setEmail] = useState("");

  const resetPS = async (e) => {
    e.preventDefault();

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Re-set password email is sent");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    console.log("email", email);
  };
  return (
    <div className="container">
      <div className="card">
        <h6>Reset Password</h6>

        <form onSubmit={resetPS}>
          <div className="input-wrapper">
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="button-wrapper">
            <button type="submit" onClick={resetPS}>
              Send Confirmation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
