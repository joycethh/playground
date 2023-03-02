import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <BrowserRouter>
        <div className={`theme-${isDarkMode ? "dark" : "light"}`}>
          <ToastContainer />
          <Layout />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
