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
  // console.log("apiData", apiData);

  return (
    <>
      <div className="flex-grid">
        {apiData &&
          apiData.map((item, key) => <ProductCard item={item} key={key} />)}
      </div>
    </>
  );
};

export default ProductList;
