import ProtectedRoute from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Contact,
  Admin,
  Cart,
  NewArrivals,
  BestSellers,
  Auth,
  Reset,
  Checkout,
} from "../pages/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/best-sellers" element={<BestSellers />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<Reset />} />
    </Routes>
  );
};

export default Routers;
