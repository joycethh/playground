import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import logo from "../../assets/seashell.png";
import Email from "./email/Email";
import DropdownMenu from "./DropdownMenu";
import "./footer.scss";

const products = ["best sellers", "gift card"];
const brand = ["about us", "our values"];
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

      <section className="mobile-main">
        <DropdownMenu />
      </section>

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
