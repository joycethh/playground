import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
// import { Loader } from "../../components/index";
import Badge from "../../components/badge/Badge";
import banner from "../../assets/banner.png";
import ProductList from "../../components/ui/ProductList";
import useProductData from "../../customHooks/useProductData";

const Home = () => {
  const { apiData } = useProductData();
  console.log("apiData in home", apiData);
  return (
    <Badge title={"Home"}>
      <main>
        {/* <Loader /> */}
        <section className="hero-section">
          <div className="banner-wrapper">
            <img src={banner} alt="" />
            <div className="caption">
              <span>Aqua treasures are waiting for you</span>
              <h2>Adorn yourself with the natural beauty of pearls</h2>
              <p>
                These treasures of the water and ocean exude elegance and
                sophistication, lending a touch of glamour to any outfit.
              </p>

              <div className="shop-now">
                <button>
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="products-section">
          <ProductList data={apiData} />
        </section>
      </main>
    </Badge>
  );
};

export default Home;
