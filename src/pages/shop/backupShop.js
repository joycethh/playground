import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CommonSection from "../../components/ui/CommonSection";
import Badge from "../../components/badge/Badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./shop.scss";
import { useOnHoverOutside } from "../../customHooks/useOnHoverOutside";

const Shop = () => {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <Badge title="shop">
      <CommonSection title="product" />
      <section>
        <div className="filterSection-container">
          <div className="filterSection-wrapper">
            <div className="options-container">
              <div
                id="productType"
                className="option-wrapper"
                ref={dropdownRef}
              >
                <div className="optionHeader">Product Type</div>
                <div className="icon-wrapper">
                  <RiArrowDropDownLine
                    onMouseOver={() => setMenuDropDownOpen(true)}
                  />
                </div>
                {isMenuDropDownOpen && (
                  <div className="selectBody">
                    <div className="select-wrapper">
                      <Link to="/jewelry">Jewelry</Link>
                    </div>
                    <div className="select-wrapper">
                      <Link to="/electronic">electronic</Link>
                    </div>

                    <div className="select-wrapper">
                      <Link to="/men">Men</Link>
                    </div>
                    <div className="select-wrapper">
                      <Link to="/women">Women</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="sort-container">sort section</div>
          </div>
        </div>
      </section>
    </Badge>
  );
};

export default Shop;

// css hoverable dropdown menu
// import React, { useState, useEffect } from "react";
// import CommonSection from "../../components/ui/CommonSection";
// import Badge from "../../components/badge/Badge";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import "./shop.scss";
// import { menuItems } from "./menuItems";
// import Dropdown from "./Dropdown";

// import ProductCard from "../../components/ui/ProductCard";

// const Shop = () => {
//   const [apiData, setApiData] = useState();

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setApiData(json));
//   }, []);

//   const filltered =
//     apiData && apiData.filter((item) => item.category === "jewelery");

//   return (
//     <Badge title="shop">
//       <CommonSection title="product" />
//       <section>
//         <div className="filterSection-container">
//           <div className="filterBy-wrapper">Filter By:</div>
//           <div className="filterSection-wrapper">
//             {menuItems.map((item, idx) => (
//               <div className="option-wrapper" key={idx}>
//                 <button className="optionHeader-btn">
//                   {item.title}
//                   <RiArrowDropDownLine />
//                 </button>
//                 <Dropdown submenu={item.submenu} />
//               </div>
//             ))}
//             <div className="sort-container">sort section</div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="flex-grid">
//           {filltered &&
//             filltered.map((item, key) => <ProductCard item={item} key={key} />)}
//         </div>
//       </section>
//     </Badge>
//   );
// };

// export default Shop;
