import React from "react";
import "./input.scss";

const Input = ({
  name,
  type,
  handleChange,
  placeHolder,
  autoFocus,
  required,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeHolder}
      autoFocus={autoFocus}
      required={required}
      onChange={handleChange}
    />
  );
};

export default Input;
