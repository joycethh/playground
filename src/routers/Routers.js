import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Contact,
  Admin,
  Cart,
  Auth,
  Reset,
  Checkout,
  ProductDetails,
  Shop,
} from "../pages/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
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
