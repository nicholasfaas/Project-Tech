// Luister naar mousemove events op het hele window
window.addEventListener('mousemove', function(e) {
    const tiltableImage = document.getElementById('tiltable-image');
    if (!tiltableImage) return;

    const rect = tiltableImage.getBoundingClientRect();
    
    // Bereken de muispositie relatief tot het midden van de afbeelding
    const offsetX = e.clientX - rect.left - (rect.width / 2);
    const offsetY = e.clientY - rect.top - (rect.height / 2);

    // Stel de intensiteit van het effect in
    const rotateY = offsetX / (rect.width / 2) * 5; // 10 is de maximale rotatie in graden
    const rotateX = -(offsetY / (rect.height / 2) * 5);

    tiltableImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset de transformatie wanneer de muis de pagina verlaat
window.addEventListener('mouseleave', function() {
    const tiltableImage = document.getElementById('tiltable-image');
    if (tiltableImage) {
        tiltableImage.style.transform = 'rotateX(0) rotateY(0)';
    }
});

window.addEventListener('scroll', function() {
    const gridContainer = document.getElementById('grid-container');
    const tiltableImage = document.getElementById('tiltable-image');

    if (!gridContainer || !tiltableImage) return;

    const rect = gridContainer.getBoundingClientRect();
    const imageRect = tiltableImage.getBoundingClientRect();

    // Check if the grid container is above the viewport
    if (rect.bottom < 0) {
        // Fade out the first image
        tiltableImage.style.opacity = '0.5';
    } else {
        // Restore the opacity of the first image
        tiltableImage.style.opacity = '1';
    }
});
