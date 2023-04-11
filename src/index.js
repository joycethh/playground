import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
