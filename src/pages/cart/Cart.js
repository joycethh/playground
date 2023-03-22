import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdDeleteOutline } from "react-icons/md";
import { Button, LinkButton } from "../../components/button/Button";
import "./cart.scss";
import Badge from "../../components/badge/Badge";
import { DELETE_FROM_CART } from "../../redux/feature/cartSlice";

import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const { cartItems, itemSubtotal } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <Badge title="My Cart">
      {/* <CommonSection title="My Cart" /> */}
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-left">
            <Link to="/shop">
              <MdKeyboardArrowLeft /> Continue Shopping
            </Link>
            <div className="header-wrapper">
              <h1>Shopping Cart</h1>
            </div>
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
          </div>
          <div className="cart-right">
            <div className="cart-right-content">
              <div id="orderDetails" className="orderDetails-wrapper">
                <h4>Order Summary</h4>
                <div className="subtotal">
                  Subtotal
                  <span className="number">{itemSubtotal}</span>
                </div>
                <div className="shipping">
                  Shipping
                  <span className="number">$0.00</span>
                </div>
                <div className="tax">
                  Estimated Tax
                  <span className="number">
                    $
                    {Math.round((itemSubtotal * 0.08 + Number.EPSILON) * 100) /
                      100}
                  </span>
                </div>
                <div className="total">
                  Estimated total
                  <span className="number">
                    $
                    {Math.round((itemSubtotal * 1.08 + Number.EPSILON) * 100) /
                      100}
                  </span>
                </div>

                {/* <button>
                  <Link to="/checkout">Checkout</Link>
                </button> */}
                <LinkButton
                  path="/checkout"
                  name="Checkout"
                  className="checkout-btn"
                />
              </div>

              <div className="service-wrapper">
                <div className="title">Need Help?</div>
                <Link to="/contact-us">contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Cart;
