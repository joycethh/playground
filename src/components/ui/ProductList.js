import React from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const ProductList = ({ data }) => {
  return (
    <>
      <div className="flex-grid">
        <ProductCard data={data} />
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
