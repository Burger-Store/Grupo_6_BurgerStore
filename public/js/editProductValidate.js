window.addEventListener('load', function(){
    let formulario = document.querySelector('form.registration-form');
    let errores = [];
  
    formulario.addEventListener('submit', function(e) {
        let ulErrores = document.querySelector('div.errores ul');
        ulErrores.innerHTML = '';
  
        let campoName = document.querySelector('input.form-control');       
        if (campoName.value == '') {
            errores.push('- El campo nombre no puede estar vacío')};  
  
        let campoDescription = document.querySelector('input.form-control');
        if (campoDescription.value == '') {
            errores.push('- El campo descripción no puede estar vacío')};
  
        let campoPrice = document.querySelector('input.form-control');
        if (campoPrice.value == '') {
            errores.push('- El campo precio no puede estar vacío')};
  
        let campoCategory = document.querySelector('input.form-control');
        if (campoCategory.value == '') {
            errores.push('- El campo categoría no puede estar vacío');
  
        let campoImage = document.querySelector('input.form-control');
        if (campoImage.value == '') {
            errores.push('- El campo imagen no puede estar vacío')}; 
            
        } 
  
        if (errores.length > 0) {
            e.preventDefault();
  
            let ulErrores = document.querySelector('div.errores ul');
  
            for (let i = 0; i < errores.length; i++) {
                
                ulErrores.innerHTML += `<li>${errores[i]}</li>`
                    
            }}
  errores = []         
        
        
    })
  })