import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import "./product.scss";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="product-item-col" key={item.id}>
          <div className="product-card-wrapper">
            <div className="product-img-wrapper">
              <Link to="/contact">
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
              </Link>
            </div>
            <div className="product-info-wrapper">
              <h3 className="product-name">{item.title}</h3>
              <div className="tag">
                <span>{item.category}</span>
              </div>
            </div>

            <div className="product-bottom-wrapper">
              <span className="price">${item.price}</span>
              <span>
                <BiShoppingBag />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
