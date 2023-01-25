import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
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
        <div className="user">
          <span>John</span>
        </div>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  </header>;
};

export default Navbar;
