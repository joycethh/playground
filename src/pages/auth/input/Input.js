import React from "react";

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
