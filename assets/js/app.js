const id = document.getElementById('id');
const position = document.getElementById('position');
const employee = document.getElementById('employee');
const namee = document.getElementById('name');
const surnames = document.getElementById('surnames');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');


const btnUser = document.getElementById('btnUser');
const formUsers = document.getElementById('formUsers');
btnUser.addEventListener('click', () => {
id.value = '';
position.value = '';
employee.value = '';
namee.value = '';
surnames.value = '';
email.value = '';
password.value = '';
number.value = '';})

document.addEventListener('DOMContentLoaded', function() {
    const btnUser = document.getElementById('btnUser');

    btnUser.addEventListener('click', () => {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    });
});