import Swal from "sweetalert2";
// export const mostrarToast = (mensaje) => {
//   Swal.fire({
//     text: mensaje,
//     target: ".toast",
//     customClass: {
//       container: "position-absolute",
//     },
//     toast: true,
//     position: "bottom-right",
//   });
// };
export const mostrarAlerta = (titulo, mensaje, icono) => {
  Swal.fire(titulo, mensaje, icono);
};
export const errorAutenticacion = (codigo) => {
  switch (codigo) {
    case "auth/weak-password":
      Swal.fire(
        "Error",
        "La contraseña debe de tener más de 6 caracteres",
        "warning"
      );
      break;
    case "contrasenia-no-coincide":
      Swal.fire("Error", "Las contraseñas no coinciden", "warning");
      break;
    case "auth/user-not-found":
      Swal.fire("Error", "El usuario no se encuentra registrado", "error");
      break;
    default:
      Swal.fire("Error", "Hubo un problema registrando el usuario", "error");
      break;
  }
};
