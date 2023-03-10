import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./shop.scss";
import { useOnHoverOutside } from "../../customHooks/useOnHoverOutside";

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
            <div className="options-container">
              <div
                id="productType"
                className="option-wrapper"
                ref={dropdownRef}
              >
                <div className="optionHeader">Product Type</div>
                <div className="icon-wrapper">
                  <RiArrowDropDownLine
                    onMouseOver={() => setMenuDropDownOpen(true)}
                  />
                </div>
                {isMenuDropDownOpen && (
                  <div className="selectBody">
                    <div className="select-wrapper">
                      <Link to="/jewelry">Jewelry</Link>
                    </div>
                    <div className="select-wrapper">
                      <Link to="/electronic">electronic</Link>
                    </div>

                    <div className="select-wrapper">
                      <Link to="/men">Men</Link>
                    </div>
                    <div className="select-wrapper">
                      <Link to="/women">Women</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="sort-container">sort section</div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Shop;
