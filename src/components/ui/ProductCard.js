import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import necklace from "../../assets/necklace.png";
import "./product.scss";
const ProductCard = () => {
  return (
    <div className="product-item-col">
      <div className="product-card-wrapper">
        <div className="product-img-wrapper">
          <Link to="/contact">
            <div className="img">
              <img src={necklace} alt="" />
            </div>
          </Link>
        </div>
        <div className="product-info-wrapper">
          <h3 className="product-name">Classic Necklace</h3>
          <div className="tag">
            <span>New</span>
          </div>
        </div>

        <div className="product-bottom-wrapper">
          <span className="price">$20</span>
          <span>
            <BiShoppingBag />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
