import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./style.scss";

const Navbar = () => {
  const { toggle, isDarkMode } = useContext(DarkModeContext);
  return (
    <header>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            <span>SeaShell</span>
          </Link>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="right">
          <div className="mode">
            {isDarkMode ? (
              <button onClick={toggle}>💡</button>
            ) : (
              <button onClick={toggle}>🌙</button>
            )}
          </div>
          <div className="user">
            <span>John</span>
          </div>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
