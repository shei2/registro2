document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const email = document.getElementById('email');
    const terminosCheckbox = document.getElementById('terminos');
  
    // Función para dar feedback visual y en tiempo real
    function setFeedback(element, isValid) {
      if (isValid) {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
      } else {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
      }
    }
  
    // Validación de contraseñas
    password2.addEventListener('input', function () {
      if (password2.value !== password1.value) {
        password2.setCustomValidity('Las contraseñas no coinciden');
      } else {
        password2.setCustomValidity('');
      }
      setFeedback(password2, password2.checkValidity());
    });
  
    // Validación de correo
    email.addEventListener('input', function () {
      setFeedback(email, email.checkValidity());
    });
  
    // Validación del checkbox de términos
    terminosCheckbox.addEventListener('change', function () {
      setFeedback(terminosCheckbox, terminosCheckbox.checked);
    });
  
    
      

    // Validación antes de enviar el formulario
    form.addEventListener('submit', function (event) {
      // Prevenir el envío si hay algún campo inválido
      if (!form.checkValidity()) {
        event.preventDefault();
        alert('Por favor, corrija los errores en el formulario.');
      } 
      else if (!terminosCheckbox.checked) {
        event.preventDefault();
        alert('Debes aceptar los términos y condiciones.');
      }  // Si todos los campos están bien, se puede enviar el formulario
      else {
        alert('Formulario enviado correctamente.');
      }
    });
  });
  