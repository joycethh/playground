import React from "react";
import ProductsPage from "./ProductsPage";

// import jewelryCommon from "../../assets/jewelry-white-common.jpg";
import { useParams } from "react-router-dom";

const Jewelry = () => {
  const { category } = useParams();
  console.log("category", category);

  return <ProductsPage category={category || "Jewelry"} />;
};

export default Jewelry;
