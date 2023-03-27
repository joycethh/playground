import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import useProductData from "../../customHooks/useProductData";
import ProductList from "../../components/ui/ProductList";
import "./filter.scss";
import Input from "../../components/input/Input";

const Filter = () => {
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
    <>
      <section className="filter-section">
        <div className="filterSection-container">
          <div className="filter-left">
            <div className="select-wrapper">
              <select onChange={handleFilter}>
                <option onChange={handleFilter}>Product Type</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
                <option value="men's clothing">men's clothing</option>
              </select>
            </div>
            <div className="select-wrapper">
              <select onChange={handleFilter}>
                <option value="ascending">ascending</option>
                <option value="decending">decending</option>
              </select>
            </div>
          </div>
          <div className="search-right">
            <Input
              name="search"
              onChange={handleSearch}
              type="text"
              className="searchInput"
              placeholder="Search..."
              icon={<RiSearch2Line />}
            />
          </div>
        </div>
      </section>
      <section>
        {filterData?.length ? (
          <ProductList data={filterData} />
        ) : (
          <div className="info-wrapper">
            <h2>Sorry, we do not have such product at the moment!</h2>
          </div>
        )}
      </section>
    </>
  );
};

export default Filter;
