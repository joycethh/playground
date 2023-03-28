import React from "react";
import "./input.scss";

const Input = (props) => {
  const {
    icon,
    name,
    type,
    placeHolder,
    autoFocus,
    required,
    handleChange,
    handleClick,
    ...rest
  } = props;
  return (
    <div className="inputWrapper">
      <input
        name={name}
        type={type}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        required={required}
        onChange={handleChange}
        {...rest}
      />
      {icon && (
        <span className="icon" onClick={handleClick}>
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
