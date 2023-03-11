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
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  }, []);

  const handleFilter = (e) => {
    const filterVal = e.target.value;
    if (filterVal === "jewelery") {
      const filltered =
        apiData && apiData.filter((item) => item.category === "jewelery");

      setFilterData(filltered);
    }

    if (filterVal === "electronics") {
      const filltered =
        apiData && apiData.filter((item) => item.category === "electronics");

      setFilterData(filltered);
    }

    if (filterVal === "women's clothing") {
      const filltered =
        apiData &&
        apiData.filter((item) => item.category === `women's clothing`);

      setFilterData(filltered);
    }

    if (filterVal === "men's clothing") {
      const filltered =
        apiData && apiData.filter((item) => item.category === `men's clothing`);

      setFilterData(filltered);
    }
  };

  return (
    <Badge title="shop">
      <CommonSection title="product" />
      <section className="filter-section">
        <div className="filterSection-container">
          <div className="filterBy-wrapper">Filter By:</div>
          <div className="filterOption-wrapper">
            <div className="select-wrapper">
              <select onChange={handleFilter}>
                <option> Product Type</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
                <option value="men's clothing">men's clothing</option>
              </select>
            </div>

            {/* <div className="select-wrapper">
              <select onChange={handleFilter}>
                <option> Material</option>
                <option value="diamond">diamond</option>
                <option value="silver">silver</option>
                <option value="fabric">fabric</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select onChange={handleFilter}>
                <option>color</option>
                <option value="">purple</option>
              </select>
            </div> */}
          </div>

          <div className="search-wrapper">
            <input placeholder="Search..." />
          </div>
        </div>
      </section>
      <section>
        <div className="flex-grid">
          {filterData &&
            filterData.map((item, key) => (
              <ProductCard item={item} key={key} />
            ))}
        </div>
      </section>
    </Badge>
  );
};

export default Shop;
