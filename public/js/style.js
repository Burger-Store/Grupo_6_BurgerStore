//boton carrito
const menu = document.querySelector('.shop');
//cerrar carrito
const cerrarCarrito = document.querySelector('.detailsProductHead')
//Boton hamburguesa
const openDetailsBurger = document.getElementById('detailBtn');
//Cerrar detalles de la hamburguesa
const closeDetailsBurger = document.querySelector('.productEvent');
//Contenedor de detalle de producto 
const navegation = document.querySelector('.detailsContainer')
//Contenedor de carrito de compras
const cartNavegation = document.querySelector('.cartContainer');
//Btn "DETALLES" de las hamburgesa
const actionBtnBurger = document.getElementById('detailBtn');

//Local storage  productEvent
const cartLocalStorage = window.localStorage;


document.addEventListener('DOMContentLoaded',()=>{
    let miForm = document.getElementById('miForm');

    miForm.addEventListener('submit', function (event) {
        if (validarFormularioEmpty() ||
        cantPassword() ||
        onlyNumber() ||
        selectValidate() ||
        dateValidate() ) {
        event.preventDefault();
        } else {
            //Se envia formulario
        }
    });
});

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
/**
 * Validaciones del formulario
 * 
 * 
 * 
 */
function preventDefault(){
    let miForm = document.getElementById('miForm');
    validarFormularioEmpty();
    cantPassword();
    onlyNumber();
    selectValidate();
    dateValidate();
}

function validarFormularioEmpty() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let postcode = document.getElementById('psotcode').value;
    let image = document.getElementById('image').value;

    if(name === '' || surname === '' || email === '' || phone === '' || 
    address === '' || city === '' || postcode === '' 
    || image === '' || password === '' ){
        alert('Todos los campos son obligatorios')
        return false;
    }
    return true;
}
function cantPassword() {
    let password = document.getElementById('password').value;
    if(password.length < 8){
        alert('Debe ingresar como minimo 8 caracteres')
        return false;
    }
    return true;
}
function onlyNumber() {
    let phone = document.getElementById('phone').value;
    let postcode = document.getElementById('psotcode').value;
    let regexNumber = /^[0-9]+$/;

    if (!regexNumber.test(phone) || !regexNumber.test(postcode) ){
        alert('Introduce solo números en teléfono o código postal')
        return false;
    }
    return true;
}
function selectValidate() {
    let nationality = document.getElementById('nationality').value;
    if(nationality === ''){
        alert('Seleccione al menos una opción')
        return false;
    }
    return true;
}

function dateValidate() {
    let date = document.getElementById('date').value;
    let regexDate = /^\d{2}-\d{2}-\d{4}$/;
    if(!regexDate.test(date)){
        alert('Introduce el formato valido. DD-MM-AAAA');
        return false;
    }
    return true;
}