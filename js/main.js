const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Cambiar el icono de hamburguesa a una "X" al abrir
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un enlace (importante para navegación interna)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== Carrusel ====================
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = carouselSlide ? carouselSlide.querySelectorAll('img') : [];
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const dotsContainer = document.querySelector('.carousel-dots');

if (carouselSlide && carouselImages.length > 0) {
    const totalSlides = carouselImages.length;
    let currentSlide = 0;
    let autoPlayInterval;

    // Ajustar el ancho del slide según el número de imágenes
    carouselSlide.style.width = `${totalSlides * 100}%`;
    
    // Ajustar el ancho de cada imagen para que ocupen su espacio
    carouselImages.forEach(img => {
        img.style.width = `${100 / totalSlides}%`;
        img.style.flexShrink = '0';
    });

    // Crear puntos indicadores
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Función para ir a un slide específico
    function goToSlide(index) {
        currentSlide = index;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        
        const translateX = -(currentSlide * 100) / totalSlides;
        carouselSlide.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar puntos activos
        updateDots();
    }

    // Actualizar puntos activos
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Función para ir a la siguiente imagen (con bucle)
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        goToSlide(currentSlide);
    }

    // Función para ir a la imagen anterior (con bucle)
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        goToSlide(currentSlide);
    }

    // Event listeners para los botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    // Auto-play del carrusel
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Iniciar auto-play
    startAutoPlay();

    // Pausar al pasar el mouse
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}