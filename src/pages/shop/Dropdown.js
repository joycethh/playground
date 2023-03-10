import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ submenu }) => {
  return (
    <div className="selectBody">
      {submenu?.map((subItem, idx) => (
        <div className="select-wrapper" key={idx}>
          <Link to={subItem.url}>{subItem.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
