window.addEventListener("load", () => {
    const form = document.getElementById("registration-form");

    form.addEventListener('submit', (e) => {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const surnameInput = document.getElementById('surname');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const imageInput = document.getElementById('image');
        
        // Validaciones regulares
        const nameRegex = /^[a-zA-Z ]{2,20}$/;
        const surnameRegex = /^[a-zA-Z ]{2,20}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const passwordRegex = /^.{8,}$/;
              
        // Validacion de Nombre
        if (!nameRegex.test(nameInput.value)) {
            alert('El Nombre debe tener entre 2 y 20 caracteres');
            isValid = false;
        }
        
        // Validacion de Apellido
        if (!surnameRegex.test(surnameInput.value)) {
            alert('El Apellido debe tener entre 2 y 20 caracteres');
            isValid = false;
        }

        // Validacion Email
        if (!emailRegex.test(emailInput.value)) {
            alert('Ingresar un Email valido');
            isValid = false;
        }
        
        // Validacion Password
        if (!passwordRegex.test(passwordInput.value)) {
            alert('La contraseña debe tener al menos 8 caracteres');
            isValid = false;
        }

        // Validacion carga de Imagen
        if (imageInput.files.length === 0) {
            alert('Please select an image file.');
            isValid = false;
        }
        // Si la validacion falla
        if (!isValid) {
            e.preventDefault();
        }
    });
});