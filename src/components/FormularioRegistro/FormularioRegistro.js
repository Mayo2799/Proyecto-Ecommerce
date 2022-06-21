import { useState } from "react";
import {
  createUserWithEmailPasswordForFirestore,
  crearDocumentoUsuarios,
} from "./../../utils/firebase/firebase";
import {
  mostrarAlerta,
  errorAutenticacion,
} from "../../utils/sweetalert2/sweetalert2";
import Input from "../../layouts/Input/Input";
import Button from "../../layouts/Button/Button";
const FormularioRegistro = () => {
  const datosFormulario = {
    nombre: "",
    correo: "",
    contrasenia: "",
    confirmarContrasenia: "",
  };
  const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
  const { nombre, correo, contrasenia, confirmarContrasenia } =
    camposFormulario;
  const inputs = [
    {
      label: "Nombre: ",
      type: "text",
      name: "nombre",
      value: nombre,
      placeholder: "Nombre",
    },
    {
      label: "Correo: ",
      type: "email",
      name: "correo",
      value: correo,
      placeholder: "Correo",
    },
    {
      label: "Contraseña: ",
      type: "password",
      name: "contrasenia",
      value: contrasenia,
      placeholder: "Contraseña",
    },
    {
      label: "Repetir contraseña: ",
      type: "password",
      name: "confirmarContrasenia",
      value: confirmarContrasenia,
      placeholder: "Repetir contraseña",
    },
  ];
  const handleOnSubmit = async (evento) => {
    evento.preventDefault();
    console.log("Formulario enviado");
    if (contrasenia !== confirmarContrasenia) {
      errorAutenticacion("contrasenia-no-coincide");
      return;
    }
    try {
      const { user } = await createUserWithEmailPasswordForFirestore(
        correo,
        contrasenia
      );
      crearDocumentoUsuarios(user, { nombre: nombre });
      mostrarAlerta("Ok!", "Usuario creado con éxito", "success");
      setCamposFormulario(datosFormulario);
    } catch (error) {
      console.log(error.code);
      errorAutenticacion(error.code);
      setCamposFormulario(datosFormulario);
    }
  };
  const handleOnChange = (evento) => {
    const { name, value } = evento.target;
    setCamposFormulario({ ...camposFormulario, [name]: value });
  };
  return (
    <div style={{ width: "30%" }}>
      <h2 style={{ marginBottom: "30px" }}>Registrarse</h2>
      <form onSubmit={handleOnSubmit} action="">
        {inputs.map(({ label, type, name, value, placeholder }, id) => (
          <Input
            key={id}
            label={label}
            type={type}
            onChange={handleOnChange}
            name={name}
            value={value}
            required={true}
            placeholder={placeholder}
          />
        ))}
        <Button type={"submit"} text={"Registrarse"} />
      </form>
    </div>
  );
};
export default FormularioRegistro;
