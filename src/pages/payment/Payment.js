import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import OrderSummary from "../checkout/OrderSummary";
import Badge from "../../components/badge/Badge";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./payment.scss";

const Payment = () => {
  const [product] = useState({
    name: "Product Name",
    price: 9.99,
    description: "Product Description",
  });

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleToken = async (token) => {
    const response = await fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        product,
        cart,
        total,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Badge title="Payment">
      <section className="payment-section">
        <div className="payment-container">
          <div className="payment-left mb-3">
            <Link to="/cart" className="returnLink">
              <MdKeyboardArrowLeft /> Return to Shipping
            </Link>

            <div className="header-wrapper">
              <h1>Stripe Payment</h1>
            </div>

            <div className="stripe">
              <StripeCheckout
                stripeKey="<your_stripe_publishable_key>"
                token={handleToken}
                amount={total * 100}
                name={product.name}
                description={product.description}
                currency="USD"
              >
                <div className="submit-btn">
                  <Button name="Place an Order" />
                </div>
              </StripeCheckout>
            </div>
          </div>

          <div className="payment-right mb-3">
            <div className="summary-content">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Payment;
