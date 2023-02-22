import React from "react";
import "./home.scss";
import { Loader } from "../../components/index";
import banner from "../../assets/banner.png";
import ProductList from "../../components/ui/ProductList";

const Home = () => {
  return (
    <main>
      <main>
        {/* <Loader /> */}
        <section className="hero-section">
          <div className="banner-wrapper">
            <img src={banner} alt="" />
          </div>
        </section>
        <section className="products-section">
          <ProductList />
        </section>
      </main>
    </main>
  );
};

export default Home;
