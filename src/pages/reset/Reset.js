import React from "react";
import "./reset.scss";

const Reset = () => {
  return (
    <div className="container">
      <div className="card">
        <h6>Reset Password</h6>

        <div className="input-wrapper">
          <input type="email" placeholder="Email" />
        </div>
        <div className="button-wrapper">
          <button type="submit">Send Confirmation</button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
