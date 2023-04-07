import React from "react";
import useProductData from "../../customHooks/useProductData";
import "./featuredProduct.scss";
import ProductList from "../../components/ui/ProductList";

const FeaturedProducts = () => {
  const { apiData } = useProductData();

  return (
    <div className="pt-3">
      <div className="page-width mb-3">
        <h3 className="mt-3">Featured collection</h3>
        {apiData && <ProductList products={apiData} />}
      </div>
    </div>
  );
};

export default FeaturedProducts;
