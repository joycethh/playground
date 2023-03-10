import React from "react";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./shop.scss";
import { menuItems } from "./menuItems";
import Dropdown from "./Dropdown";

const Shop = () => {
  return (
    <Badge title="shop">
      <CommonSection title="product" />
      <section>
        <div className="filterSection-container">
          <div className="filterSection-wrapper">
            {menuItems.map((item, idx) => (
              <div className="option-wrapper" key={idx}>
                <button className="optionHeader-btn">
                  {item.title}
                  <RiArrowDropDownLine />
                </button>
                <Dropdown submenu={item.submenu} />
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
