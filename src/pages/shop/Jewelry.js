import React, { useState, useMemo } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import jewelryCommon from "../../assets/jewelry-white-common.jpg";

const Jewelry = () => {
  const { apiData } = useProductData();

  const categories = useMemo(
    () => [...new Set(apiData?.map((product) => product.category))],
    [apiData]
  );

  const [selectedCategory, setSelectedCategory] = useState("jewelery");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCategory = (categorySelect) => {
    setSelectedCategory(categorySelect); //dropdown select options
  };

  const handleSearchTitle = (title) => {
    setSearchQuery(title);
  };

  return (
    <Badge title="Jewelry">
      <CommonBanner imageUrl={jewelryCommon} title="Jewelry" />
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

export default Jewelry;
