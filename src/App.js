import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import Routers from "./routers/Routers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <BrowserRouter>
        <div className={`theme-${isDarkMode ? "dark" : "light"}`}>
          <ToastContainer />
          <Navbar />
          <Routers />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
