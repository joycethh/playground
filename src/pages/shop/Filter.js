import React from "react";
// import { RiSearch2Line } from "react-icons/ri";
// import Input from "../../components/input/Input";
import "./filter.scss";

const Filter = ({ filterValue, handleSelect }) => {
  const category = [
    { id: 1, name: "jewelry" },
    { id: 2, name: "electronics" },
    { id: 3, name: `women's clothing` },
    { id: 4, name: `men's clothing` },
  ];

  return (
    <>
      <section className="filter-section">
        <div className="filterSection-container">
          <div className="filter-left">
            <div className="select-wrapper">
              <label htmlFor="category-select">Filter by Category:</label>
              <select value={filterValue} onChange={handleSelect}>
                {category.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-wrapper">
              <select onChange={() => {}}>
                <option value="ascending">ascending</option>
                <option value="decending">decending</option>
              </select>
            </div>
          </div>
          {/* <div className="search-right">
            <Input
              name="search"
              onChange={handleSearch}
              type="text"
              className="searchInput"
              placeholder="Search..."
              icon={<RiSearch2Line />}
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Filter;
