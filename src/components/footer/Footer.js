import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import logo from "../../assets/seashell.png";
import Email from "./email/Email";

import "./footer.scss";

const products = ["best sellers", "gift card"];
const seaShell = ["about us", "our values"];
const service = ["my account", "my orders", "contact us"];

const Nav = ({ title, category }) => {
  return (
    <div className="nav">
      <h6>{title}</h6>
      <ul>
        {category.map((item, idx) => (
          <li key={idx}>
            <Link to={`${item.replace(/\s/g, "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const MobileNav = ({ title, isOpen, openMenu, category }) => {
  return (
    <div className="mobile-nav">
      <header>
        <span>{title}</span>
        <div className="icon-wrapper" onClick={openMenu}>
          {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </div>
      </header>
      <section
        className={isOpen ? "mobile display-block" : "mobile display-none"}
      >
        {category.map((item, idx) => (
          <Link to={`${item.replace(/\s/g, "-")}`} key={idx}>
            {item}
          </Link>
        ))}
      </section>
    </div>
  );
};
const Social = () => {
  return (
    <div className="social">
      <a href="https://www.facebook.com">
        <FaFacebookSquare />
      </a>
      <a href="https://wwww.instagram.com">
        <FaInstagram />
      </a>
    </div>
  );
};
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
          <Nav title="products" category={products} />
          <Nav title="seashell" category={seaShell} />
          <div className="nav">
            <Nav title="customer service" category={service} />
            <div>
              <h6>Follow Us</h6>
              <Social />
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-main">
        <Email />
        <section className="mobile-right">
          <MobileNav
            title="Products"
            isOpen={isOpen}
            openMenu={openMenu}
            category={products}
          />
          <MobileNav
            title="Seashell"
            isOpen={isOpen}
            openMenu={openMenu}
            category={seaShell}
          />
          <MobileNav
            title="Customer Service"
            isOpen={isOpen}
            openMenu={openMenu}
            category={service}
          />
        </section>
      </div>

      <section className="mobile-logo-social">
        <img src={logo} alt="" />
        <Social />
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
