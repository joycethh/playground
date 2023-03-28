// import React from "react";
// import ProductCard from "./ProductCard";
// import "./product.scss";

// const ProductList = ({ data }) => {
//   return (
//     <>
//       <div className="flex-grid">
//         {data && data.map((item, key) => <ProductCard item={item} key={key} />)}
//       </div>
//     </>
//   );
// };

// export default ProductList;

import React from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const ProductList = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
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
