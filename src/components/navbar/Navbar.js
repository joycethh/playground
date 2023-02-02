import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BiUser,
  BiShoppingBag,
  BiListUl,
  BiSearch,
  BiMenuAltLeft,
} from "react-icons/bi";

import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
  const { toggle, isDarkMode } = useContext(DarkModeContext);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            Sea<span>Shell</span>
          </Link>
        </div>

        <div className="nav">
          <NavLink
            to="/new-arrivals"
            // className={(state) => console.log("state", state)}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            New Arrivals
          </NavLink>
          <NavLink to="/best-sellers">Best Sellers</NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="right">
          <Link to="/login">
            <BiUser />
          </Link>
          <Link to="/cart">
            <BiShoppingBag />
          </Link>
          <Link to="/order-history">
            <BiListUl />
          </Link>
          <BiSearch />
          <span onClick={toggle}>
            {isDarkMode ? <HiOutlineLightBulb /> : <HiOutlineMoon />}
          </span>

          <span onClick={toggleModal} className="menu-icon">
            <BiMenuAltLeft />
          </span>
        </div>
      </div>

      <div className={openModal ? "modal display-block" : "modal display-none"}>
        <div className="modal-nav">
          <div className="modal-nav-wrapper" onClick={toggleModal}>
            <Link to="/new-arrivals">New Arrivals</Link>
            <Link to="/best-sellers">Best Sellers</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
