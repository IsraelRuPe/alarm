import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const googleButton = document.querySelector("#googleLogin");

const wrapper = document.querySelector(".wrapper");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);

    wrapper.classList.remove("active_popup");
    showMessage("Bienvenido " + credentials.user.displayName, "success");
  } catch (error) {
    console.log(error);
  }
});
