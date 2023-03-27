import React from "react";
import "./input.scss";

const Input = ({
  name,
  type,
  handleChange,
  placeHolder,
  autoFocus,
  required,
  icon,
}) => {
  return (
    <div className="inputWrapper">
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        required={required}
        onChange={handleChange}
      />
      <span className="icon">{icon}</span>
    </div>
  );
};

export default Input;
