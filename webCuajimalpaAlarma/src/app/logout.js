import { signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './firebase.js';
const logout = document.querySelector('#logout_status');

logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user sign out');
})