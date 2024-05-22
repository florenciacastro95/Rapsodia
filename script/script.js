









/* Funcionalidad de boton artistas */
let artistBtn = document.getElementById('next-artist-btn');

artistBtn.addEventListener('click', function() {
    let sectionArtistas = document.querySelectorAll('.main-wrapper');
    let posActual = window.scrollY;
    for (let i = 0; i < sectionArtistas.length; i++) {
        let sectionTop = sectionArtistas[i].offsetTop;
        if (sectionTop > posActual + 10) {
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            break;
        }
    }
});
