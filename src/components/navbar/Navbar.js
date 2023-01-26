import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { CiDark, CiCircleList } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineSearch, HiOutlineLightBulb } from "react-icons/hi";
import { DarkModeContext } from "../../context/darkModeContext";
import "./style.scss";

const Navbar = () => {
  const { toggle, isDarkMode } = useContext(DarkModeContext);
  // const [currentUser, setCurrentUser] = useState(false);
  return (
    <header>
      <div className="navbar">
        <div className="left">
          <Link to="/">
            Sea<span>Shell</span>
          </Link>
        </div>

        <div className="nav">
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/best-sellers">Best Sellers</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="right">
          <Link to="/login">
            <BiUser />
          </Link>
          <Link to="/cart">
            <CgShoppingBag />
          </Link>
          <Link to="/order-history">
            <CiCircleList />
          </Link>
          <HiOutlineSearch />
          <span onClick={toggle}>
            {isDarkMode ? <HiOutlineLightBulb /> : <CiDark />}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
