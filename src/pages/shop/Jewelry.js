import React, { useState } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import Badge from "../../components/badge/Badge";
import { RiSearch2Line } from "react-icons/ri";
import "./shop.scss";
import useProductData from "../../customHooks/useProductData";
import jewelryCommon from "../../assets/jewelry-white-common.jpg";
import ProductList from "../../components/ui/ProductList";

const Jewelry = () => {
  const { apiData } = useProductData();

  const [filterData, setFilterData] = useState(apiData);

  const handleFilter = (e) => {
    const filterVal = e.target.value;
    if (filterVal === "nan") setFilterData(apiData);
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

  const handleSearch = (e) => {
    const searchVal = e.target.value;

    const searchedItem = apiData.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );

    setFilterData(searchedItem);
  };

  return (
    <Badge title="shop">
      <CommonBanner imageUrl={jewelryCommon} title="jewelry" />
      {/* <section className="filter-section">
        <div className="filterSection-container">
          <div className="filterBy-wrapper">Filter By:</div>
          <div className="filterOption-wrapper">
            <div className="select-wrapper">
              <select onChange={handleFilter}>
                <option onChange={handleFilter}>Product Type</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
                <option value="men's clothing">men's clothing</option>
              </select>
            </div>

            <div className="sort-wrapper">
              <select onChange={handleFilter}>
                <option value="ascending">ascending</option>
                <option value="decending">decending</option>
              </select>
            </div>
          </div>

          <div className="search-wrapper">
            <input
              name="search"
              onChange={handleSearch}
              type="text"
              className="searchInput"
              placeholder="Search..."
            />
            <span>
              <RiSearch2Line />
            </span>
          </div>
        </div>
      </section> */}
      <section>
        {filterData?.length ? (
          <ProductList data={filterData} />
        ) : (
          <div className="info-wrapper">
            <h2>Sorry, we do not have such product at the moment!</h2>
          </div>
        )}
      </section>
    </Badge>
  );
};

export default Jewelry;
