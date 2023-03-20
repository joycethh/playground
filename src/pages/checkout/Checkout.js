import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Input from "../../components/input/Input";
import "./checkout.scss";
import Badge from "../../components/badge/Badge";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  const { itemSubtotal } = useSelector((state) => state.cart);
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

  const [open, setOpen] = useState(false);

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
            <Link to="/cart">
              <MdKeyboardArrowLeft /> Return to Cart
            </Link>
            <div className="toggleSummary">
              <button
                className="toggle"
                onClick={() => setOpen((prev) => !prev)}
              >
                <MdOutlineShoppingCart /> Show order summary
              </button>
              <div className="total">
                $
                {Math.round((itemSubtotal * 1.08 + Number.EPSILON) * 100) / 100}
              </div>
            </div>
            {open && (
              <div className="mobile-summary-content">
                <OrderSummary />
              </div>
            )}

            <div className="header-wrapper">
              <h1>Shipping Address</h1>
            </div>

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
          </div>

          <div className="checkout-right">
            <div className="summary-content">
              <OrderSummary />

              <div className="services-wrapper"></div>
            </div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Checkout;
