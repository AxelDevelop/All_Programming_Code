// -------------------ANIMATION------------------

// Necesitamos manejar el evento de clic de nuestro botón, que debería abrir y cerrar nuestro submenú.

// Usaremos el método slideToggle (), que cambia entre los estados visible e invisible del elemento seleccionado usando una animación de diapositiva:
    
// asi quedaria en jquery:

$(function(){
    $(".btn").click(function(){
        $(".submenu").slideToggle(500);
    });
});



// Ahora, lo único que queda es ocultar el submenú por defecto en nuestro css

// Tenemos un submenú completamente funcional, que utiliza una animación de diapositivas.

// ¡Personaliza el código y crea tus propias animaciones y efectos únicos!