import React from "react";
// import "./input.scss";

const Input = ({
  name,
  type,
  handleChange,
  placeHolder,
  autoFocus,
  required,
  handleShowPassword,
}) => {
  return (
    <input
      className="userInput"
      name={name}
      type={type}
      handleChange={handleChange}
      placeholder={placeHolder}
      autoFocus={autoFocus}
      required={required}
      handleShowPassword={handleShowPassword}
    />
  );
};

export default Input;
