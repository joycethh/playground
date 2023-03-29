import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import Input from "../../components/input/Input";
import "./filter.scss";

const Filter = ({
  categories,
  selectedCategory,
  searchQuery,
  onSelectCategory,
  onSearchQuery,
}) => {
  const handleSelectChange = (event) => {
    onSelectCategory(event.target.value);
  };

  const handleSearchQueryChange = (e) => {
    onSearchQuery(e.target.value);
  };

  return (
    <>
      <section className="filter-section">
        <div className="flex-container">
          <div className="flex-left">
            <div className="select-wrapper">
              <label htmlFor="category-select">Filter by:</label>
              <select
                value={selectedCategory || ""}
                onChange={handleSelectChange}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="select-wrapper">
              <label htmlFor="sort-select">Sort by:</label>
              <select onChange={() => {}}>
                <option value="price">Price ascending</option>
                <option value="price">Price decending</option>
                <option value="decending">Recommended</option>
              </select>
            </div> */}
          </div>
          <div className="flex-right">
            <div className="search-wrapper">
              <Input
                name="search"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                type="text"
                placeholder="Search..."
                icon={<RiSearch2Line className="searchInput" />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
