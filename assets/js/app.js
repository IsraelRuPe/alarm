// // const id = document.getElementById('id');
// // const cargo = document.getElementById('cargo');
// // const employee = document.getElementById('employee');
// // const namee = document.getElementById('name');
// // const surnames = document.getElementById('surnames');
// // const email = document.getElementById('email');
// // const password = document.getElementById('password');
// // const number = document.getElementById('number');
// // const btnUser = document.getElementById('btnUser');
// // const formUsers = document.getElementById('formUsers');

// // Agregar el evento click al botón para mostrar el modal y limpiar los campos
// btnUser.addEventListener('click', () => {
//     // Limpiar los campos del formulario
//     // id.value = '';
//     // cargo.value = '';
//     // employee.value = '';
//     // namee.value = '';
//     // surnames.value = '';
//     // email.value = '';
//     // password.value = '';
//     // number.value = '';
    
//     // Mostrar el modal utilizando Bootstrap's Modal API
//     // const myModal = new bootstrap.Modal(document.getElementById('modalUsers'));
//     // myModal.show();
// });

document.addEventListener('DOMContentLoaded', function() {
    const btnUser = document.getElementById('btnUser');

    btnUser.addEventListener('click', () => {
        const myModal = new bootstrap.Modal(document.getElementById('modalUsers'));
        myModal.show();
    });
});