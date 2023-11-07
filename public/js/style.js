const menu = document.querySelector('.shop');
const detalles = document.querySelector('.descripcion')
const navegation = document.querySelector('.detailsContainer')
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    descripcionHam();
});

const eventos = () => {
    menu.addEventListener('click', abrirMenu);
    detalles.addEventListener('click', abrirDetalles);
}

const abrirMenu = () =>{
    navegation.classList.remove('hide')
}

const abrirDetalles = () => {
    navegation.classList.remove('hide')
}