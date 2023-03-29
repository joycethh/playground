import React, { useState, useMemo } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import electronicsCommon from "../../assets/electronics-blue-common.jpg";

const Electronics = () => {
  const { apiData } = useProductData();

  const categories = useMemo(
    () => [...new Set(apiData?.map((product) => product.category))],
    [apiData]
  );

  const [selectedCategory, setSelectedCategory] = useState(`women's clothing`);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCategory = (categorySelect) => {
    setSelectedCategory(categorySelect); //dropdown select options
  };

  const handleSearchTitle = (title) => {
    setSearchQuery(title);
  };

  return (
    <Badge title="Women's Clothing">
      <CommonBanner imageUrl={electronicsCommon} title="Women's Clothing" />
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSelectCategory={handleSelectCategory}
        onSearchQuery={handleSearchTitle}
      />
      <section>
        <ProductList
          products={apiData}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </section>
    </Badge>
  );
};

export default Electronics;
