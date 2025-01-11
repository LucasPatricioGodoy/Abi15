document.addEventListener("DOMContentLoaded", function () {
    const btnContinuar = document.getElementById("btnContinuar");
    const overlay = document.getElementById("bienvenida");

    btnContinuar.addEventListener("click", function () {
        overlay.classList.add("hidden"); // Ocultamos el overlay
    });

    // Observador de las secciones
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null, // Usa el viewport como contenedor
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando el 20% de la sección es visible
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observa cada sección
    });
});
