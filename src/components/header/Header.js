import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { BiUser, BiMenuAltLeft } from "react-icons/bi";
import { HiLogout, HiOutlineShoppingCart } from "react-icons/hi";
import { toast } from "react-toastify";
import "./header.scss";

import { useSelector } from "react-redux";
import { useAuthContext } from "../../context/authContext";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { currentUser, logout } = useAuthContext();

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
    logout()
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
            Home
          </NavLink>
          <NavLink to="/jewelry " className={activeLink}>
            Jewelry
          </NavLink>
          <NavLink to="/electronics" className={activeLink}>
            Electronics
          </NavLink>
          <NavLink to="/women's clothing" className={activeLink}>
            Women's
          </NavLink>
          <NavLink to="/men's clothing" className={activeLink}>
            Men's
          </NavLink>
        </div>

        <div className="icons">
          {currentUser ? (
            <div className="user">
              <span className="profile"> Hi, {currentUser.displayName}</span>
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
            {totalQty !== 0 && (
              <span className="cart-thunmbnail-qty">{totalQty}</span>
            )}
          </div>

          <div onClick={toggleModal} className="icon-wrapper  menu-icon">
            <BiMenuAltLeft />
          </div>
        </div>
      </div>

      <div className={openModal ? "display-block" : "display-none"}>
        {openModal && (
          <div className="modal-nav">
            <div className="modal-nav-wrapper" onClick={toggleModal}>
              <NavLink to="/home" className={activeLink}>
                Home
              </NavLink>
              <NavLink to="/jewelry " className={activeLink}>
                Jewelry
              </NavLink>
              <NavLink to="/electronics" className={activeLink}>
                Electronics
              </NavLink>
              <NavLink to="/women's clothing" className={activeLink}>
                Women's
              </NavLink>
              <NavLink to="/men's clothing" className={activeLink}>
                Men's
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
