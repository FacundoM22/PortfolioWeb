$(document).ready(
    function()
     { // Esto asegura que el codigo JS se ejecute una vez que el HTML haya sido cargado correctamente.
    $(".custom-btn").mousedown(
        function() 
            {
                $(this).css("background-color", "#c0c0c0");
            }
        );
  
    $(".custom-btn").mouseup(
        function() 
        {
          $(this).css("background-color", ""); // Restablecer el color de fondo original
        }
    );
    }
);


function resizeButton() {
    const contactButton = document.querySelector('.custom-btn');
    const sizeButton = contactButton.offsetWidth; // Obtener el ancho del botón
  
    // Ajustar el tamaño de la fuente en función del ancho del botón
    const tamanioFuente = sizeButton * 0.1; // Puedes ajustar el factor multiplicativo según tus necesidades
    contactButton.style.fontSize = tamanioFuente + 'px';
  }
  
  // Llamar a la función al cargar la página y cuando se redimensione la ventana
  window.addEventListener('DOMContentLoaded', resizeButton);
  window.addEventListener('resize', resizeButton);