import React from "react";
import "./home.scss";
import Loader from "../../components/loader/Loader";

const Home = () => {
  return (
    <main>
      <section>
        <div className="loader">
          <Loader />
        </div>
        <div className="flex-grid">
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
          <div className="col">one</div>
        </div>
      </section>
    </main>
  );
};

export default Home;
