import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdDeleteOutline } from "react-icons/md";
import "./cart.scss";
import Badge from "../../components/badge/Badge";
import CommonSection from "../../components/ui/CommonSection";
import necklace from "../../assets/jewelery.jpg";
const Cart = () => {
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
              <div className="cartItem">
                <div className="item-container">
                  <button className="item-delete">
                    <MdDeleteOutline />
                  </button>
                  <div className="item-details-left">
                    <div className="img-wrapper">
                      <Link to={`/shop/`}>
                        <img src={necklace} alt="" />
                      </Link>
                    </div>
                    <div className="item-details-right">
                      <div className="name">
                        <span>item title--pearl necklace</span>
                      </div>
                      <div className="qty">
                        <span>2</span>
                        <span>$104.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cartItem">
                <div className="item-container">
                  <button className="item-delete">
                    <MdDeleteOutline />
                  </button>
                  <div className="item-details-left">
                    <div className="img-wrapper">
                      <Link to={`/shop/`}>
                        <img src={necklace} alt="" />
                      </Link>
                    </div>
                    <div className="item-details-right">
                      <div className="name">
                        <span>item title--pearl necklace</span>
                      </div>
                      <div className="qty">
                        <span>2</span>
                        <span>$104.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cartItem">
                <div className="item-container">
                  <button className="item-delete">
                    <MdDeleteOutline />
                  </button>
                  <div className="item-details-left">
                    <div className="img-wrapper">
                      <Link to={`/shop/`}>
                        <img src={necklace} alt="" />
                      </Link>
                    </div>
                    <div className="item-details-right">
                      <div className="name">
                        <span>item title--pearl necklace</span>
                      </div>
                      <div className="qty">
                        <span>2</span>
                        <span>$104.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-right-content">
              <div id="orderDetails" className="orderDetails-wrapper">
                <h4>Order Summary</h4>
                <div className="subtotal">
                  Subtotal
                  <span className="number">$400.00</span>
                </div>
                <div className="shipping">
                  Shipping
                  <span className="number">$20.00</span>
                </div>
                <div className="tax">
                  Estimated Tax
                  <span className="number">$30.00</span>
                </div>
                <div className="total">
                  Estimated total
                  <span className="number">$450.00</span>
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
