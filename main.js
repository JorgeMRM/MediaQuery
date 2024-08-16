// Este script se asegura de que el menú hamburguesa se maneje correctamente
document.querySelectorAll('.menu-navegacion a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});
