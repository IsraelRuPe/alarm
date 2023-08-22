import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const wrapper = document.querySelector(".wrapper");

const signInForm = document.querySelector("#login_form");
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signInForm["login_email"].value;
  const password = signInForm["login_password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    wrapper.classList.remove("active_popup");
    document
      .getElementById("name_user")
      .setAttribute("value", credentials.user.email);
      window.location.href = "../../index.html";
    showMessage("Bienvenido " + credentials.user.email);
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Contraseña Incorrecta", "error");
    } else if (error.code === "auth/user-not-found") {
      showMessage("Usuario no encontrado", "error");
    } else {
      showMessage(error.message, "error");
    }
  }
});
