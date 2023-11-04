const menu = document.querySelector('.shop');
const navegation = document.querySelector('.detailsContainer')
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () =>{
    navegation.classList.remove('hide')
}