import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./email.scss";
import Input from "../../input/Input";
const Email = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  // console.log("email in footer", email);
  return (
    <div className="left">
      <h3>Offers, new arrivals and more.</h3>
      <div className="mt-15">
        <Input
          name="email"
          type="text"
          autoFocus={true}
          placeHolder="Enter email to subscribe"
          handleChange={handleChange}
          icon={<HiOutlineArrowRight />}
        />
      </div>
    </div>
  );
};

export default Email;
