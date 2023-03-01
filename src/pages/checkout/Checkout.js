import React, { useState } from "react";
import Input from "../../components/input/Input";
import "./checkout.scss";
import necklace from "../../assets/necklace.png";
import { FcCustomerSupport } from "react-icons/fc";
import { Link } from "react-router-dom";
const Checkout = () => {
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
    <section>
      <container className="wrapper">
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
          <div className="table-wrapper">
            <table className="table-item-list">
              <caption>Order Summary</caption>
              <tbody className="item-section">
                <tr className="item">
                  <td className="item-img">
                    <div className="item-thumbnail">
                      <div className="img-wrapper">
                        <img src={necklace} alt="" />
                      </div>
                      <span className="item-thumbnail-qty">1</span>
                    </div>
                  </td>
                  <th className="item-description">
                    <span className="item-description-name">
                      Classic Natural Pearl Necklace
                    </span>
                  </th>
                  <td className="item-price">
                    <span className="item-price-number">$99.00</span>
                  </td>
                </tr>

                <tr className="item">
                  <td className="item-img">
                    <div className="item-thumbnail">
                      <div className="img-wrapper">
                        <img src={necklace} alt="" />
                      </div>
                      <span className="item-thumbnail-qty">1</span>
                    </div>
                  </td>
                  <th className="item-description">
                    <span className="item-description-name">
                      Classic Natural Pearl Necklace
                    </span>
                  </th>
                  <td className="item-price">
                    <span className="item-price-number">$99.00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper">
            <table className="table-item-total">
              <tbody>
                <tr>
                  <th className="item-total-name">Subtotal</th>
                  <td colspan="2">
                    <span className="item-total-number">$218.00</span>
                  </td>
                </tr>

                <tr>
                  <th className="item-total-name">Shipping</th>
                  <td colspan="2">
                    <span className="item-total-number">$7.00</span>
                  </td>
                </tr>

                <tr>
                  <th className="item-total-name">Est. Tax</th>
                  <td colspan="2">
                    <span className="item-total-number">$10.00</span>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th className="item-total-name ">Total</th>
                  <td>
                    <span className="item-total-number">$235.00</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="button-wrapper">
            <button onClick={submitOrder}>Place Order</button>
          </div>

          <div className="services-wrapper">
            <div className="title">Need Help?</div>
            <div className="icon">
              <FcCustomerSupport />
              <Link to="/contact-us">contact us</Link>
            </div>
          </div>
        </div>
      </container>
    </section>
  );
};

export default Checkout;
