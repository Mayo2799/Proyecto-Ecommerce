import { createContext, useState } from "react";
import listOfProducts from "./../data.json";
export const ProductosContext = createContext({
  productos: [],
});
export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState(listOfProducts);
  const value = { productos };
  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
};
