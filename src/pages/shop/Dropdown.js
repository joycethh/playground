import React from "react";
// import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Dropdown = ({ submenu }) => {
  return (
    <div className="selectBody">
      {submenu?.map((subItem, idx) => (
        <div className="select-wrapper" key={idx}>
          <LinkScroll
            to={subItem.url}
            smooth={true}
            offset={-60}
            duration={500}
          >
            {subItem.title}
          </LinkScroll>
          {/* <Link to={subItem.url}>{subItem.title}</Link> */}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
