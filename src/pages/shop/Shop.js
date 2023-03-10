import React, { useState, useRef, useEffect } from "react";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./shop.scss";

import { menuItems } from "./menuItems";
import Dropdown from "./Dropdown";
import { useOnHoverOutside } from "../../customHooks/useOnHoverOutside";

const Shop = () => {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  // useEffect(() => {
  //   const handler = (event) => {
  //     if (
  //       isMenuDropDownOpen &&
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target)
  //     ) {
  //       setMenuDropDownOpen(false);
  //     }
  //   };

  //   document.addEventListener("mouseover", handler);
  //   // document.addEventListener("touchstart", handler);
  //   return () => {
  //     document.removeEventListener("mousedout", handler);
  //     // document.removeEventListener("touchstart", handler);
  //   };
  // }, [isMenuDropDownOpen]);

  return (
    <Badge title="shop">
      <CommonSection title="product" />
      <section>
        <div className="filterSection-container">
          <div className="filterSection-wrapper">
            {menuItems.map((item, idx) => (
              <div className="option-wrapper" key={idx} ref={dropdownRef}>
                <button
                  className="optionHeader-btn"
                  onMouseOver={() => setMenuDropDownOpen(true)}
                >
                  {item.title}
                  <RiArrowDropDownLine />
                </button>
                {/* dropdown Menu body */}
                <Dropdown
                  submenu={item.submenu}
                  isMenuDropDownOpen={isMenuDropDownOpen}
                />
              </div>
            ))}

            <div className="sort-container">sort section</div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Shop;
