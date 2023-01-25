import { createContext, useEffect, useState } from "react";

export const darkModeContext = createContext();

export const darkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  const toggle = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggle }}>
      {children}
    </darkModeContext.Provider>
  );
};
