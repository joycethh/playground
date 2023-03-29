import React from "react";
import { ImageWithOverlayButton } from "../../components/button/Button";
import jeweleryCategory from "../../assets/imgBtn-jewelry.jpg";
import womenCategory from "../../assets/imgBtn-women.jpg";
import electronic from "../../assets/imgBtn-electronics.jpg";
import "./categories.scss";

const categories = [
  {
    title: "jewelry",
    subtitle: "Classic designs for daily and up wears. ",
    imgUrl: jeweleryCategory,
  },

  {
    title: "women's clothing",
    subtitle: "Stylish and comfortable mordern finery. ",
    imgUrl: womenCategory,
  },
  {
    title: "electronics",
    subtitle: "Powerful high tech products in mordern styles. ",
    imgUrl: electronic,
  },
];

const Categories = () => {
  return (
    <div className="mt-15">
      <div className="grid-container">
        {categories.map((item, idx) => (
          <div key={idx}>
            <div className="img-title">
              <ImageWithOverlayButton
                imageSrc={item.imgUrl}
                path={`/products/${item.title}`}
                buttonLabel={`Shop ${item.title}`}
              />
              <h3>{item.title}</h3>
            </div>
            <div className="subtitle">
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
