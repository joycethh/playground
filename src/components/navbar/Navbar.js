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
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/cart">Cart</Link>

          <div className="setting">
            {isDarkMode ? (
              <span onClick={toggle}>💡</span>
            ) : (
              <span onClick={toggle}>🌙</span>
            )}
          </div>
          <div className="user">
            <img
              src="https://wallpapers.com/images/featured/s52z1uggme5sj92d.jpg"
              alt="avatar"
            />
            <span>Amy</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
