import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./email.scss";

const Email = () => {
  return (
    <div className="left">
      <h3>Offers, new arrivals and more.</h3>
      <div className="input-wrapper">
        <input placeholder="Email Address" />
        <button>
          <HiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Email;
