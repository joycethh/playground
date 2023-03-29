import React, { useState } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import jewelryCommon from "../../assets/jewelry-white-common.jpg";
// import { useParams } from "react-router-dom";

const Jewelry = () => {
  // const { category } = useParams();
  // console.log("category", category);
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
    <Badge title="Jewelry">
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
