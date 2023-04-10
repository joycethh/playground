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
  Jewelry,
  Electronics,
  Women,
  Men,
  Payment,
} from "../pages/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/products/:category" element={<ProductsPage />} /> */}
      <Route path="/products/jewelry" element={<Jewelry />} />
      <Route path="/products/electronics" element={<Electronics />} />
      <Route path="/products/women's clothing" element={<Women />} />
      <Route path="/products/men's clothing" element={<Men />} />
      <Route path="/product/:id" element={<ProductDetails />} />
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
      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<Reset />} />
    </Routes>
  );
};

export default Routers;
