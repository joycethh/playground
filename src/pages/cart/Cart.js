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
            <div className="table-wrapper">
              <table className="table-item-total">
                <tbody>
                  <tr>
                    <th className="item-total-name">Subtotal</th>
                    <td colSpan="2">
                      <span className="item-total-number">$218.00</span>
                    </td>
                  </tr>

                  <tr>
                    <th className="item-total-name">Shipping</th>
                    <td colSpan="2">
                      <span className="item-total-number">$7.00</span>
                    </td>
                  </tr>

                  <tr>
                    <th className="item-total-name">Est. Tax</th>
                    <td colSpan="2">
                      <span className="item-total-number">$10.00</span>
                    </td>
                  </tr>
                </tbody>

                <tfoot>
                  <td className="item-total-name total-line">Total</td>
                  <td>
                    <span className="item-total-number total-line">
                      $235.00
                    </span>
                  </td>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Cart;
