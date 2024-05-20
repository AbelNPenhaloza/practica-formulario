document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Validación de campos
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('mail').value;
    var psw = document.getElementById('psw').value;
    
    // Ejemplo de validación de campo obligatorio
    if (nombre === '' || apellido === '' || email === '' || psw === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    
    // Si la validación pasa, puedes enviar el formulario al servidor
    this.submit();
});
var botonEnviar = document.querySelector('.botonera button');

botonEnviar.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

botonEnviar.addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; // Vuelve al color original del botón
});
function enviarFormulario() {
    // Aquí puedes realizar cualquier acción que desees cuando se haga clic en el botón
    alert('Formulario enviado!');
}
function enviarFormulario() {
    // Obtener referencias a los campos del formulario
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('mail').value.trim();
    var psw = document.getElementById('psw').value.trim();
    
    // Validar que todos los campos estén completos
    if (nombre === '' || apellido === '' || email === '' || psw === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return; // Detener la función si algún campo está vacío
    }
    
    // Validar el formato del correo electrónico utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return; // Detener la función si el correo electrónico no es válido
    }
    
    // Si se superan todas las validaciones, mostrar el mensaje de éxito
    alert('Formulario enviado!');
}