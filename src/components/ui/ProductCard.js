import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import "./product.scss";
import { ADD_ITEM } from "../../redux/feature/cartSlice";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const addItem = ({ item }) => {
    console.log("add button clicked");
    dispatch(
      ADD_ITEM({
        id: item.id,
        productName: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };

  return (
    <>
      {data?.map((item) => (
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
              <span onClick={addItem}>
                <BsFillCartPlusFill />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
