import React from "react";
import "./home.scss";
import { Loader } from "../../components/index";

const Home = () => {
  return (
    <main>
      <section>
        <Loader />
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
