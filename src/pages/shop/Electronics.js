import React from "react";
import ProductsPage from "./ProductsPage";
import { useParams } from "react-router-dom";

const Electronics = () => {
  const { category } = useParams();
  console.log("category", category);

  return <ProductsPage category={category || "Electronics"} />;
};

export default Electronics;
