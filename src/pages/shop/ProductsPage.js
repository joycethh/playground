import React, { useState, useMemo } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import electronicCommon from "../../assets/electronics-blue-common.jpg";
const ProductsPage = ({ category }) => {
  //category is paramter passed from jewelry, electornics page

  const { apiData } = useProductData();

  const categories = useMemo(
    () => [...new Set(apiData?.map((product) => product.category))],
    [apiData]
  );

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCategory = (categorySelect) => {
    //dropdown select options
    setSelectedCategory(categorySelect);
  };

  const handleSearchTitle = (title) => {
    setSearchQuery(title);
  };

  return (
    <Badge title={category}>
      <CommonBanner imageUrl={electronicCommon} title={category} />
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

export default ProductsPage;
