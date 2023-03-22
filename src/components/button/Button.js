import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

export const Button = ({ name, className }) => {
  return (
    <div className="button-wrapper">
      <button className={className}>{name}</button>
    </div>
  );
};

export const LinkButton = ({ name, path, className }) => {
  return (
    <div className="button-wrapper">
      <button className={className}>
        <Link to={path}>{name}</Link>
      </button>
    </div>
  );
};
