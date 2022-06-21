import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ImagenLogo } from "./../../../assets/crown.svg";
import "./Navbar.scss";
const Navbar = () => {
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
          <Link className="navbar-link" to="/acceder">
            Acceder
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
