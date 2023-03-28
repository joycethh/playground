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
  console.log("categories", categories);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Badge title="shop">
      <CommonBanner imageUrl={jewelryCommon} title="jewelry" />
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <section>
        <ProductList products={apiData} selectedCategory={selectedCategory} />
      </section>
    </Badge>
  );
};

export default Jewelry;
