import React from "react";
import "./commonSection.scss";
const commonSection = ({ title }) => {
  return (
    <section className="common-section">
      <div>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default commonSection;
