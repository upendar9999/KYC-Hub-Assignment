import { useContext, useEffect } from "react";
import Context from "../context/Context";

const useFetchProducts = () => {
  const { setProducts, products } = useContext(Context);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (Object.keys(products).length > 0) return;
      const data = await fetch("https://dummyjson.com/products");
      const json = await data.json();

      setProducts(json.products);
    };
    fetchProductDetails();
  }, []);
};

export default useFetchProducts;
