(function(){
  emailjs.init("5YpOn--zENsBcQu2i"); // 👈 Tu clave pública
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm(
    'service_lxbn2a8',   // 👈 Tu Service ID real
    'template_dulj0ff',  // 👈 Tu Template ID real
    this
  )
  .then(() => {
    alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
  }, (err) => {
    alert('Hubo un error al enviar: ' + JSON.stringify(err));
  });
});
