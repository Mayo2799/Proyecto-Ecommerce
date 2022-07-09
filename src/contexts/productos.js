import { createContext, useState } from "react";
import listaProductos from "./../data.json";
export const ProductosContext = createContext({
  productos: [],
});
export const ProductosProvider = ({ children }) => {
  const [productos] = useState(listaProductos);
  const value = { productos };
  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
};
