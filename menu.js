
    document.addEventListener('DOMContentLoaded', function() {
        var menuIcon = document.querySelector('.menu-icon');
        var menuList = document.getElementById('menu-list');

        // Ocultar el menú inicialmente
        menuList.style.display = 'none';

        // Agregar evento de clic a la imagen del botón del menú
        menuIcon.addEventListener('click', function() {
            // Alternar la clase para mostrar u ocultar el menú
            if (menuList.style.display === 'none') {
                menuList.style.display = 'block';
            } else {
                menuList.style.display = 'none';
            }
        });
    });

