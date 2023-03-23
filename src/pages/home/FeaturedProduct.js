import React, { useEffect, useState } from "react";
import useProductData from "../../customHooks/useProductData";
import "./featuredProduct.scss";
import ProductList from "../../components/ui/ProductList";

const FeaturedProducts = () => {
  const { apiData } = useProductData();
  const [products, setProducts] = useState(apiData);

  useEffect(() => {
    const filltered = apiData.filter((item) => item.category === "jewelery");

    setProducts(filltered);
  }, [apiData]);

  return (
    <div className="pt-3">
      <div className="page-width">
        <h3 className="mt-3 mb-3">Featured collection</h3>
        <ProductList data={products} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
