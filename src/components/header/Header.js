import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BiUser, BiMenuAltLeft } from "react-icons/bi";
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
import "./header.scss";

import { useSelector } from "react-redux";
import { useAuth } from "../../customHooks/useAuth";

const Header = () => {
  const { toggle, isDarkMode } = useContext(DarkModeContext);
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useAuth();

  const totalQty = useSelector((state) => state.cart.totalQty);

  const activeLink = ({ isActive }) => (isActive ? "active" : null);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > headerRef.current.offsetTop) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nativgate = useNavigate();

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
    <header ref={headerRef}>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <span> Grit & Grace </span>
          </Link>
        </div>

        <div className="nav">
          <NavLink to="/home" className={activeLink}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/products/jewelry " className={activeLink}>
            <span>Jewelry</span>
          </NavLink>
          <NavLink to="/products/electronics" className={activeLink}>
            Electronics
          </NavLink>
          <NavLink to="/products/women's clothing" className={activeLink}>
            Women
          </NavLink>
          <NavLink to="/products/men's clothing" className={activeLink}>
            Men
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
            <span className="cart-thunmbnail-qty">{totalQty}</span>
          </div>

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
            <NavLink to="/home" className={activeLink}>
              <span>Home</span>
            </NavLink>
            <NavLink to="/shop" className={activeLink}>
              <span>Shop</span>
            </NavLink>

            {/* <NavLink to="/electronics" className={activeLink}>
            Electronics
          </NavLink>

          <NavLink to="/cloth" className={activeLink}>
            Cloth
          </NavLink> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
