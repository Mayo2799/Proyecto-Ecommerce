import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as ImagenLogo } from "./../../../assets/crown.svg";
import { UsuarioContext } from "./../../../contexts/usuarios";
import { CarritoContext } from "./../../../contexts/carrito";
import { signOutUsuario } from "./../../../utils/firebase/firebase";
import Carrito from "./../../Carrito/Carrito";
import DropdownCarrito from "./../../Carrito/DropdownCarrito/DropdownCarrito";
import "./Navbar.scss";
const Navbar = () => {
  const { usuarioLogueado } = useContext(UsuarioContext);
  const { mostrarCarrito } = useContext(CarritoContext);
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">
          <ImagenLogo />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/tienda">
            Tienda
          </Link>
          {usuarioLogueado ? (
            <span className="navbar-link" onClick={signOutUsuario}>
              Salir
            </span>
          ) : (
            <Link className="navbar-link" to="/acceder">
              Acceder
            </Link>
          )}
          <Carrito />
        </div>
        {mostrarCarrito && <DropdownCarrito />}
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
