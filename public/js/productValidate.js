window.addEventListener("load", () => {
    const form = document.getElementById("createProductForm");
  
    form.addEventListener('submit', (e) => {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const descriptionInput = document.getElementById('description');
        const priceInput = document.getElementById('price');
        const imageInput = document.getElementById('image');

        // Validaciones regulares
        const nameRegex = /^[a-zA-ZÑñ ]{2,30}$/;
        const descriptionRegex = /^.{10,}$/;
        const priceRegex = /\d{3,}/;
             
              
        // Validacion de Nombre
        if (!nameRegex.test(nameInput.value)) {
            alert('El Nombre debe ser solo letras y tener entre 2-30 caracteres');
            isValid = false;
        }
        
        // Validacion de Apellido
        if (!descriptionRegex.test(descriptionInput.value)) {
            alert('La descripcion debe tener mas de 10 caracteres');
            isValid = false;
        }
  
        // Validacion Email
        if (!priceRegex.test(priceInput.value)) {
            alert('Ingresar un Precio valido');
            isValid = false;
        }
        // Validacion carga de Imagen
        if (imageInput.files.length === 0) {
            alert('Por favor seleccione una imagen');
            isValid = false;
        }
        
        // Si la validacion falla
        if (!isValid) {
            e.preventDefault();
        }
    });
  });