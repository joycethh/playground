import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import CommonBanner from "../../components/ui/CommonBanner";
import Badge from "../../components/badge/Badge";
import useProductData from "../../customHooks/useProductData";
import "./productDetail.scss";
import { ADD_TO_CART } from "../../redux/feature/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { apiData } = useProductData();
  const dispatch = useDispatch();
  const { id } = useParams();

  // eslint-disable-next-line
  const item = apiData?.find((item) => item.id == id);
  // console.log("item", item.rating);

  const addItem = () => {
    dispatch(
      ADD_TO_CART({
        id: item.id,
        productName: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };

  return (
    apiData && (
      <Badge title="detail">
        <CommonBanner title={item.title} />
        <section className="productDetail-section">
          <div className="productDetail">
            <div className="img-wrapper">
              <img src={item.image} alt="" />
            </div>

            <div className="info-wrapper">
              <h2>{item.title}</h2>
              <div className="rating-wrapper">
                <AiFillStar />
                <p>{item.rating.rate}</p>
                <span>({item.rating.count} reviews)</span>
              </div>
              <div className="price-wrapper">
                <span>${item.price}.00</span>
              </div>

              <div className="des-wrapper">
                <span>{item.description}</span>
              </div>
              {/* <div className="qty">
                <div className="action-wrapper">
                  <button>-</button>
                  <p>2</p>
                  <button>+</button>
                </div>
              </div> */}
              <div className="addBtn-wrapper">
                <button className="add-btn" onClick={addItem}>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </Badge>
    )
  );
};

export default ProductDetails;
