const enlacesNavegacion = document.querySelectorAll('.menu-navegacion a');
const toggleMenu = document.querySelector('#menu-toggle');

// Añadir un evento de clic a cada enlace
enlacesNavegacion.forEach(enlace => {
    enlace.addEventListener('click', () => {
        toggleMenu.checked = false;
    });
});
