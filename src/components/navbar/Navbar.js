import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BiUser,
  BiShoppingBag,
  BiListUl,
  BiSearch,
  BiMenuAltLeft,
} from "react-icons/bi";
import {
  HiOutlineLightBulb,
  HiOutlineMoon,
  HiLogout,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/configure";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

import { useSelector } from "react-redux";
import { useAuth } from "../../customHooks/useAuth";

const Navbar = () => {
  const { toggle, isDarkMode } = useContext(DarkModeContext);
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useAuth();

  const totalQty = useSelector((state) => state.cart.totalQty);

  const headerRef = useRef();

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80) &&
        headerRef &&
        headerRef.current
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  });

  const activeLink = ({ isActive }) => (isActive ? "active" : null);

  const nativgate = useNavigate();
  // const dispatch = useDispatch();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log out successfully");
        nativgate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <span> Grit</span> Grace
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

        <div className="icons">
          {currentUser ? (
            <div className="icon-wrapper">
              <p className="profile"> Hi, {currentUser.displayName}</p>
            </div>
          ) : (
            <div className="icon-wrapper">
              <Link to="/auth">
                <BiUser />
              </Link>
            </div>
          )}

          {currentUser && (
            <div className="icon-wrapper">
              <HiLogout onClick={handleSignOut} />
            </div>
          )}

          <div className="icon-wrapper cart">
            <Link to="/cart">
              <HiOutlineShoppingCart />
            </Link>
            <span className="cart-thunmbnail-qty"> {totalQty} </span>
          </div>

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
