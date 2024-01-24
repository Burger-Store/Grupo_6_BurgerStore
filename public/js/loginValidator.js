window.addEventListener('load', function(){
    let formulario = document.querySelector('form.registration-form');
    let errores = [];

    formulario.addEventListener('submit', function(e) {
        let ulErrores = document.querySelector('div.errores ul');
        ulErrores.innerHTML = '';

        let campoEmail = document.querySelector('input.form-control');       
        if (campoEmail.value == '') {
            errores.push('- El campo email debe estar completo')   
                   
        } else if (!campoEmail.value.includes('@')) {
            errores.push('- Debe ingresar un email válido')   
                     
        }
        let campoPassword = document.querySelector('input.form-control');

        if (campoPassword.value == '') {
            errores.push('- Debe ingresar una contraseña')
            
        } 

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul');

            for (let i = 0; i < errores.length; i++) {
                
                ulErrores.innerHTML += `<li>${errores[i]}</li>`
                    
            }}
            
        
        
    })
})


