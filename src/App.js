import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import { Home, Contact, Admin, Cart, NewArrivals } from "./pages/index";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <BrowserRouter>
        <div className={`theme-${isDarkMode ? "dark" : "light"}`}>
          <Navbar />
          <Routes>
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
