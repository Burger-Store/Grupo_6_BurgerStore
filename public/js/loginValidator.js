window.addEventListener("load", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener('submit', (e) => {
        let isValid = true;
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
               
        // Validaciones regulares
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const passwordRegex = /^.{8,}$/;

        
              
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

        // Si la validacion falla
        if (!isValid) {
            e.preventDefault();
        }
    });
});