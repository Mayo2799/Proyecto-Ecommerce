import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "./../../../contexts/carrito";
import Button from "./../../../layouts/Button/Button";
import { ItemsCarrito } from "./ItemsCarrito/ItemsCarrito";
import "./DropdownCarrito.scss";
const DropdownCarrito = () => {
  const { itemsCarrito, setMostrarCarrito, mostrarCarrito } =
    useContext(CarritoContext);
  let navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/pagar");
    setMostrarCarrito(!mostrarCarrito);
  };
  return (
    <div className="contenedor-dropdown">
      <div className="items-carrito">
        {itemsCarrito.length > 0 ? (
          itemsCarrito.map((item) => {
            return <ItemsCarrito key={item.id} item={item} />;
          })
        ) : (
          <h3>No hay items</h3>
        )}
      </div>
      {itemsCarrito.length > 0 && (
        <Button type="button" text="Pagar" onClick={handleOnclick} />
      )}
    </div>
  );
};
export default DropdownCarrito;
