import React, { useState } from "react";
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
    submenuItems: ["my account", "contact us"],
  },
];

const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="click-dropdown-menu mobile-nav">
      <ul className="menu-items">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <header>
              <span> {menuItem.title}</span>
              <div
                className="icon-wrapper"
                onClick={handleOpenMenu(index)}
                aria-expanded={openMenu === index ? "true" : "false"}
                aria-controls={`submenu-${index}`}
              >
                {openMenu ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </div>
            </header>
            {/* {menuItem.submenuItems && ( */}
            <ul
              className="mobile submenu-items"
              id={`submenu-${index}`}
              hidden={openMenu !== index}
            >
              {menuItem?.submenuItems?.map((submenuItem, subIdx) => (
                <li key={subIdx}>
                  <Link to={`/products/${submenuItem.replace(/\s/g, "-")}`}>
                    {submenuItem}
                  </Link>
                </li>
              ))}
            </ul>
            {/* )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
