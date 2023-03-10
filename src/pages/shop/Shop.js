import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./shop.scss";
import { useOnHoverOutside } from "../../customHooks/useOnHoverOutside";
import { menuItems } from "./menuItems";

const Shop = () => {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <Badge title="shop">
      <CommonSection title="product" />
      <section>
        <div className="filterSection-container">
          <div className="filterSection-wrapper">
            {menuItems.map((item, idx) => (
              <div className="options-container" key={idx}>
                <div className="option-wrapper">
                  <button
                    className="optionHeader-btn"
                    onMouseOver={() => setMenuDropDownOpen(true)}
                  >
                    {item.title}
                    <RiArrowDropDownLine />
                  </button>
                  {/* dropdown Menu body */}
                  <div className="selectBody">
                    {item.submenu?.map((subItem, idx) => (
                      <div className="select-wrapper" key={idx}>
                        <Link to={subItem.url}>{subItem.title}</Link>
                      </div>
                    ))}
                  </div>
                </div>
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
