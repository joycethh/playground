// import ProtectedRoute from "./ProtectedRoute";
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
} from "../pages/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/products/:category" element={<ProductsPage />} /> */}
      <Route path="/jewelry" element={<Jewelry />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/women's clothing" element={<Women />} />
      <Route path="/men's clothing" element={<Men />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          // <ProtectedRoute>
          <Checkout />
          // </ProtectedRoute>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<Reset />} />
    </Routes>
  );
};

export default Routers;
