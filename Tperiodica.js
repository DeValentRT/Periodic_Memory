// Función de escalado responsivo
function resizeGame() {
    const gameContainer = document.querySelector('.game-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const gameAspect = 240 / 135;
    const windowAspect = windowWidth / windowHeight;
    
    const scale = (windowAspect > gameAspect) 
        ? windowHeight / 135 
        : windowWidth / 240;
    
    gameContainer.style.transform = `scale(${scale})`;
}

// Manejador del botón de cerrar
function setupCloseButton() {
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    resizeGame();
    setupCloseButton();
    
    window.addEventListener('resize', resizeGame);
    
    // Prevenir zoom en móviles
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
});