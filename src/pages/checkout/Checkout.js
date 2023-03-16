import React, { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/input/Input";
import "./checkout.scss";
import necklace from "../../assets/jewelery.jpg";
import { FcCustomerSupport } from "react-icons/fc";
import { Link } from "react-router-dom";
import Badge from "../../components/badge/Badge";
const Checkout = () => {
  const { cartItems, itemSubtotal, totalQty } = useSelector(
    (state) => state.cart
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitOrder = () => {
    console.log("submit order button clicked");
  };

  return (
    <Badge title="checkout">
      <section className="checkout-section">
        <div className="checkout-container">
          <div className="details-section">
            <h6>Shipping Address</h6>
            <form>
              <Input
                name="name"
                type="text"
                placeHolder="Name"
                autoFocus
                required
                handleChange={handleChange}
              />
              <Input
                name="email"
                type="text"
                placeHolder="Email"
                required
                handleChange={handleChange}
              />
              <Input
                name="phone"
                type="text"
                placeHolder="Phone Number"
                required
                handleChange={handleChange}
              />
              <Input
                name="streetAddress"
                type="text"
                placeHolder="Street Address"
                required
                handleChange={handleChange}
              />
              <Input
                name="city"
                type="text"
                placeHolder="City"
                required
                handleChange={handleChange}
              />
              <Input
                name="postalCode"
                type="text"
                placeHolder="Potal Code"
                required
                handleChange={handleChange}
              />
              <Input
                name="country"
                type="text"
                placeHolder="Country"
                required
                handleChange={handleChange}
              />
            </form>
          </div>

          <div className="summary-section">
            <div className="summary-content">
              <div className="table-wrapper">
                <table className="cartItem-table">
                  <caption>Order Summary</caption>
                  <tbody>
                    {cartItems.length &&
                      cartItems.map((item, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="itemImage-thumbnail">
                              <div className="itemImg-wrapper">
                                <img src={item.image} alt="" />
                              </div>
                              <span className="item-qty">{item.qty}</span>
                            </div>
                          </td>
                          <th>
                            <span className="itemName">{item.productName}</span>
                          </th>
                          <td>
                            <span className="itemTotalPrice">
                              {item.totalPrice}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="table-wrapper">
                <table className="cartItemTotal-table">
                  <tbody>
                    <tr>
                      <th>
                        <span className="totalHeader">Subtotal</span>
                      </th>
                      <td colSpan="2">
                        <span className="totalNumber">{itemSubtotal}</span>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        {" "}
                        <span className="totalHeader">Shipping</span>
                      </th>
                      <td colSpan="2">
                        <span className="totalNumber">$0.00</span>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        {" "}
                        <span className="totalHeader">Est. Tax</span>
                      </th>
                      <td colSpan="2">
                        <span className="totalNumber">
                          $
                          {Math.round(
                            (itemSubtotal * 0.08 + Number.EPSILON) * 100
                          ) / 100}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="total-line">Total</th>
                      <td>
                        <span className="totalNumber total-line">
                          $
                          {Math.round(
                            (itemSubtotal * 1.08 + Number.EPSILON) * 100
                          ) / 100}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="button-wrapper">
                <button onClick={submitOrder}>Place Order</button>
              </div>

              <div className="services-wrapper"></div>
            </div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Checkout;
