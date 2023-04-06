import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "./subscribe/Subscribe";
import { Menu, DropdownMenu, Social } from "./DropdownMenu";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="main">
        <div className="left">
          <Subscribe />
        </div>
        <div className="right">
          <Menu />
        </div>

        <div className="mobile-right">
          <DropdownMenu />
        </div>
      </section>

      <section className="mobile-logo-social">
        <div className="logo">
          <Link to="/">
            <span> Grit & Grace </span>
          </Link>
        </div>
        <Social />
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
