import React, { useState, useEffect } from "react";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./shop.scss";
import { menuItems } from "./menuItems";
import Dropdown from "./Dropdown";

import ProductCard from "../../components/ui/ProductCard";

const Shop = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  }, []);

  const filltered =
    apiData && apiData.filter((item) => item.category === "jewelery");

  return (
    <Badge title="shop">
      <CommonSection title="product" />
      <section className="filter-section">
        <div className="filterSection-container">
          <div className="filterBy-wrapper">Filter By:</div>
          <div className="filterOption-wrapper">
            <div className="select-wrapper">
              <select>
                <option> Product Type</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="clothes">clothes</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select>
                <option> Material</option>
                <option value="diamond">diamond</option>
                <option value="silver">silver</option>
                <option value="fabric">fabric</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select>
                <option>color</option>
                <option value="">purple</option>
              </select>
            </div>
          </div>

          <div className="search-wrapper">
            <input placeholder="Search..." />
          </div>
        </div>
      </section>
      <section>
        <div className="flex-grid">
          {filltered &&
            filltered.map((item, key) => <ProductCard item={item} key={key} />)}
        </div>
      </section>
    </Badge>
  );
};

export default Shop;
