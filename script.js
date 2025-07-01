// Inicializa ScrollReveal para animar elementos con clase .card
ScrollReveal().reveal('.card', {
  duration: 1000,      // Duración de la animación en milisegundos
  distance: '50px',    // Distancia que se mueve el elemento durante la animación
  origin: 'bottom',    // Desde dónde aparece el elemento (puede ser 'top', 'left', 'right', 'bottom')
  easing: 'ease-in-out',
  reset: false         // Si es false, la animación no se repite cuando haces scroll arriba y abajo
});