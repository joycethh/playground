import React from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const ProductList = () => {
  return (
    <>
      <div className="flex-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default ProductList;