import React, { useState } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import jewelryCommon from "../../assets/jewelry-white-common.jpg";

const Jewelry = () => {
  const { apiData } = useProductData();
  const categories = [...new Set(apiData?.map((product) => product.category))];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchTitle = (title) => {
    setSearchQuery(title);
  };

  return (
    <Badge title="shop">
      <CommonBanner imageUrl={jewelryCommon} title="jewelry" />
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
