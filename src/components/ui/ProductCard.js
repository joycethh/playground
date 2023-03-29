import React from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import "./product.scss";
import { ADD_TO_CART } from "../../redux/feature/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      ADD_TO_CART({
        id: item.id,
        productName: item.title,
        price: item.price,
        image: item.image,
      })
    );
    toast.success("The item is waiting for you in the cart");
  };

  return (
    <>
      <div className="product-item-col" key={item.id}>
        <div className="product-card-wrapper">
          <div className="product-img-wrapper">
            <Link to={`/product/${item.id}`}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
            </Link>
          </div>
          <div className="product-info-wrapper">
            <h4>
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title.slice(0, 50)}
            </h4>
            <span>{item.category}</span>
          </div>

          <div className="product-bottom-wrapper" onClick={addItem}>
            <span className="price">${item.price}</span>
            <span>
              <BsCartPlus />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
