import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const ProductList = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  }, []);
  return (
    <>
      <div className="flex-grid">
        {apiData && <ProductCard data={apiData} />}
      </div>
    </>
  );
};

export default ProductList;
