// gameManager.js
document.addEventListener('DOMContentLoaded', () => {
    const timeBar = document.getElementById('time-bar');
    const totalFrames = 33;
    let animationInterval = null;
    let juegoTerminado = false;

    window.detenerTemporizadorGlobal = function() {
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
        juegoTerminado = true;
    };

    function precargarImagenes(carpeta) {
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${carpeta}/${i}.png`;
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
        const nivel = window.nivelActual || 1;
        const carpetaTiempo = (nivel === 13 || nivel === 14) ? 'time' : 'tiempo';

        precargarImagenes(carpetaTiempo);
        await mostrarReadyGo();

        const dificultad = obtenerDificultadDeURL();
        const duraciones = { 1: 240000, 2: 36000, 3: 24000 };
        const velocidad = duraciones[dificultad] / totalFrames;
        let currentFrame = 1;

        timeBar.style.display = 'block';
        timeBar.src = `${carpetaTiempo}/1.png`;
        timeBar.style.imageRendering = 'pixelated';
        timeBar.style.pointerEvents = 'none';
        timeBar.style.position = 'absolute';
        timeBar.style.zIndex = '25';

        if (nivel === 13 || nivel === 14) {
            timeBar.style.width = '96px';
            timeBar.style.height = '16px';
            timeBar.style.left = '136px';
            timeBar.style.top = '40px';
        } else {
            timeBar.style.width = '16px';
            timeBar.style.height = '96px';
            timeBar.style.left = '2px';
            timeBar.style.bottom = '13px';
        }

        animationInterval = setInterval(() => {
            if (juegoTerminado) {
                clearInterval(animationInterval);
                return;
            }

            currentFrame++;
            if (currentFrame > totalFrames) {
                clearInterval(animationInterval);
                timeBar.src = `${carpetaTiempo}/33.png`;
                mostrarTiempoAgotado();
                return;
            }

            timeBar.src = `${carpetaTiempo}/${currentFrame}.png`;
        }, velocidad);
    }

    if (timeBar) iniciarJuego();
});

function obtenerDificultadDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('difficulty')) || 1;
}
