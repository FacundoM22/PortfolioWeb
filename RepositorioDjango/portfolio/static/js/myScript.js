$(document).ready(
    function()
     { 
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

    $('.card-post').click(function()
    {
        var postId = $(this).data("post-id");
        var url = "/blog/" + postId ;
        window.location.href = url
    })
    }
);


function resizeButton() {
    const contactButton = document.querySelector('.custom-btn');
    const sizeButton = contactButton.offsetWidth; // Obtener el ancho del botón
  
    
    const tamanioFuente = sizeButton * 0.1; 
    contactButton.style.fontSize = tamanioFuente + 'px';
  }
  
  // Llamar a la función al cargar la página y cuando se redimensione la ventana
  window.addEventListener('DOMContentLoaded', resizeButton);
  window.addEventListener('resize', resizeButton);


