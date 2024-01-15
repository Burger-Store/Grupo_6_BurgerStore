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

/**
 * 
 * 
 * Validaciones del formulario
 * 
 */
function validarFormularioEmpty() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let postcode = document.getElementById('postcode').value;
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