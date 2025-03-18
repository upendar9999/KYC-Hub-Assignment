import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsToCompare, setProductsToCompare] = useState([]);

  return (
    <Context.Provider
      value={{ products, setProducts, productsToCompare, setProductsToCompare }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
