import { useState } from "react";
import {
  signInWithGooglePopup,
  crearDocumentoUsuarios,
  signInWithEmailPasswordForFirestore,
} from "./../../utils/firebase/firebase";
import { errorAutenticacion } from "./../../utils/sweetalert2/sweetalert2";
import Input from "./../../layouts/Input/Input";
import Button from "./../../layouts/Button/Button";
const FormularioAcceso = () => {
  const datosFormulario = {
    correo: "",
    contrasenia: "",
  };
  const loguear = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    crearDocumentoUsuarios(user);
  };
  const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
  const { correo, contrasenia } = camposFormulario;
  const inputs = [
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
  ];
  const handleOnChange = (evento) => {
    const { name, value } = evento.target;
    setCamposFormulario({ ...camposFormulario, [name]: value });
  };
  const handleOnSubmit = async (evento) => {
    evento.preventDefault();
    console.log("Formulario enviado");
    try {
      await signInWithEmailPasswordForFirestore(correo, contrasenia);
      setCamposFormulario(datosFormulario);
    } catch (error) {
      errorAutenticacion(error.code);
      setCamposFormulario(datosFormulario);
    }
  };
  return (
    <div style={{ width: "30%" }}>
      <h2 style={{ marginBottom: "30px" }}>Acceder</h2>
      <form onSubmit={handleOnSubmit}>
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
        <div>
          <Button type={"submit"} text={"Acceder"} />
          <Button onClick={loguear} text={"Acceder con cuenta de Google"} />
        </div>
      </form>
    </div>
  );
};
export default FormularioAcceso;
