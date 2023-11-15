const menu = document.querySelector('.shop');
const detalles = document.querySelector('.descripcion')
const iconClose = document.querySelector('.fa-xmark')
const navegation = document.querySelector('.detailsContainer')
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    descripcionHam();
});

const eventos = () => {
    menu.addEventListener('click', abrirMenu);
    detalles.addEventListener('click', abrirDetalles);
    iconClose.addEventListener('click', cerraDetalle);
}

const abrirMenu = () =>{
    navegation.classList.remove('hide')
}

const abrirDetalles = () => {
    navegation.classList.remove('hide')
}
const cerraDetalle = () => {
    navegation.innerHTML
}