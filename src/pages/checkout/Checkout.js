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
          {/* <h2>Order Summary</h2> */}

          <div className="table-wrapper">
            <table className="table-latitute">
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
                  <td className="item-name">Classic Natural Pearl Necklace</td>
                  <td className="item-price">$99.00</td>
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
                  <td className="item-name">Classic Natural Pearl Necklace</td>
                  <td className="item-price">$99.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Subtotal</th>
                  <td></td>
                  <td>$218.00</td>
                </tr>

                <tr>
                  <th>Shipping</th>
                  <td></td>
                  <td>$7.00</td>
                </tr>

                <tr>
                  <th>Tax</th>
                  <td></td>
                  <td>$10.00</td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td></td>
                  <td>$235.00</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="services-wrapper">
            <div>Need Help?</div>
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
