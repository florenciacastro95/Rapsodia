document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll('.component');

    const handleScroll = () => {
        components.forEach(component => {
            const comp = component.getBoundingClientRect(); // este metodo agarra donde esta el componente, o sea agarraria que esta afuera
            
            if (comp.top < window.innerHeight) { // Si la parte superior del componente está dentro de la ventana de visualización
                component.classList.add('animate'); // le seteo la clase que hace que los componentes se vean 
            }
        });
    };

    window.addEventListener('scroll', handleScroll); // se llana cada vez que se hace scroll

    handleScroll(); //se llamaria de vuelta para poder cargar de vuelta los componentes
});

