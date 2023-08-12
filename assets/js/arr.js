$(document).ready(function() {
    // Selecciona el modal por su ID
    const modal = document.getElementById('staticBackdrop');
    // Crea una instancia de Draggable para el modal
    new Draggable(modal, {
      // Habilita el arrastre en cualquier parte del modal
      handle: '.modal-header',
    });
  });