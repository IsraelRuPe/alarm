// Inicializa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBBLu0UzOW8yCK-1l9l_36VwoYNiTxhPI0",
    authDomain: "alarma-3442f.firebaseapp.com",
    projectId: "alarma-3442f",
    storageBucket: "alarma-3442f.appspot.com",
    messagingSenderId: "1096882053831",
    appId: "1:1096882053831:web:926f581294062e824014e2"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usuariosCollection = collection(db, "safety_users");
//Crear usuario en firebase
document.getElementById("guardarBtn").addEventListener("click", () => {
  const position = document.getElementById("position").value;
  const employee = document.getElementById("employee").value;
  const name = document.getElementById("name").value;
  const surnames = document.getElementById("surnames").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const number = document.getElementById("number").value;
  addDoc(usuariosCollection, {
    position,
    employee,
    name,
    surnames,
    email,
    password,
    number
  })
  .then(() => {
    alert("Usuario creado con éxito.");
    // Limpia el formulario
   location.reload();
  })
    .catch(error => {
      console.error("Error al crear el usuario:", error);
    });
});
