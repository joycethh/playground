import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import Input from "../../components/input/Input";
import "./checkout.scss";
import Badge from "../../components/badge/Badge";
const Checkout = () => {
  const { cartItems, itemSubtotal } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData);
  };

  const submitOrder = () => {
    console.log("submit order button clicked");
  };

  return (
    <Badge title="Checkout">
      <section className="checkout-section">
        <div className="checkout-container">
          <div className="checkout-left">
            <MdKeyboardArrowLeft /> <Link to="/cart">Return to Cart</Link>
            <h6>Shipping Address</h6>
            {/* <form> */}
            {/* <div className="formInput-wrapper">
                <Input
                  name="email"
                  type="text"
                  placeHolder="Email"
                  required
                  handleChange={handleChange}
                />
              </div> */}
            <div className="form-wrapper">
              <div className="formInput-wrapper half">
                <Input
                  name="firstName"
                  type="text"
                  placeHolder="First Name"
                  autoFocus
                  required
                  handleChange={handleChange}
                />
                <Input
                  name="lastName"
                  type="text"
                  placeHolder="Last Name"
                  required
                  handleChange={handleChange}
                />
              </div>

              <div className="formInput-wrapper">
                <Input
                  name="streetAddress"
                  type="text"
                  placeHolder="Street Address"
                  required
                  handleChange={handleChange}
                />
              </div>
              <div className="formInput-wrapper half">
                <Input
                  name="city"
                  type="text"
                  placeHolder="City"
                  required
                  handleChange={handleChange}
                />
                <Input
                  name="state"
                  type="text"
                  placeHolder="State"
                  required
                  handleChange={handleChange}
                />
              </div>
              <div className="formInput-wrapper half">
                <Input
                  name="zipCode"
                  type="text"
                  placeHolder="Zip Code"
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
              </div>
              <div className="formInput-wrapper">
                <Input
                  name="phone"
                  type="text"
                  placeHolder="Phone Number"
                  required
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={submitOrder}>Continue</button>
            </div>
            {/* </form> */}
          </div>

          <div className="checkout-right">
            <div className="summary-content">
              <div className="table-wrapper">
                <table className="cartItem-table">
                  <caption>Order Summary</caption>
                  <tbody>
                    {cartItems.length ? (
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
                      ))
                    ) : (
                      <tr>
                        <td>0</td>
                      </tr>
                    )}
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

              <div className="services-wrapper"></div>
            </div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Checkout;
