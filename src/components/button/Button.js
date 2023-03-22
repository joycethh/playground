import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

export const Button = ({ name, className, handleClick }) => {
  return (
    <div className="button-wrapper">
      <button className={className} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export const LinkButton = ({ name, path, className, handleClick }) => {
  return (
    <div className="button-wrapper">
      <button className={className} onClick={handleClick}>
        <Link to={path}>{name}</Link>
      </button>
    </div>
  );
};
