// tableroManager.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuración inicial
    const gameContainer = document.querySelector('.game-container');
    const nivel = obtenerNivelDeURL();
    
    // Guardar nivel en ámbito global para otros archivos
    window.nivelActual = nivel;

    // 2. Cargar tablero
    cargarTablero(nivel);
    
    // 3. Cargar casillas del nivel (usa window.casillasPorNivel de gameData.js)
    cargarCasillas(nivel, gameContainer);
});

// Función para obtener nivel de la URL
function obtenerNivelDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let nivel = parseInt(urlParams.get('level')) || 1;
    return Math.max(1, Math.min(11, nivel)); // Asegurar que esté entre 1-11
}

// Función para cargar la imagen del tablero
function cargarTablero(nivel) {
    const tableroImg = document.createElement('img');
    tableroImg.src = `tableros/nivel${nivel}.png`;
    tableroImg.className = 'tablero-layer';
    tableroImg.alt = `Tablero Nivel ${nivel}`;
    document.querySelector('.game-container').appendChild(tableroImg);
}

// Función para crear las casillas interactivas
function cargarCasillas(nivel, gameContainer) {
    // Accedemos a los datos desde el objeto global
    const casillasNivel = window.casillasPorNivel[nivel]?.casillas || [];
    
    casillasNivel.forEach(casilla => {
        const casillaElement = document.createElement('div');
        casillaElement.className = 'casilla-elemento';
        casillaElement.dataset.id = casilla.id;
        
        // Posicionamiento y estilo
        Object.assign(casillaElement.style, {
            position: 'absolute',
            left: `${casilla.x}px`,
            top: `${casilla.y}px`,
            width: '16px',
            height: '16px',
            backgroundImage: 'url(casilla.png)',
            backgroundSize: 'cover',
            zIndex: '30',
            cursor: 'pointer'
        });

        // Nota: La verificación de clics ahora se manejará en gameLogic.js
        // Este evento es solo para debugging
        casillaElement.addEventListener('click', () => {
            console.log(`Casilla clickeada: ${casilla.id}`);
        });

        gameContainer.appendChild(casillaElement);
    });
}