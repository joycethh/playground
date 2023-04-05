import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import logo from "../../assets/seashell.png";
import Email from "./email/Email";

import "./footer.scss";

const products = ["Jewelry", "Electronics"];
const brand = ["about us"];
const service = ["contact us"];

const menuItems = [
  {
    title: "Featured Products ",
    submenuItems: ["Jewelry", "Electronics"],
  },
  {
    title: "Grit & Grace ",
    submenuItems: ["about us"],
  },
  {
    title: "Customer Services",
    submenuItems: ["contact us"],
  },
];

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

const MobileNav = ({ openMenu, handleOpenMenu }) => {
  return (
    <div className="mobile-nav">
      <div className="menu-items">
        {menuItems.map((menuItem, index) => (
          <div key={index}>
            <header>
              <span>{menuItem.title}</span>
              <div className="icon-wrapper" onClick={handleOpenMenu(index)}>
                {openMenu ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </div>
            </header>

            <div
              id={`submenus-${index}`}
              hidden={openMenu !== index}
              className="submenu"
            >
              {menuItem.submenuItems.map((submenuItem, subIdx) => (
                <div className="display-block" key={subIdx}>
                  <Link to={`/products/${submenuItem.replace(/\s/g, "-")}`}>
                    {submenuItem}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (index) => {
    console.log(`submenus-${index} is clicked`, index);
    setOpenMenu(openMenu === index ? true : false);
  };
  return (
    <footer>
      <section className="main">
        <div className="left">
          <Email />
        </div>
        <div className="right">
          <Nav title="products" category={products} />
          <Nav title="Grit & Grace" category={brand} />
          <div className="nav">
            <Nav title="customer service" category={service} />
            <div className="socialWrapper">
              <h6>Follow Us</h6>
              <Social />
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-main">
        <Email />
        <section className="mobile-right">
          <MobileNav openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
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
        <div>
          © {new Date().getFullYear()} Grit & Grace Created By Joyce Tang
        </div>
      </section>
    </footer>
  );
};

export default Footer;
