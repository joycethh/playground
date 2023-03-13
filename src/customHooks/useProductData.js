import { useState, useEffect } from "react";

const useProductData = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  }, []);
  // console.log("apiData", apiData);
  return { apiData };
};

export default useProductData;
