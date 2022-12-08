const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
    body.classList.toggle('active')
})