// Gestión de las miniaturas del portafolio
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.portfolio-thumbnail');
    const mainImages = document.querySelectorAll('.portfolio-featured-image');
    const centerButton = document.getElementById('centerPushButton');
    
    // Datos de los productos
    const products = [
        {
            name: 'Ivory Beige',
            description: 'La perfecta armonía entre lo clásico y lo contemporáneo, un tono suave que ilumina cada rincón con elegancia discreta y atemporal.',
            specs: 'NATO MARVEX 60X60 IN 1012'
        },
        {
            name: 'Dyna Beige',
            description: 'Elegancia clásica con un toque moderno, perfecto para espacios que buscan sofisticación y calidez.',
            specs: 'NATO MARVEX 60X60 IN 1013'
        },
        {
            name: 'Fiesta',
            description: 'Vitalidad y color para espacios que buscan energía y personalidad.',
            specs: 'NATO MARVEX 60X60 IN 1014'
        },
        {
            name: 'Stripe',
            description: 'Textura única que añade profundidad y carácter a cualquier ambiente.',
            specs: 'NATO MARVEX 60X60 IN 1015'
        }
    ];

    let currentIndex = 0;

    function updateProductInfo(index) {
        console.log('Actualizando información del producto #' + index, products[index]);
        const nameEl = document.getElementById('productName');
        const descEl = document.getElementById('productDescription');
        const specsEl = document.getElementById('productSpecs');
        
        if (nameEl) nameEl.textContent = products[index].name;
        if (descEl) descEl.textContent = products[index].description;
        if (specsEl) specsEl.textContent = products[index].specs;
    }

    function updateImages(newIndex) {
        console.log('Actualizando imágenes de índice ' + currentIndex + ' a ' + newIndex);
        
        // Si hay imágenes principales, manejar animación
        if (mainImages.length > 0) {
            mainImages[currentIndex].classList.add('fade-out');
        }
        
        thumbnails[currentIndex].classList.remove('active');
        
        setTimeout(() => {
            // Remover clases activas
            mainImages.forEach(img => {
                img.classList.remove('active', 'fade-out');
            });
            
            // Agregar clases activas
            if (mainImages.length > 0) {
                mainImages[newIndex].classList.add('active');
            }
            thumbnails[newIndex].classList.add('active');
            
            // Actualizar información del producto
            updateProductInfo(newIndex);
            currentIndex = newIndex;
        }, 300); // Coincide con el tiempo de transición CSS
    }

    // Eventos para miniaturas
    console.log('Registrando eventos para miniaturas, cantidad encontrada:', thumbnails.length);
    thumbnails.forEach((thumb, index) => {
        console.log('Registrando evento para miniatura #' + index);
        thumb.addEventListener('click', (e) => {
            console.log('Miniatura clickeada #' + index);
            e.preventDefault(); // Prevenir comportamiento por defecto
            e.stopPropagation(); // Prevenir propagación del evento
            updateImages(index);
        });
    });

    // Evento para botón central
    if (centerButton) {
        centerButton.addEventListener('click', () => {
            const nextIndex = (currentIndex + 1) % thumbnails.length;
            updateImages(nextIndex);
        });
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % thumbnails.length;
            updateImages(nextIndex);
        } else if (e.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateImages(prevIndex);
        }
    });

    // Configuración inicial
    console.log('Configuración inicial del portafolio');
    updateProductInfo(0);
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});
