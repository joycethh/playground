import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

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

export const Menu = () => {
  return (
    <>
      {menuItems.map((menuItem, index) => (
        <div className="menu" key={index}>
          <h6>{menuItem.title}</h6>
          <div className="submenu">
            {menuItem.submenuItems.map((submenuItem, subIdx) => (
              <div className="links" key={subIdx}>
                <Link to={`${submenuItem.replace(/\s/g, "-")}`}>
                  {submenuItem}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  return (
    <div className="mt-15">
      {menuItems.map((menuItem, index) => (
        <div key={index} className="menu-item">
          <div className="header">
            {/* <header> */}
            <span> {menuItem.title}</span>
            <div
              className="icon-wrapper"
              onClick={() => handleOpenMenu(index)}
              aria-expanded={openMenu === index ? "true" : "false"}
              aria-controls={`submenu-${index}`}
            >
              {openMenu === index ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </div>
            {/* </header> */}
          </div>
          <div
            className="mobile-submenu"
            id={`submenu-${index}`}
            hidden={openMenu !== index}
          >
            {openMenu === index &&
              menuItem.submenuItems.map((submenuItem, subIdx) => (
                <div key={subIdx} className="links">
                  <Link to={`/products/${submenuItem.replace(/\s/g, "-")}`}>
                    {submenuItem}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Social = () => {
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
