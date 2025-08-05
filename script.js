// Variables globales
window.currentLevelId = 1;
window.completedLevels = [1];
window.maxUnlockedLevel = 1;

const levelButtons = [
    {"id": 1, "x": 15, "y": 22, "unlocked": true},
    {"id": 2, "x": 41, "y": 22, "unlocked": false},
    {"id": 3, "x": 23, "y": 66, "unlocked": false},
    {"id": 4, "x": 41, "y": 84, "unlocked": false},
    {"id": 5, "x": 59, "y": 66, "unlocked": false},
    {"id": 6, "x": 21, "y": 100, "unlocked": false},
    {"id": 7, "x": 59, "y": 102, "unlocked": false},
    {"id": 8, "x": 39, "y": 118, "unlocked": false},
    {"id": 9, "x": 77, "y": 32, "unlocked": false},
    {"id": 10, "x": 97, "y": 16, "unlocked": false},
    {"id": 11, "x": 123, "y": 16, "unlocked": false},
    {"id": 12, "x": 95, "y": 50, "unlocked": false},
    {"id": 13, "x": 93, "y": 84, "unlocked": false},
    {"id": 14, "x": 119, "y": 84, "unlocked": false},
    {"id": 15, "x": 125, "y": 48, "unlocked": false},
    {"id": 16, "x": 143, "y": 66, "unlocked": false},
    {"id": 17, "x": 163, "y": 50, "unlocked": false}
];

document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.querySelector('.game-container');

    // --- Restaurar progreso desde localStorage ---
    const storedCompleted = JSON.parse(localStorage.getItem('completedLevels')) || [1];
    window.completedLevels = storedCompleted;
    window.maxUnlockedLevel = Math.max(...storedCompleted);

    storedCompleted.forEach(id => {
        const level = levelButtons.find(l => l.id === id);
        if (level) level.unlocked = true;
        const btn = document.querySelector(`.level-button[data-id="${id}"]`);
        if (btn) btn.classList.remove('locked');
    });

    // 1. Escalado responsivo
    function resizeGame() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const gameAspect = 240 / 135;
        const windowAspect = windowWidth / windowHeight;
        const scale = (windowAspect > gameAspect)
            ? windowHeight / 135
            : windowWidth / 240;
        gameContainer.style.transform = `scale(${scale})`;
    }

    // 🟨 Estrellas fijas en pantalla
    function insertarEstrellasFijas() {
        const crearEstrella = (id) => {
            const img = document.createElement('img');
            img.id = id;
            img.className = 'estrella-menu';
            img.src = 'estrellas/0.png';
            document.querySelector('.game-container').appendChild(img);
        };

        crearEstrella('estrella-facil');
        crearEstrella('estrella-medio');
        crearEstrella('estrella-dificil');
    }

    function actualizarEstrellasDelNivel(nivelId) {
        const progreso = JSON.parse(localStorage.getItem('progresoEstrellas')) || {};
        const datos = progreso[`nivel${nivelId}`] || {};

        document.getElementById('estrella-facil').src = datos.facil ? 'estrellas/1.png' : 'estrellas/0.png';
        document.getElementById('estrella-medio').src = datos.medio ? 'estrellas/2.png' : 'estrellas/0.png';
        document.getElementById('estrella-dificil').src = datos.dificil ? 'estrellas/3.png' : 'estrellas/0.png';
    }


    // 2. Crear botones de nivel
    function initLevelButtons() {
        const levelSelect = document.querySelector('.level-select');

        levelButtons.forEach(button => {
            const btn = document.createElement('div');
            btn.className = `level-button ${button.unlocked ? '' : 'locked'}`;
            btn.style.left = `${button.x}px`;
            btn.style.top = `${button.y}px`;
            btn.dataset.id = button.id;

            btn.addEventListener('click', () => {
                if (button.unlocked) {
                    window.currentLevelId = button.id;
                    actualizarEstrellasDelNivel(button.id); // 🟦 Actualiza estrellas
                }
            });

            levelSelect.appendChild(btn);
        });
    }

    // 3. Visual del progreso
    window.updateProgressVisual = () => {
        const progressLayer = document.getElementById('progress-layer');
        if (progressLayer) {
            progressLayer.src = `desbloqueados/nivel${window.maxUnlockedLevel}.png`;
        }
    };

    // 4. Desbloqueo progresivo con persistencia
    window.unlockNextLevel = (completedLevelId) => {
        const nextLevelId = completedLevelId + 1;
        const nextLevel = levelButtons.find(level => level.id === nextLevelId);

        if (nextLevel && !nextLevel.unlocked) {
            nextLevel.unlocked = true;
            window.completedLevels.push(nextLevelId);
            window.completedLevels = [...new Set(window.completedLevels)];
            window.maxUnlockedLevel = Math.max(...window.completedLevels);

            const nextLevelBtn = document.querySelector(`.level-button[data-id="${nextLevelId}"]`);
            if (nextLevelBtn) {
                nextLevelBtn.classList.remove('locked');
                nextLevelBtn.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
            }

            updateProgressVisual();
            localStorage.setItem('completedLevels', JSON.stringify(window.completedLevels));
        }
    };

    // 5. Nombre del nivel
    const nameDisplay = document.createElement('div');
    nameDisplay.className = 'level-name-display';
    nameDisplay.style.backgroundImage = 'url(nombre/nivel1.png)';
    gameContainer.appendChild(nameDisplay);

    // 6. Botones de dificultad
    const difficulties = [1, 2, 3];
    difficulties.forEach(diff => {
        const btn = document.createElement('img');
        btn.id = `difficulty-${diff}`;
        btn.className = 'difficulty-btn';
        btn.src = `dificultad/${diff}.png`;
        btn.alt = `Dificultad ${diff}`;
        btn.style.right = '12px';
        btn.style.top = `${33 + (diff - 1) * 19}px`;

        btn.addEventListener('click', () => {
            if (window.currentLevelId && isLevelUnlocked(window.currentLevelId)) {
                localStorage.setItem('currentLevel', window.currentLevelId);
                window.location.href = `Tperiodica.html?level=${window.currentLevelId}&difficulty=${diff}`;
            }
        });

        gameContainer.appendChild(btn);
    });

    // 7. Actualización del nombre
    function updateLevelName() {
        if (window.currentLevelId) {
            nameDisplay.style.backgroundImage = `url(nombre/nivel${window.currentLevelId}.png)`;
        }
    }

    // 8. Verificación de desbloqueo
    function isLevelUnlocked(levelId) {
        const level = levelButtons.find(l => l.id == levelId);
        return level ? level.unlocked : false;
    }

    setInterval(updateLevelName, 100);

    resizeGame();
    insertarEstrellasFijas(); // 🟨 Inicia las estrellas
    initLevelButtons();
    window.updateProgressVisual();
    actualizarEstrellasDelNivel(window.currentLevelId); // 🟦 Inicializa estrellas al cargar

    window.addEventListener('resize', resizeGame);
    document.addEventListener('gesturestart', e => e.preventDefault());

    // --- Señal desde gameLogic ---
    const nivelCompletado = parseInt(localStorage.getItem('levelCompleted'));
    if (!isNaN(nivelCompletado)) {
        unlockNextLevel(nivelCompletado);
        localStorage.removeItem('levelCompleted');
    }
});
