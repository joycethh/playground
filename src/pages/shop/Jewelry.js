import React, { useState } from "react";
import CommonBanner from "../../components/ui/CommonBanner";
import useProductData from "../../customHooks/useProductData";
import Badge from "../../components/badge/Badge";
import Filter from "./Filter";
import ProductList from "../../components/ui/ProductList";
import jewelryCommon from "../../assets/jewelry-white-common.jpg";

const Jewelry = () => {
  const { apiData } = useProductData();
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(apiData);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log("e.target.value", e.target.value);
    console.log("category", category);

    if (category === "jewelry") {
      setFilteredProducts(
        apiData?.filter((product) => product.category === category)
      );
    }
    setFilteredProducts(apiData);
  };

  console.log("filteredProducts", filteredProducts);

  return (
    <Badge title="shop">
      <CommonBanner imageUrl={jewelryCommon} title="jewelry" />
      <Filter filterValue="jewelry" handleSelect={handleCategoryChange} />
      <section>
        <ProductList data={filteredProducts} />
      </section>
    </Badge>
  );
};

export default Jewelry;
