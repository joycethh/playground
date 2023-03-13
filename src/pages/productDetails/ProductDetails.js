import React from "react";
import { useParams } from "react-router";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import useProductData from "../../customHooks/useProductData";

const ProductDetails = ({ item }) => {
  const { apiData } = useProductData();
  const { id } = useParams();
  console.log("id", id);
  return (
    <Badge title="detail">
      <CommonSection />
      <section className="productDetail-section">
        <div className="productDetail">
          <div className="img-wrapper">
            <img src="" alt="" />
          </div>
          <div className="info-wrapper">
            <h2>title</h2>
            <span>rating</span>
            <span>description</span>
            <button>-</button>
            <p>qty</p>
            <button>+</button>

            <button>add to cart</button>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default ProductDetails;
