```javascript
/* =========================================
   PAPEL & ARTE
   JAVASCRIPT
========================================= */


/* =========================================
   MENÚ PARA CELULAR
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* Cerrar menú al seleccionar una opción */

const menuLinks = document.querySelectorAll(".navbar a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* =========================================
   VALIDACIÓN DEL FORMULARIO
========================================= */

const contactForm = document.getElementById("contactForm");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const mensajeError = document.getElementById("mensajeError");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let formularioValido = true;

    // Limpiar mensajes anteriores
    nombreError.textContent = "";
    emailError.textContent = "";
    mensajeError.textContent = "";
    successMessage.textContent = "";

    // Validar nombre
    if (nombre.value.trim() === "") {

        nombreError.textContent = "Por favor, escribe tu nombre.";
        formularioValido = false;

    } else if (nombre.value.trim().length < 3) {

        nombreError.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        formularioValido = false;
    }


    // Validar correo
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent =
            "Por favor, escribe tu correo.";

        formularioValido = false;

    } else if (!emailRegex.test(email.value.trim())) {

        emailError.textContent =
            "Escribe un correo electrónico válido.";

        formularioValido = false;
    }


    // Validar mensaje
    if (mensaje.value.trim() === "") {

        mensajeError.textContent =
            "Por favor, escribe un mensaje.";

        formularioValido = false;

    } else if (mensaje.value.trim().length < 10) {

        mensajeError.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        formularioValido = false;
    }


    // Resultado
    if (formularioValido) {

        successMessage.textContent =
            "¡Mensaje enviado correctamente! Gracias por contactarnos.";

        contactForm.reset();
    }

});


/* =========================================
   CAMBIO VISUAL AL ESCRIBIR
========================================= */

const inputs = document.querySelectorAll(
    ".contact-form input, .contact-form textarea"
);

inputs.forEach(input => {

    input.addEventListener("input", () => {

        const errorElement = document.getElementById(
            input.id + "Error"
        );

        if (errorElement) {
            errorElement.textContent = "";
        }

        successMessage.textContent = "";
    });

});
```
