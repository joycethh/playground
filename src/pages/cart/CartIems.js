import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_FROM_CART } from "../../redux/feature/cartSlice";
import "./cartItems.scss";
const CartItems = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cartItems-container">
      {cartItems.length ? (
        cartItems.map((item, idx) => (
          <div className="cartItem" key={idx}>
            <div className="item-container">
              <button
                className="item-delete"
                onClick={() => dispatch(DELETE_FROM_CART(item.id))}
              >
                <MdDeleteOutline />
              </button>
              <div className="item-details-left">
                <div className="img-wrapper">
                  <Link to={`/shop/`}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="item-details-right">
                  <div className="name">
                    <span>{item.productName}</span>
                  </div>
                  <div className="qty">
                    <span>{item.qty}</span>
                    <span>{item.totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3>No items in the cart</h3>
      )}
    </div>
  );
};

export default CartItems;
