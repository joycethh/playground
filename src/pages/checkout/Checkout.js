import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Input from "../../components/input/Input";
import "./checkout.scss";
import Badge from "../../components/badge/Badge";
import OrderSummary from "./OrderSummary";
import { LinkButton } from "../../components/button/Button";
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

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit order button clicked");
  };

  return (
    <Badge title="Checkout">
      <section className="checkout-section">
        <div className="checkout-container">
          <div className="checkout-left mb-3">
            <Link to="/cart" className="returnLink">
              <MdKeyboardArrowLeft /> Return to Cart
            </Link>
            <div className="toggleSummary">
              <button
                className="toggle"
                onClick={() => setOpen((prev) => !prev)}
              >
                <div className="icon-wrapper">
                  <MdOutlineShoppingCart />
                </div>
                <span>Show Order Summary</span>
              </button>
              <div className="total">
                <span>
                  $
                  {Math.round((itemSubtotal * 1.08 + Number.EPSILON) * 100) /
                    100}
                </span>
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
              <form onSubmit={submitForm} className="shippingForm">
                <div className="half">
                  <Input
                    name="firstName"
                    type="text"
                    placeHolder="First Name"
                    autoFocus
                    required
                    handleChange={handleChange}
                    className="form-addressInput"
                  />
                  <Input
                    name="lastName"
                    type="text"
                    placeHolder="Last Name"
                    required
                    handleChange={handleChange}
                    className="form-addressInput"
                  />
                </div>

                <Input
                  name="streetAddress"
                  type="text"
                  placeHolder="Street Address"
                  required
                  handleChange={handleChange}
                  className="form-addressInput"
                />
                <div className="half">
                  <Input
                    name="city"
                    type="text"
                    placeHolder="City"
                    required
                    handleChange={handleChange}
                    className="form-addressInput"
                  />

                  <Input
                    name="state"
                    type="text"
                    placeHolder="State"
                    required
                    handleChange={handleChange}
                    className="form-addressInput"
                  />
                </div>
                <div className="half">
                  <Input
                    name="zipCode"
                    type="text"
                    placeHolder="Zip Code"
                    required
                    handleChange={handleChange}
                    className="form-addressInput"
                  />
                  <Input
                    name="country"
                    type="text"
                    placeHolder="Country"
                    required
                    handleChange={handleChange}
                    className="form-addressInput"
                  />
                </div>

                <Input
                  name="phone"
                  type="text"
                  placeHolder="Phone Number"
                  required
                  handleChange={handleChange}
                  className="form-addressInput"
                />
              </form>

              <div className="auth-btn mt-15">
                <LinkButton
                  onClick={submitForm}
                  name="Continue"
                  path="/payment"
                  className="checkout-btn"
                />
              </div>
            </div>
          </div>

          <div className="checkout-right mb-3">
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
