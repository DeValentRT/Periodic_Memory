// gameManager.js
document.addEventListener('DOMContentLoaded', () => {
    // Variables globales
    const timeBar = document.getElementById('time-bar');
    const totalFrames = 33;
    let animationInterval = null;
    let juegoTerminado = false;

    // Función pública para detener el tiempo
    window.detenerTemporizadorGlobal = function() {
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
        juegoTerminado = true;
    };

    // Precarga de imágenes
    function precargarImagenes() {
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `tiempo/${i}.png`;
        }
    }

    // Mostrar Ready-Go
    function mostrarReadyGo() {
        return new Promise((resolve) => {
            const readyGoContainer = document.createElement('div');
            readyGoContainer.className = 'ready-go-container';
            readyGoContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 500;
                pointer-events: none;
            `;

            const readyImg = document.createElement('img');
            readyImg.src = 'go/1.png';
            readyImg.style.cssText = `
                position: absolute;
                width: 240px;
                height: 135px;
                animation: fadeInOut 1s ease-in-out;
            `;

            readyGoContainer.appendChild(readyImg);
            document.querySelector('.game-container').appendChild(readyGoContainer);

            setTimeout(() => {
                readyImg.src = 'go/2.png';
                setTimeout(() => {
                    readyGoContainer.remove();
                    resolve();
                }, 1000);
            }, 1500);
        });
    }

    // Mostrar pantalla de tiempo agotado
    function mostrarTiempoAgotado() {
        if (document.querySelector('.pantalla-final')) return;

        // Pausar el juego
        document.querySelector('.game-container').classList.add('pausado');
        window.detenerTemporizadorGlobal();

        // Crear pantalla
        const pantalla = document.createElement('img');
        pantalla.src = 'pantalla_final/1.png';
        pantalla.className = 'pantalla-final';
        document.querySelector('.game-container').appendChild(pantalla);

        // Botón Volver
        const botonVolver = document.createElement('img');
        botonVolver.src = 'button/2.png';
        botonVolver.className = 'boton-final';
        botonVolver.style.cssText = `
            position: absolute;
            left: 70px;
            bottom: 15px;
            width: 16px;
            height: 16px;
        `;
        botonVolver.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        document.querySelector('.game-container').appendChild(botonVolver);

        // Botón Reiniciar
        const botonReiniciar = document.createElement('img');
        botonReiniciar.src = 'button/1.png';
        botonReiniciar.className = 'boton-final';
        botonReiniciar.style.cssText = `
            position: absolute;
            left: 37px;
            bottom: 15px;
            width: 16px;
            height: 16px;
        `;
        botonReiniciar.addEventListener('click', () => {
            window.location.reload();
        });
        document.querySelector('.game-container').appendChild(botonReiniciar);
    }

    // Animación de la barra de tiempo
    async function iniciarJuego() {
        precargarImagenes();
        await mostrarReadyGo();
        
        const dificultad = obtenerDificultadDeURL();
        const duraciones = { 1: 30000, 2: 18000, 3: 12000 };
        const velocidad = duraciones[dificultad] / totalFrames;
        let currentFrame = 1;

        timeBar.style.display = 'block';
        timeBar.src = 'tiempo/1.png';

        animationInterval = setInterval(() => {
            if (juegoTerminado) {
                clearInterval(animationInterval);
                return;
            }

            currentFrame++;
            if (currentFrame > totalFrames) {
                clearInterval(animationInterval);
                timeBar.src = 'tiempo/33.png';
                mostrarTiempoAgotado();
                return;
            }
            timeBar.src = `tiempo/${currentFrame}.png`;
        }, velocidad);
    }

    // Iniciar juego
    if (timeBar) iniciarJuego();
});

function obtenerDificultadDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('difficulty')) || 1;
}