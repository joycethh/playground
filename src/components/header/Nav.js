import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLink = ({ isActive }) => (isActive ? "active" : null);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/new-arrivals" className={activeLink}>
            New Arrivals
          </NavLink>
        </li>
      </ul>

      <NavLink to="/best-sellers" className={activeLink}>
        Best Sellers
      </NavLink>
      <NavLink to="/" className={activeLink}>
        All Pearls
      </NavLink>
      <NavLink to="/gift card" className={activeLink}>
        Gift Card
      </NavLink>
    </>
  );
};

export default Nav;
