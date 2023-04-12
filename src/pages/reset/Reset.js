import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import Input from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { auth } from "../../firebase/configure";

const Reset = () => {
  const [email, setEmail] = useState("");

  const resetPS = async (e) => {
    e.preventDefault();

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset password email is sent");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section className="auth-section">
      <div className="container mb-3">
        <div className="card">
          <div className="title">
            <h6>Reset Password</h6>
          </div>

          <form onSubmit={resetPS}>
            <Input
              name="email"
              type="email"
              placeHolder="Enter email"
              handleChange={(e) => setEmail(e.target.value)}
            />

            <div className="auth-btn">
              <Button name="send confirmation" handleClick={resetPS} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reset;
