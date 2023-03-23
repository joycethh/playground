import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import "./product.scss";
import { ADD_ITEM } from "../../redux/feature/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      ADD_ITEM({
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
            <Link to={`/shop/${item.id}`}>
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
    </>
  );
};

export default ProductCard;
