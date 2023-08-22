const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.register_link');
const registerLink = document.querySelector('.login_link');
const btnPopup = document.querySelector('.btn_loginc');
const iconClose = document.querySelector('.icon_close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active_popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active_popup');
});