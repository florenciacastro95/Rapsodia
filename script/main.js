document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        'assests/carrousel-img/img1.png',
        'assests/carrousel-img/img2.jpg',
        'assests/carrousel-img/img3.jpg',
        'assests/carrousel-img/img4.webp',
        'assests/carrousel-img/img5.jpg',
        'assests/carrousel-img/img6.webp'
    ]; //tiene todas las rutas de la carpeta que meti

    let imagenVisible = 0; //tiene el index de la imagen que se esta viendo
    let carouselImg = document.getElementById('carousel-img');
    let antBtn = document.getElementById('anterior');
    let sigBtn = document.getElementById('siguiente');

    // carga la primera imagen al cargar la página
    carouselImg.src = imagenes[imagenVisible];

    //cambia el src de la img visible 
    function avanzar() {
        imagenVisible = (imagenVisible + 1) % imagenes.length;
        carouselImg.src = imagenes[imagenVisible];
    }


    function retroceder() {
        imagenVisible = (imagenVisible - 1 + imagenes.length) % imagenes.length;
        carouselImg.src = imagenes[imagenVisible];
    }

    // depende el boton que presione llama a una u otra funcion
    antBtn.addEventListener('click', function() {
        retroceder();
    });

    sigBtn.addEventListener('click', function() {
        avanzar();
    });

    //un saludo al profe que mira los comentarios :)))))))

});
