import React from "react";
import "./input.scss";

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
    <>
      <div className="grid-item">
        <input
          name={name}
          type={type}
          onChange={handleChange}
          placeholder={placeHolder}
          autoFocus={autoFocus}
          required
        />
      </div>
    </>
  );
};

export default Input;
