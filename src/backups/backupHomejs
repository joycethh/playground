import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
// import { Loader } from "../../components/index";
import Badge from "../../components/badge/Badge";
import ProductList from "../../components/ui/ProductList";
import useProductData from "../../customHooks/useProductData";
import Categories from "./Categories";
import { LinkButton } from "../../components/button/Button";
import FeaturedProducts from "./FeaturedProduct";

const Home = () => {
  const { apiData } = useProductData();
  // console.log("apiData in home", apiData);
  return (
    <Badge title={"Home"}>
      <main>
        {/* <Loader /> */}
        <section className="hero-section">
          <div className="banner-wrapper">
            <div className="flex-container">
              <div className="left">
                <div className="caption">
                  <span>Aqua treasures are waiting for you</span>
                  <h2>Adorn yourself with the natural beauty of pearls</h2>
                  <div className="shop-now">
                    {/* <button>
                      <Link to="/shop">Shop Now</Link>
                    </button> */}
                    <LinkButton name="Shop Now" path="/shop" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section className="categories-section">
          <Categories />
        </section>
        {/* <section className="products-section">
          <ProductList data={apiData} />
        </section> */}
        <section className="product-lists">
          <FeaturedProducts />
        </section>
      </main>
    </Badge>
  );
};

export default Home;
