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

  const activeLink = ({ isActive }) => (isActive ? "active" : null);

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
          <NavLink to="/new-arrivals" className={activeLink}>
            New Arrivals
          </NavLink>
          <NavLink to="/best-sellers" className={activeLink}>
            Best Sellers
          </NavLink>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
          <NavLink to="/contact" className={activeLink}>
            Contact
          </NavLink>
        </div>

        <div className="right">
          <Link to="/auth">
            <BiUser />
          </Link>
          <Link to="/cart">
            <BiShoppingBag />
          </Link>
          <Link to="/my-orders">
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
            <NavLink to="/new-arrivals" className={activeLink}>
              New Arrivals
            </NavLink>
            <NavLink to="/best-sellers" className={activeLink}>
              Best Sellers
            </NavLink>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={activeLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={activeLink}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
