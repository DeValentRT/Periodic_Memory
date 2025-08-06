document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuración inicial
    const nivel = window.nivelActual;
    const elementosNivel = window.casillasPorNivel[nivel]?.casillas || [];
    
    // Copia de elementos disponibles
    let elementosDisponibles = [...elementosNivel];
    let elementoObjetivo = null;
    let elementoObjetivoUI = null;
    const elementosCompletados = [];
    let fondoAyuda = null;
    
    // Variables para el sistema de vidas
    let vidas = 3;
    let juegoActivo = true;
    let temporizador = null;
    let estrellasContainer = null;

    // 2. Inicializar vidas según dificultad
    const dificultad = obtenerDificultadDeURL();
    vidas = dificultad === 3 ? 1 : 3;
    actualizarVidasUI();

    // 3. Función para actualizar vidas
    function actualizarVidasUI() {
        const vidasImg = document.getElementById('vidas-imagen');
        if (!vidasImg) {
            const img = document.createElement('img');
            img.id = 'vidas-imagen';
            img.style.cssText = `
                position: absolute;
                left: 48px;
                top: 2px;
                width: 48px;
                height: 16px;
                z-index: 100;
                pointer-events: none;
                image-rendering: pixelated;
            `;
            document.querySelector('.game-container').appendChild(img);
        }
        document.getElementById('vidas-imagen').src = `vidas/${Math.max(0, vidas)}.png`;
    }

    // 4. Crear UI para elemento objetivo
    function crearObjetivoUI() {
        const objetivoUI = document.createElement('img');
        objetivoUI.id = 'elemento-objetivo';
        objetivoUI.style.cssText = `
            position: absolute;
            right: 21px;
            top: 16px;
            width: 16px;
            height: 16px;
            z-index: 100;
            pointer-events: none;
            transition: all 0.5s ease;
        `;
        document.querySelector('.game-container').appendChild(objetivoUI);
        return objetivoUI;
    }

    // 5. Crear fondo de ayuda (solo para dificultad fácil)
    function crearFondoAyuda() {
        const dificultad = obtenerDificultadDeURL();
        const nivelActual = obtenerNivelDeURL(); // Asegúrate de que esta función devuelva número

        if (dificultad === 1) {
            fondoAyuda = document.createElement('img');
            fondoAyuda.id = 'fondo-ayuda';

            let rutaFondo;
     
            if (nivelActual >= 1 && nivelActual <= 11 || nivelActual === 15) {
                rutaFondo = 'fondo/grupo.png';
            } else if (nivelActual === 12) {
                rutaFondo = 'fondo/grupo1.png';
            } else if (nivelActual === 13 || nivelActual === 14) {
                rutaFondo = 'fondo/grupo2.png';
            } else {
                rutaFondo = ''; // Si no aplica, puedes dejar vacío o ocultar
            }

            if (rutaFondo) {
                fondoAyuda.src = rutaFondo;
                fondoAyuda.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 240px;
                    height: 135px;
                    z-index: 5;
                    pointer-events: none;
                `;
                document.querySelector('.game-container').prepend(fondoAyuda);
            }
        }
    }

    // 6. Selección de nuevo objetivo
    function seleccionarNuevoObjetivo() {
        if (elementosDisponibles.length === 0) {
            mostrarPantallaFinal(3); // Victoria
            const prevCompleted = JSON.parse(localStorage.getItem('completedLevels')) || [1];
            if (!prevCompleted.includes(window.nivelActual)) {
                prevCompleted.push(window.nivelActual);
                localStorage.setItem('completedLevels', JSON.stringify(prevCompleted));
            }
            localStorage.setItem('levelCompleted', window.nivelActual); // Compatibilidad con el menú
            elementoObjetivoUI.style.display = 'none';
            ocultarTodasLasAyudas();
            return false;
        } 

        const randomIndex = Math.floor(Math.random() * elementosDisponibles.length);
        elementoObjetivo = elementosDisponibles[randomIndex];
        
        const imagenId = window.elementData[elementoObjetivo.id]?.nombre || 1;
        elementoObjetivoUI.src = `elements/${imagenId}.png`;
        elementoObjetivoUI.style.display = 'block';
        
        mostrarAyudasSegunDificultad(elementoObjetivo.id);
        
        return true;
    }

    // 7. Mostrar/ocultar ayudas según dificultad
    function mostrarAyudasSegunDificultad(elementoId) {
      const dificultad = obtenerDificultadDeURL(); // 1=fácil, 2=medio, 3=difícil
      const elementoInfo = window.elementData[elementoId];
      const nivelActual = window.nivelActual;

      ocultarAyudasVisuales();
      if (!elementoInfo) return;

      const ayudaNombre = document.getElementById("ayuda-nombre");
      const ayudaFamilia = document.getElementById("ayuda-familia");
      const ayudaGrupo = document.getElementById("ayuda-grupo");

      // 🧭 Posiciones personalizadas para niveles 13 y 14
      if (nivelActual === 13 || nivelActual === 14) {
        ayudaNombre.style.left = "143px";
        ayudaNombre.style.top = "8px";
        ayudaFamilia.style.left = "142px";
        ayudaFamilia.style.top = "23px";
      } else {
        // Posiciones estándar por defecto (CSS o layout general)
        ayudaNombre.style.right = "0";
        ayudaNombre.style.top = "32px";
        ayudaFamilia.style.right = "0";
        ayudaFamilia.style.bottom = "7px";
      }

      // 🧩 Lógica por dificultad
      if (dificultad === 1) { // fácil: nombre + familia
        ayudaNombre.src = `elemento/${elementoInfo.nombre}.png`;
        ayudaFamilia.src = `familia/${elementoInfo.familia}.png`;
    
        ayudaNombre.style.display = "block";
        ayudaFamilia.style.display = "block";

        // Solo mostrar grupo si no es nivel 13 ni 14
        if (nivelActual !== 13 && nivelActual !== 14) {
          ayudaGrupo.src = `grupo/${elementoInfo.grupo}.png`;
          ayudaGrupo.style.display = "block";
        } else {
          ayudaGrupo.style.display = "none";
        }

        if (fondoAyuda) fondoAyuda.style.display = "block";
      } else if (dificultad === 2) { // medio: solo nombre
        ayudaNombre.src = `elemento/${elementoInfo.nombre}.png`;
    
        ayudaNombre.style.display = "block";

        // Solo mostrar grupo si no es nivel 13 ni 14
        if (nivelActual !== 13 && nivelActual !== 14) {
          ayudaFamilia.src = `familia/${elementoInfo.familia}.png`;
          ayudaFamilia.style.display = "block";
        } else {
          ayudaFamilia.style.display = "none";
        } 
    
        ayudaGrupo.style.display = "none";
        if (fondoAyuda) fondoAyuda.style.display = "none";
      } else { // difícil: ninguna ayuda
        ayudaNombre.style.display = "none";
        ayudaFamilia.style.display = "none";
        ayudaGrupo.style.display = "none";
        if (fondoAyuda) fondoAyuda.style.display = "none";
      }
    }

    // 8. Ocultar ayudas visuales
    function ocultarAyudasVisuales() {
        document.getElementById('ayuda-nombre').style.display = 'none';
        document.getElementById('ayuda-familia').style.display = 'none';
        document.getElementById('ayuda-grupo').style.display = 'none';
    }

    // 10. Crear elemento persistente completado
    function crearElementoPersistente(elemento) {
        const elementoInfo = window.elementData[elemento.id];
        if (!elementoInfo) return;
        
        const elementoPersistente = document.createElement('img');
        elementoPersistente.className = 'elemento-completado';
        elementoPersistente.src = `elements/${elementoInfo.nombre}.png`;
        elementoPersistente.style.cssText = `
            position: absolute;
            left: ${elemento.x}px;
            top: ${elemento.y}px;
            width: 16px;
            height: 16px;
            z-index: 35;
            pointer-events: none;
        `;
        document.querySelector('.game-container').appendChild(elementoPersistente);
        elementosCompletados.push(elementoPersistente);
    }

    // 11. Guardar progreso de estrellas
    function guardarProgresoEstrellas(nivel, dificultad) {
        const progreso = JSON.parse(localStorage.getItem('progresoEstrellas')) || {};
        if (!progreso[`nivel${nivel}`]) {
            progreso[`nivel${nivel}`] = { facil: false, medio: false, dificil: false };
        }
        
        if (dificultad === 1) progreso[`nivel${nivel}`].facil = true;
        else if (dificultad === 2) progreso[`nivel${nivel}`].medio = true;
        else if (dificultad === 3) progreso[`nivel${nivel}`].dificil = true;
        
        localStorage.setItem('progresoEstrellas', JSON.stringify(progreso));
    }

    // 12. Mostrar estrellas de progreso
    function mostrarEstrellasProgreso() {
        if (!estrellasContainer) {
            estrellasContainer = document.createElement('div');
            estrellasContainer.style.cssText = `
                position: absolute;
                z-index: 215;
                bottom: 0; /* Aseguramos que se alinee desde abajo */
                left: 0;
            `;
            document.querySelector('.game-container').appendChild(estrellasContainer);
        }

        // Posiciones ajustadas desde la esquina inferior izquierda
        const posiciones = [
            { left: '48px', bottom: '49px' },  // Estrella 1: 48px derecha, 49px arriba
            { left: '65px', bottom: '44px' },  // Estrella 2: +17px derecha, -5px arriba (relativo a Estrella 1)
            { left: '82px', bottom: '49px' }   // Estrella 3: +17px derecha, +5px abajo (relativo a Estrella 2)
        ];

        estrellasContainer.innerHTML = '';

        const progreso = JSON.parse(localStorage.getItem('progresoEstrellas')) || {};
        const nivelActual = `nivel${window.nivelActual}`;
        const { facil, medio, dificil } = progreso[nivelActual] || { facil: false, medio: false, dificil: false };

        for (let i = 0; i < 3; i++) {
            const estrella = document.createElement('img');
            estrella.className = 'estrella-progreso';
            estrella.style.cssText = `
                position: absolute;
                left: ${posiciones[i].left};
                bottom: ${posiciones[i].bottom};
                width: 18px;
                height: 18px;
                image-rendering: pixelated;
            `;

            if (i === 0 && facil) estrella.src = 'estrellas/1.png';
            else if (i === 1 && medio) estrella.src = 'estrellas/2.png';
            else if (i === 2 && dificil) estrella.src = 'estrellas/3.png';
            else estrella.src = 'estrellas/0.png';

            estrellasContainer.appendChild(estrella);
        }
    }

    // 13. Manejo de clics
    function manejarClicCasilla(event) {
        const casilla = event.target.closest('.casilla-elemento');
        if (!casilla || !elementoObjetivo || !juegoActivo || casilla.classList.contains('casilla-bloqueada')) return;

        if (casilla.dataset.id === elementoObjetivo.id) {
            crearElementoPersistente(elementoObjetivo);
            casilla.classList.add('casilla-bloqueada');
            elementosDisponibles = elementosDisponibles.filter(e => e.id !== elementoObjetivo.id);

            if (obtenerDificultadDeURL() === 1) {
                vidas = 3;
                actualizarVidasUI();
            }
    
            if (!seleccionarNuevoObjetivo()) {
                console.log("¡Nivel completado!");
            }
        } else {
            vidas--;
            actualizarVidasUI();
        
            if (vidas <= 0) {
                juegoActivo = false;
                mostrarPantallaFinal(2);
            }
        }
    }

    // 14. Mostrar pantalla final
    function mostrarPantallaFinal(tipo) {
        juegoActivo = false;
        if (window.detenerTemporizadorGlobal) window.detenerTemporizadorGlobal();

        // Guardar progreso y mostrar estrellas
        if (tipo === 3) {
            guardarProgresoEstrellas(window.nivelActual, obtenerDificultadDeURL());
            mostrarEstrellasProgreso();
        }

        const pantalla = document.createElement('img');
        pantalla.src = `pantalla_final/${tipo}.png`;
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
            z-index: 220;
            cursor: pointer;
        `;
        botonVolver.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        document.querySelector('.game-container').appendChild(botonVolver);

        // Botón Reiniciar (excepto en victoria)
        if (tipo !== 3) {
            const botonReiniciar = document.createElement('img');
            botonReiniciar.src = 'button/1.png';
            botonReiniciar.className = 'boton-final';
            botonReiniciar.style.cssText = `
                position: absolute;
                left: 37px;
                bottom: 15px;
                width: 16px;
                height: 16px;
                z-index: 220;
                cursor: pointer;
            `;
            botonReiniciar.addEventListener('click', () => {
                window.location.reload();
            });
            document.querySelector('.game-container').appendChild(botonReiniciar);
        }

        document.querySelector('.game-container').classList.add('pausado');
    }

    // Inicialización
    elementoObjetivoUI = crearObjetivoUI();
    crearFondoAyuda();
    seleccionarNuevoObjetivo();
    document.querySelector('.game-container').addEventListener('click', manejarClicCasilla);
});

function obtenerDificultadDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('difficulty')) || 1;
}