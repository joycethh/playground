import React from "react";
import "./home.scss";
// import { Loader } from "../../components/index";
import Badge from "../../components/badge/Badge";
import Categories from "./Categories";
import { LinkButton } from "../../components/button/Button";
import FeaturedProducts from "./FeaturedProduct";

const Home = () => {
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
                    <LinkButton name="Shop Jewelry" path="/jewelry" />
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

        <section className="product-lists">
          <FeaturedProducts />
        </section>
      </main>
    </Badge>
  );
};

export default Home;
