import React, { useState, useMemo } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import banner from "../../assets/banner-men.jpg";

const Electronics = () => {
  const { apiData } = useProductData();

  const categories = useMemo(
    () => [...new Set(apiData?.map((product) => product.category))],
    [apiData]
  );

  const [selectedCategory, setSelectedCategory] = useState(`men's clothing`);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCategory = (categorySelect) => {
    setSelectedCategory(categorySelect); //dropdown select options
  };

  const handleSearchTitle = (title) => {
    setSearchQuery(title);
  };

  return (
    <Badge title="Men's Clothing">
      <CommonBanner imageUrl={banner} title="Men's Clothing" />
      <div className="mt-15">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onSelectCategory={handleSelectCategory}
          onSearchQuery={handleSearchTitle}
        />
      </div>
      <section>
        <div className="pt-3">
          <div className="page-width mb-3">
            <ProductList
              products={apiData}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Electronics;
