import React from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const ProductList = ({ data }) => {
  return (
    <>
      <div className="flex-grid">
        {data && data.map((item, key) => <ProductCard item={item} key={key} />)}
      </div>
    </>
  );
};

export default ProductList;
