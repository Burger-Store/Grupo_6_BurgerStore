//cart btn
const menu = document.querySelector('.shop');
//Descripcion del detalle de producto
//const detalles = document.querySelector('.descripcion')
//btn x
const iconClose = document.querySelector('.fa-xmark')
//Contenedor de detalle de producto 
const navegation = document.querySelector('.detailsContainer')
//Contenedor de carrito de compras
const cartNavegation = document.querySelector('.cartContainer');
//detalle de producto btn
const detailClose = document.getElementById('detailsClose')
//Btn "DETALLES" de las hamburgesa
const actionBtnBurger = document.getElementById('detailBtn')


document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    descripcionHam();
});

const eventos = () => {
    //navbar
    menu.addEventListener('click', abrirMenu);
    detailClose.addEventListener('click', closeDetails);
    detalles.addEventListener('click', abrirDetalles);
    actionBtnBurger.addEventListener('click',openBurgerDetails);
    iconClose.addEventListener('click', closeCart)

}
//Navbar
const abrirMenu = () =>{
    cartNavegation.classList.remove('hide')
}
const closeDetails = () => {
    navegation.className += " hide";
}
const abrirDetalles = () => {
    navegation.classList.remove('hide')
}

const closeCart = () =>{
    
    cartNavegation.classList.remove('hide')
    navegation.className += ' hide';
}
const openBurgerDetails = () => {
    navegation.classList.remove('hide')
    cartNavegation.className += ' hide';
}

console.log(detailClose);