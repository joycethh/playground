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
    ssubmenuItems: ["about us"],
  },
  {
    title: "Customer Services",
    submenuItems: ["my account", "contact us"],
  },
];
const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  //   const calcHeight = (el) => {
  //     const height = el.offsetHeight;
  //     console.log("height", height);
  //     setMenuHeight(height);
  //   };

  return (
    <div className="click-dropdown-menu mobile-nav">
      <ul className="menu-items">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link onClick={toggleMenu}>
              {menuItem.title}
              {activeMenu ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </Link>
            {menuItem.submenuItems && (
              <ul
                className={`submenu ${activeMenu ? "active" : "inactive"}`}
                style={{ maxHeight: activeMenu ? menuHeight + "px" : "0px" }}
                // ref={calcHeight}
              >
                {menuItem.submenuItems.map((submenuItem, index) => (
                  <li key={index}>
                    <Link to={`/products/${submenuItem.replace(/\s/g, "-")}`}>
                      {submenuItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
