import { useState, createContext, useEffect } from "react";
//import { Navigate } from "react-router-dom";
import { onAuthStateChangedListener } from "./../utils/firebase/firebase";
export const UsuarioContext = createContext({
  usuarioLogueado: null,
  setUsuarioLogueado: () => null,
});
export const UsuarioProvider = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const value = { usuarioLogueado, setUsuarioLogueado };
  useEffect(() => {
    onAuthStateChangedListener((usuario) => {
      setUsuarioLogueado(usuario);
    });
    // if (usuario) {
    //   <Navigate to="/" replace={true}/>;
    // }
  }, []);
  return (
    <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
  );
};
