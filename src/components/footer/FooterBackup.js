import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import logo from "../../assets/seashell.png";
import Email from "./email/Email";

import "./footer.scss";

const Footer = () => {
  const [isOpen, setIsMenu] = useState(true);

  const openMenu = () => {
    setIsMenu((prev) => !prev);
  };
  return (
    <footer>
      <section className="main">
        <Email />
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

      <div className="mobile-main">
        <Email />
        <section className="mobile-right">
          <div className="row">
            <header>
              <span>Products</span>
              <div className="icon-wrapper" onClick={openMenu}>
                {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </div>
            </header>
            <section
              className={
                isOpen ? "mobile display-block" : "mobile display-none"
              }
            >
              <Link to="/best-sellers">Best Sellers</Link>
              <Link to="/gift-card"> Gift Card</Link>
            </section>
          </div>

          <div className="row">
            <header>
              <span>Seashell</span>
              <div className="icon-wrapper" onClick={openMenu}>
                {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </div>
            </header>
            <section
              className={
                isOpen ? "mobile display-block" : "mobile display-none"
              }
            >
              <Link to="/about">About Us</Link>
              <Link to="/our-values">Our Values</Link>
            </section>
          </div>

          <div className="row">
            <header>
              <span>Customer Service</span>
              <div className="icon-wrapper" onClick={openMenu}>
                {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </div>
            </header>
            <section
              className={
                isOpen ? "mobile display-block" : "mobile display-none"
              }
            >
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
