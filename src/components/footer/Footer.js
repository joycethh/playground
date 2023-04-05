import React, { useState } from "react";

import logo from "../../assets/seashell.png";
import Email from "./email/Email";
import { Menu, DropdownMenu, Social } from "./DropdownMenu";
import "./footer.scss";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);
  console.log("openMenu", openMenu);
  const handleOpenMenu = (index) => {
    console.log(`submenus-${index} is clicked`, index);
    setOpenMenu(openMenu === index ? index : null);
  };
  return (
    <footer>
      <section className="main">
        <div className="left">
          <Email />
        </div>
        <div className="right">
          <Menu />
        </div>

        <div className="mobile-right">
          <DropdownMenu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
        </div>
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
