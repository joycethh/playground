import React from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const ProductList = ({ products, selectedCategory, searchQuery }) => {
  const filteredProducts = products?.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const searchMatch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section className="products-section">
      <div className="flex-grid">
        {filteredProducts &&
          filteredProducts.map((item, key) => (
            <ProductCard item={item} key={key} />
          ))}
      </div>
    </section>
  );
};

export default ProductList;
