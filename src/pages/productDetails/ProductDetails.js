import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import useProductData from "../../customHooks/useProductData";
import "./productDetail.scss";

const ProductDetails = () => {
  const { apiData } = useProductData();

  // console.log("apiData in detail", apiData);

  const { id } = useParams();
  console.log(id);

  // eslint-disable-next-line
  const item = apiData?.find((item) => item.id == id);
  // console.log("item", item);

  return (
    apiData && (
      <Badge title="detail">
        <CommonSection />
        <section className="productDetail-section">
          <div className="productDetail">
            <div className="img-wrapper">
              <img src={item.image} alt="" />
            </div>
            <div className="info-wrapper">
              <h2>{item.title}</h2>
              <div className="rating-wrapper">
                <div className="star">
                  <span>
                    <AiFillStar />
                  </span>
                  <p>{item.rating.rate}</p>
                </div>
                <span>({item.rating.count} reviews)</span>
              </div>
              <div className="price-wrapper">
                <span>${item.price}</span>
              </div>

              <div className="des-wrapper">
                <span>{item.description}</span>
              </div>
              <div className="qty">
                <div className="action-wrapper">
                  <button>-</button>
                  <p>2</p>
                  <button>+</button>
                </div>
              </div>
              <div className="addBtn-wrapper">
                <button className="add-btn">add to cart</button>
              </div>
            </div>
          </div>
        </section>
      </Badge>
    )
  );
};

export default ProductDetails;
