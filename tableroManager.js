// tableroManager.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuración inicial
    const gameContainer = document.querySelector('.game-container');
    const nivel = obtenerNivelDeURL();

    // Guardar nivel en ámbito global para otros archivos
    window.nivelActual = nivel;

    // ✅ Fondo dinámico según nivel (antes de cargar tablero)
    const fondoRuta = (nivel === 13 || nivel === 14)
        ? 'fondo/2.png'
        : 'fondo/1.png';
    gameContainer.style.backgroundImage = `url('${fondoRuta}')`;

    // 2. Cargar tablero
    cargarTablero(nivel);

    // 3. Cargar casillas del nivel (usa window.casillasPorNivel de gameData.js)
    cargarCasillas(nivel, gameContainer);
});

// Función para obtener nivel de la URL
function obtenerNivelDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let nivel = parseInt(urlParams.get('level')) || 1;
    return Math.max(1, Math.min(15, nivel)); // Asegurar que esté entre 1-15
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
    const casillasNivel = window.casillasPorNivel[nivel]?.casillas || [];

    casillasNivel.forEach(casilla => {
        const casillaElement = document.createElement('div');
        casillaElement.className = 'casilla-elemento';
        casillaElement.dataset.id = casilla.id;

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

        // Evento de clic solo para debugging
        casillaElement.addEventListener('click', () => {
            console.log(`Casilla clickeada: ${casilla.id}`);
        });

        gameContainer.appendChild(casillaElement);
    });
}