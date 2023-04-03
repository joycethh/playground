import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./email.scss";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  // console.log("email in footer", email);
  return (
    <div className="subscription">
      <h3>Offers, new arrivals and more.</h3>
      <div className="subscriptInputWrapper mt-15">
        <input
          name="email"
          type="text"
          value={email}
          autoFocus
          placeHolder="Enter email to subscribe"
          handleChange={handleChange}
        />
        <span className="icon" onClick={() => {}}>
          <HiOutlineArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Email;
