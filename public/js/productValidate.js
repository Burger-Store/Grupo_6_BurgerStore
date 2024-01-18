window.addEventListener('load', function() {
    let body = document.body;
    body.style.backgroundColor = '#E6A4B4';
    let formulario = document.querySelector('form.registration-form');
    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault();
  
      const name = document.querySelector('#name');
  
      if (name.value.trim() === '') {
        console.log('Hubo un error en el nombre');
      }
  
      const description = document.querySelector('#description');
  
      if (description.value.trim() === '') {
        console.log('Hubo un error en la descripción');
      }
  
      const price = document.querySelector('#price');
  
      if (price.value.trim() === '') {
        console.log('Hubo un error en el precio');
      }
  
      const category = document.querySelector('#category');
  
      if (category.value.trim() === '') {
        console.log('Hubo un error en la categoría');
      }
  
      const image = document.querySelector('#image');
  
      if (image.value.trim() === '') {
        console.log('Hubo un error en la imagen');
      }
    }); 
  });