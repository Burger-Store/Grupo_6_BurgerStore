//boton carrito
const menu = document.querySelector('.shop');
//cerrar carrito
const cerrarCarrito = document.querySelector('.detailsProductHead')
//Boton hamburguesa
const openDetailsBurger = document.getElementById('detailBtn');
//Cerrar detalles de la hamburguesa
const closeDetailsBurger = document.querySelector('.productEvent');

const iconClose = document.querySelector('.fa-xmark')
//Contenedor de detalle de producto 
const navegation = document.querySelector('.detailsContainer')
//Contenedor de carrito de compras
const cartNavegation = document.querySelector('.cartContainer');
//Btn "DETALLES" de las hamburgesa
const actionBtnBurger = document.getElementById('detailBtn');


//Local storage  productEvent
const cartLocalStorage = window.localStorage;


document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    descripcionHam();
});

const eventos = () => {
    //carrito
    menu.addEventListener('click', openCart);
    cerrarCarrito.addEventListener('click', closeCart);
    //Detalle de la hamburguesa
    openDetailsBurger.addEventListener('click',openBurgerDetails)
    closeDetailsBurger.addEventListener('click', closeBurgerDetails)

    //detalles.addEventListener('click', abrirDetalles);
    //actionBtnBurger.addEventListener('click',openBurgerDetails);
    //iconClose.addEventListener('click', closeCart)

}

/**
 * AbrirDetalles --> if isCartOpen ? cerrarCart : null;
   cerrarDetalles

   abrirCart --> if isDetalleOpen ? cerrarDetalles : null;
   CerrarCart
 */


//Navbar
const openCart = () =>{
    cartNavegation.classList.remove('hide')
    navegation.classList.contains('hide') ? '' : navegation.className += ' hide';
}
//Cerrar carrito
const closeCart = () => {
    cartNavegation.className += " hide";
}
//Abrir detalles
const openBurgerDetails = () => {
    console.log(openDetailsBurger)
    navegation.classList.remove('hide')
    cartNavegation.classList.contains('hide') ? '' : cartNavegation.className += ' hide';
}
//Cerrar detalle
const closeBurgerDetails = () => {
    navegation.className += ' hide';
}
/**
 * Local storage para carrito
 * 
 * 1- Local storage va a guardar el ID de los productos a comprar
 * 2- Cuando se renderize el carrito llamara a esos productos con el ID
 * 
 */
function addCart(product){
    cart.push(product)
    updateLocalStorage();
    viewCart();
}
