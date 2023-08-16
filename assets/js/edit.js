// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// // Inicializa Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBBLu0UzOW8yCK-1l9l_36VwoYNiTxhPI0",
//   authDomain: "alarma-3442f.firebaseapp.com",
//   projectId: "alarma-3442f",
//   storageBucket: "alarma-3442f.appspot.com",
//   messagingSenderId: "1096882053831",
//   appId: "1:1096882053831:web:926f581294062e824014e2"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Obtén la colección y muestra los datos
// const usuariosRef = collection(db, 'usuarios');

// getDocs(usuariosRef)
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {

//       position,
//     employee,
//     name,
//     surnames,
//     email,
//     password,
//     number
//       const data = doc.data();
//       const name = data.name;
//       const surnames = data.surnames;
//       const correo = data.email;


//       const fila = "<tr><td>" + nombre + "</td><td>" + edad + "</td><td>" + correo + "</td></tr>";
//       document.getElementById("tablaDatos").getElementsByTagName('tbody')[0].innerHTML += fila;
//     });
//   })
//   .catch((error) => {
//     console.error("Error getting documents: ", error);
//   });

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// Inicializa Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBLu0UzOW8yCK-1l9l_36VwoYNiTxhPI0",
  authDomain: "alarma-3442f.firebaseapp.com",
  projectId: "alarma-3442f",
  storageBucket: "alarma-3442f.appspot.com",
  messagingSenderId: "1096882053831",
  appId: "1:1096882053831:web:926f581294062e824014e2"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtén la colección y muestra los datos
const usuariosRef = collection(db, 'usuarios');

getDocs(usuariosRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const employee = data.employee;
      const nombre = data.name;
      const surnames = data.surnames;
      const correo = data.email;
      const number = data.number;
      const cargo = data.position

      // const fila = "<tr><td>" + nombre + "</td><td>" + employee + "</td><td>" + correo + "</td></tr>" + number + "</td></tr>";
      // document.getElementById("tablaDatos").getElementsByTagName('tbody')[0].innerHTML += fila;

      // Aquí puedes hacer lo que quieras con los datos, como agregarlos a una tabla
      console.log("id:",);
      console.log("Nombre:", nombre, surnames);
      console.log("num. Empleado:", employee);
      console.log("Correo: ", correo);
      console.log("number:", number);
      console.log("Puesto", cargo)

      const fila = `<tr><td>${id}</td><td>${employee}</td><td>${cargo}</td><td>${nombre} ${surnames}</td><td>${correo}</td><td>${number}</td></tr>`;
      document.getElementById("tablaDatos").getElementsByTagName('tbody')[0].innerHTML += fila;
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });