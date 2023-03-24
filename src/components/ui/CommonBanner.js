// import React from "react";
// import "./commonSection.scss";
// const commonSection = ({ title }) => {
//   return (
//     <section className="common-section">
//       <div>
//         <h1>{title}</h1>
//       </div>
//     </section>
//   );
// };

// export default commonSection;

import React from "react";
import "./commonBanner.scss";
const CommonBanner = ({ imageUrl, title }) => {
  return (
    <section className="commonBanner-section">
      <div className="banner">
        <img className="banner-image" src={imageUrl} alt="" />
        <div className="banner-title">
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
