import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBKG1Y9uG77eIR0sgAyPh7JlKpCV92EGCI",
  authDomain: "ecommerce-6dfd2.firebaseapp.com",
  projectId: "ecommerce-6dfd2",
  storageBucket: "ecommerce-6dfd2.appspot.com",
  messagingSenderId: "781571127302",
  appId: "1:781571127302:web:2c21a3e07c0cb14edd6b87",
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
export const db = getFirestore();
export const crearDocumentoUsuarios = async (usuario, informacionAdicional) => {
  if (!usuario) return;
  const usuarioDocRef = doc(db, "usuarios", usuario.uid);
  const usuarioSnapshot = await getDoc(usuarioDocRef);
  if (!usuarioSnapshot.exists()) {
    const { displayName: nombre, email } = usuario;
    const fecha_creacion = new Date();
    try {
      setDoc(usuarioDocRef, {
        nombre,
        email,
        fecha_creacion,
        ...informacionAdicional,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return usuarioDocRef;
};
export const createUserWithEmailPasswordForFirestore = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInWithEmailPasswordForFirestore = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
