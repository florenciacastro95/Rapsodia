document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        'assests/carrousel-img/img1.png',
        'assests/carrousel-img/img2.jpg',
        'assests/carrousel-img/img3.jpg',
        'assests/carrousel-img/img4.webp',
        'assests/carrousel-img/img5.jpg',
        'assests/carrousel-img/img6.webp'
    ];

    let imagenVisible = 0;
    let carouselImg = document.getElementById('carousel-img');
    let antBtn = document.getElementById('anterior');
    let sigBtn = document.getElementById('siguiente');

    // Mostrar la primera imagen al cargar la página
    carouselImg.src = imagenes[imagenVisible];

    // Función para cambiar la imagen visible hacia adelante
    function avanzar() {
        imagenVisible = (imagenVisible + 1) % imagenes.length;
        carouselImg.src = imagenes[imagenVisible];
    }

    // Función para cambiar la imagen visible hacia atrás
    function retroceder() {
        imagenVisible = (imagenVisible - 1 + imagenes.length) % imagenes.length;
        carouselImg.src = imagenes[imagenVisible];
    }

    // Escuchar clics en el botón de anterior
    antBtn.addEventListener('click', function() {
        retroceder();
    });

    // Escuchar clics en el botón de siguiente
    sigBtn.addEventListener('click', function() {
        avanzar();
    });
});
