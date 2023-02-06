import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import logo from "../../assets/seashell.png";

import "./footer.scss";

const Footer = () => {
  const [isOpen, setIsMenu] = useState(true);

  const openMenu = () => {
    setIsMenu((prev) => !prev);
  };
  return (
    <footer>
      <section className="main">
        <div className="left">
          <h3>Offers, new arrivals and more.</h3>
          <div className="input-wrapper">
            <input placeholder="Email Address" />
            <button>
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>

        <div className="right">
          <div className="columns">
            <h6>PRODUCTS</h6>
            <ul>
              <li>
                <Link to="/best-sellers">Best Sellers</Link>
              </li>
              <li>
                <Link to="/gift-card"> Gift Card</Link>
              </li>
            </ul>
          </div>

          <div className="columns">
            <h6>SEASHELL</h6>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/our-values">Our Values</Link>
              </li>
            </ul>
          </div>

          <div className="columns">
            <div>
              <h6>Customer Service</h6>
              <ul>
                <li>
                  <Link to="/my-account">My Account</Link>
                </li>
                <li>
                  <Link to="/my-orders">Order Histroy</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6>Follow Us</h6>
              <div className="social-column">
                <a href="https://www.facebook.com">
                  <FaFacebookSquare />
                </a>

                <a href="https://wwww.instagram.com">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mobile-main-right">
        <section className="mobile-right">
          <div className="row">
            <header>
              Products
              <div className="icon-wrapper">
                <span onClick={openMenu}>
                  {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </span>
              </div>
            </header>
            <section className="mobile-menu">
              <Link to="/best-sellers">Best Sellers</Link>
              <Link to="/gift-card"> Gift Card</Link>
            </section>
          </div>

          <div className="row">
            <header>
              Seashell
              <div className="icon-wrapper">
                <span onClick={openMenu}>
                  {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </span>
              </div>
            </header>
            <section className="mobile-menu">
              <Link to="/about">About Us</Link>
              <Link to="/our-values">Our Values</Link>
            </section>
          </div>

          <div className="row">
            <header>
              Customer Service
              <div className="icon-wrapper">
                <span onClick={openMenu}>
                  {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </span>
              </div>
            </header>
            <section className="mobile-menu">
              <Link to="/my-account">My Account</Link>
              <Link to="/my-orders">Order Histroy</Link>
              <Link to="/contact"> Contact Us</Link>
            </section>
          </div>
        </section>
      </div>

      <section className="mobile-logo-social">
        <img src={logo} alt="" />
        <div className="mobile-social-column">
          <a href="https://www.facebook.com">
            <FaFacebookSquare />
          </a>

          <a href="https://wwww.instagram.com">
            <FaInstagram />
          </a>
        </div>
      </section>
      <section className="logo">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </section>

      <section className="footer">
        <div>© {new Date().getFullYear()} Seashell. All Rights Reserverd.</div>
      </section>
    </footer>
  );
};

export default Footer;
