//Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
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
const safety_users = collection(db, 'safety_users');

document.addEventListener("DOMContentLoaded", function () {
//Recolectra datos de firebase 
getDocs(safety_users)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      const employee = data.employee;
      const nombre = data.name;
      const surnames = data.surnames;
      const correo = data.email;
      const number = data.number;
      const cargo = data.position

      console.log("id:", id);
      console.log("Nombre:", nombre, surnames);
      console.log("num. Empleado:", employee);
      console.log("Correo: ", correo);
      console.log("number:", number);
      console.log("Puesto", cargo)

      //filas de la tabla
      const fila = `<tr>
      <td>${employee}</td>
      <td>${cargo}</td>
      <td>${nombre} ${surnames}</td>
      <td>${correo}</td>
      <td>${number}</td>
      <td>
      <button type="button" data-id="${id}"  id="editar" class="btn btn-outline-info" data-bs-target="#exampleModal" data-bs-toggle="modal" title="Editar"><i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" data-id="${id}" id="borrar" class="btn btn-outline-danger" title="Eliminar"><i class="bi bi-trash"></i></button>
      </td>
    </tr>`;
      document.getElementById("tablaDatos").getElementsByTagName('tbody')[0].innerHTML += fila;
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
  document.getElementById("tablaDatos").addEventListener("click", function(event) {
    const target = event.target;
    
    if (target.matches("#editar")) {
      // Encuentra la fila que contiene el botón de editar
      const fila = target.closest("tr");
      
      // Obtén el ID del usuario de la fila
      const userId = fila.getAttribute("data-id");
      
      // Busca los datos del usuario en Firestore usando el ID
      const userDocRef = doc(db, "safety_users", userId);
      
      getDocs(userDocRef).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          document.getElementById("position").value = data.position;
          document.getElementById("employee").value = data.employee;
          document.getElementById("name").value = data.name;
          document.getElementById("surnames").value = data.surnames;
          document.getElementById("email").value = data.email;
          document.getElementById("number").value = data.number;
          
          // Abre el modal
          modal.style.display = "block";
        });
      }).catch((error) => {
        console.error("Error getting user document: ", error);
      });
    } else if (target.matches("#borrar")) {
      console.log("borrar");
    }
  });
});
  // document.getElementById("tablaDatos").addEventListener("click", function (event) {
  //   const target = event.target;
  
  //   //  botón "editar" 
  //   if (target.matches("#editar")) {
  //     const documentId = target.getAttribute("data-id");
  //     // Lógica para manejar la edición
  //     console.log("Editar empleado con ID:", documentId);
  //     // Abre el modal de edición si es necesario
  //   }
  
  //   // botón "borrar" 
  //   if (target.matches("#borrar")) {
  //     const documentId = target.getAttribute("data-id");
    
  //     console.log("Eliminar empleado con ID:", documentId);
      
  //     // Eliminar documento
  //     deleteDoc(doc(safety_users, documentId))
  //       .then(() => {
  //         console.log("Documento eliminado correctamente.");
  //         location.reload();
  //       })
  //       .catch((error) => {
  //         console.error("Error al eliminar el documento: ", error);
  //       });
  //   }
  // });


