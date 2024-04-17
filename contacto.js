// Función para validar el formulario de contacto
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener referencias a los campos del formulario
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var mensajeInput = document.getElementById('mensaje');

    // Validar cada campo
    if (nombreInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        nombreInput.focus();
        return false;
    }

    if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        emailInput.focus();
        return false;
    }

    if (mensajeInput.value.trim() === '') {
        alert('Por favor, ingresa tu mensaje.');
        mensajeInput.focus();
        return false;
    }

    // Si todos los campos son válidos, enviar el formulario
    alert('¡Formulario enviado con éxito!');
    document.getElementById('formulario').reset(); // Limpiar el formulario
}

// Agregar un event listener al formulario para ejecutar la función de validación al enviar
document.getElementById('formulario').addEventListener('submit', validarFormulario);
