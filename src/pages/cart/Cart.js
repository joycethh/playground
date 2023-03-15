import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdDeleteOutline } from "react-icons/md";
import "./cart.scss";
import Badge from "../../components/badge/Badge";
import CommonSection from "../../components/ui/CommonSection";

import { useSelector } from "react-redux";
const Cart = () => {
  const itemsInCart = useSelector((state) => state.cart.cartItems);
  const subtotal = useSelector((state) => state.cart.itemSubtotal);
  const tax = useSelector((state) => state.cart.tax);
  const total = useSelector((state) => state.cart.totalAmount);

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
              {itemsInCart.length ? (
                itemsInCart.map((item, idx) => (
                  <div className="cartItem" key={idx}>
                    <div className="item-container">
                      <button className="item-delete">
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
                  <span className="number">{subtotal}</span>
                </div>
                <div className="shipping">
                  Shipping
                  <span className="number">$0.00</span>
                </div>
                <div className="tax">
                  Estimated Tax
                  <span className="number">${tax}</span>
                </div>
                <div className="total">
                  Estimated total
                  <span className="number">${total}</span>
                </div>

                <button>Checkout</button>
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
