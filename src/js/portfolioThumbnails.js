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
        document.getElementById('productName').textContent = products[index].name;
        document.getElementById('productDescription').textContent = products[index].description;
        document.getElementById('productSpecs').textContent = products[index].specs;
    }

    function updateImages(newIndex) {
        // Animación de salida
        mainImages[currentIndex].classList.add('fade-out');
        thumbnails[currentIndex].classList.remove('active');
        
        setTimeout(() => {
            // Remover clases activas
            mainImages.forEach(img => {
                img.classList.remove('active', 'fade-out');
            });
            
            // Agregar clases activas
            mainImages[newIndex].classList.add('active');
            thumbnails[newIndex].classList.add('active');
            
            // Actualizar información del producto
            updateProductInfo(newIndex);
            currentIndex = newIndex;
        }, 300); // Coincide con el tiempo de transición CSS
    }

    // Eventos para miniaturas
    console.log('Registrando eventos para miniaturas, cantidad encontrada:', thumbnails.length);
    thumbnails.forEach((thumb, index) => {
        console.log('Registrando evento para miniatura #'+index);
        thumb.addEventListener('click', (e) => {
            console.log('Miniatura clickeada #'+index);
            e.preventDefault(); // Prevenir comportamiento por defecto
            updateImages(index);
        });
    });

    // Evento para botón central
    if (centerButton) {
        centerButton.addEventListener('click', () => {
            const nextIndex = (currentIndex + 1) % mainImages.length;
            updateImages(nextIndex);
        });
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % mainImages.length;
            updateImages(nextIndex);
        } else if (e.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + mainImages.length) % mainImages.length;
            updateImages(prevIndex);
        }
    });

    // Configuración inicial
    updateProductInfo(0);
});
