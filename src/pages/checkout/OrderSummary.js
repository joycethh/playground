import React from "react";
import { useSelector } from "react-redux";
import "./orderSummary.scss";

const OrderSummary = () => {
  const { cartItems, itemSubtotal } = useSelector((state) => state.cart);
  return (
    <div className="tables">
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
                    <span className="itemTotalPrice">{item.totalPrice}</span>
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
                <span className="totalHeader">Shipping</span>
              </th>
              <td colSpan="2">
                <span className="totalNumber">$0.00</span>
              </td>
            </tr>

            <tr>
              <th>
                <span className="totalHeader">Est. Tax</span>
              </th>
              <td colSpan="2">
                <span className="totalNumber">
                  $
                  {Math.round((itemSubtotal * 0.08 + Number.EPSILON) * 100) /
                    100}
                </span>
              </td>
            </tr>

            <tr>
              <th className="total-line">Total</th>
              <td>
                <span className="totalNumber total-line">
                  $
                  {Math.round((itemSubtotal * 1.08 + Number.EPSILON) * 100) /
                    100}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
