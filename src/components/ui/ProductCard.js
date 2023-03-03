import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import "./product.scss";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <div className="product-item-col">
          <div className="product-card-wrapper">
            <div className="product-img-wrapper">
              <Link to="/contact">
                <div className="img">
                  <img src={data.image} alt="" />
                </div>
              </Link>
            </div>
            <div className="product-info-wrapper">
              <h3 className="product-name">{data.title}</h3>
              <div className="tag">
                <span>{data.category}</span>
              </div>
            </div>

            <div className="product-bottom-wrapper">
              <span className="price">{data.price}</span>
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
