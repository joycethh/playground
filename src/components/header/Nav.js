import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const activeLink = ({ isActive }) => (isActive ? "active" : null);
  return (
    <>
      <div className="nav">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <NavLink to="/jewelry" className={activeLink}>
              <span>Jewelry</span>
            </NavLink>
          </li>
          <div className="sub-nav">
            <div className="dropdown-wrapper">
              <div>
                <h3>Shop by Category</h3>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <NavLink to="">
                      <span className="sub-nav-item">Necklace</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <span className="sub-nav-item">Eearrings</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <span className="sub-nav-item">Rings</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <span className="sub-nav-item">Bracelets</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Shop by Material</h3>
                <ul>
                  <li>
                    <NavLink to="">
                      <span className="sub-nav-item">All Pearls</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <span className="sub-nav-item">Diamonds</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <span className="sub-nav-item">Gold</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <li className="nav-menu-item">
            <NavLink to="/men" className={activeLink}>
              Men's
            </NavLink>
          </li>

          <li className="nav-menu-item">
            <NavLink to="/electronics" className={activeLink}>
              Electronics
            </NavLink>
          </li>
          <li className="nav-menu-item">
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
