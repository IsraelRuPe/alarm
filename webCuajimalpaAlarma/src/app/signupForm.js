import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js ";
import { showMessage } from "./showMessage.js";
const signupForm = document.querySelector("#signup-form");
const wrapper = document.querySelector(".wrapper");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = signupForm["signup-name"].value;
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  console.log(name, email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    //cerrar el modal de registro

    /*wrapper.classList.remove('active_popup');*/
    wrapper.classList.remove("active");

    showMessage("Welcome " + userCredentials.user.email);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showMessage("El email ya existe", "error");
    } else if (error.code === "auth/invalid-email") {
      showMessage("Correo Invalido", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("Contraseña vulnerable", "error");
    } else if (error.code) {
      showMessage("Algo salio mal", "error");
    }
  }
});
