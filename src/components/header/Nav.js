import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const activeLink = ({ isActive }) => (isActive ? "active" : null);
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/jewelry" className={activeLink}>
              Jewelry
            </NavLink>
          </li>
          <div className="sub-nav">
            <div className="inner">
              <div>
                <h3>Shop by Category</h3>
                <ul>
                  <li>
                    <NavLink to="">Necklace</NavLink>
                    <span className="sub-nav-item">Necklace</span>
                  </li>
                  <li>
                    <NavLink to="">Necklace</NavLink>
                    <span className="sub-nav-item">Eearrings</span>
                  </li>
                  <li>
                    <NavLink to="">Necklace</NavLink>
                    <span className="sub-nav-item">Rings</span>
                  </li>
                  <li>
                    <NavLink to="">Necklace</NavLink>
                    <span className="sub-nav-item">Bracelets</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Shop by Material</h3>
                <ul>
                  <li>
                    <NavLink to="">All Pearls</NavLink>
                    <span className="sub-nav-item">All Pearls</span>
                  </li>
                  <li>
                    <NavLink to="">Diamonds</NavLink>
                    <span className="sub-nav-item">Diamonds</span>
                  </li>
                  <li>
                    <NavLink to="">Gold</NavLink>
                    <span className="sub-nav-item">Gold</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <li>
            <NavLink to="/men" className={activeLink}>
              Men's
            </NavLink>
          </li>

          <li>
            <NavLink to="/electronics" className={activeLink}>
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to="/gift card" className={activeLink}>
              Gift Card
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
