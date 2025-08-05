// gameData.js
window.casillasPorNivel = {

    1: {
        casillas: [
            {id: "Li", x: 22,  y: 30},  // (Columna 1)
            {id: "Na", x: 22,  y: 47},
            {id: "K",  x: 22,  y: 64},
            {id: "Rb", x: 22,  y: 81},
            {id: "Cs", x: 22,  y: 98},
            {id: "Fr", x: 22,  y: 115}
        ]
    },
    // Nivel 2: Alcalinotérreos (Grupo 2)
    2: {
        casillas: [
            {id: "Be", x: 39,  y: 30},  // (22 + 17)
            {id: "Mg", x: 39,  y: 47},
            {id: "Ca", x: 39,  y: 64},
            {id: "Sr", x: 39,  y: 81},
            {id: "Ba", x: 39,  y: 98},
            {id: "Ra", x: 39,  y: 115}
        ]
    },
    // Nivel 3: Grupo del Boro (Grupo 13)
    3: {
        casillas: [
            {id: "B",  x: 86,  y: 30},  // (39 + 47)
            {id: "Al", x: 86,  y: 47},
            {id: "Ga", x: 86,  y: 64},
            {id: "In", x: 86,  y: 81},
            {id: "Tl", x: 86,  y: 98},
            {id: "Nh", x: 86,  y: 115}
        ]
    },
    // Nivel 4: Grupo del Carbono (Grupo 14)
    4: {
        casillas: [
            {id: "C",  x: 103, y: 30},  // (86 + 17)
            {id: "Si", x: 103, y: 47},
            {id: "Ge", x: 103, y: 64},
            {id: "Sn", x: 103, y: 81},
            {id: "Pb", x: 103, y: 98},
            {id: "Fl", x: 103, y: 115}
        ]
    },
    // Nivel 5: Grupo del Nitrógeno (Grupo 15)
    5: {
        casillas: [
            {id: "N",  x: 120, y: 30},  // (103 + 17)
            {id: "P",  x: 120, y: 47},
            {id: "As", x: 120, y: 64},
            {id: "Sb", x: 120, y: 81},
            {id: "Bi", x: 120, y: 98},
            {id: "Mc", x: 120, y: 115}
        ]
    },
    // Nivel 6: Calcógenos (Grupo 16)
    6: {
        casillas: [
            {id: "O",  x: 137, y: 30},  // (120 + 17)
            {id: "S",  x: 137, y: 47},
            {id: "Se", x: 137, y: 64},
            {id: "Te", x: 137, y: 81},
            {id: "Po", x: 137, y: 98},
            {id: "Lv", x: 137, y: 115}
        ]
    },
    // Nivel 7: Halógenos (Grupo 17)
    7: {
        casillas: [
            {id: "F",  x: 154, y: 30},  // (137 + 17)
            {id: "Cl", x: 154, y: 47},
            {id: "Br", x: 154, y: 64},
            {id: "I",  x: 154, y: 81},
            {id: "At", x: 154, y: 98},
            {id: "Ts", x: 154, y: 115}
        ]
    },
    // Nivel 8: Gases Nobles (Grupo 18)
    8: {
        casillas: [
            {id: "He", x: 171, y: 13},  // (154 + 17, y - 17)
            {id: "Ne", x: 171, y: 30},
            {id: "Ar", x: 171, y: 47},
            {id: "Kr", x: 171, y: 64},
            {id: "Xe", x: 171, y: 81},
            {id: "Rn", x: 171, y: 98},
            {id: "Og", x: 171, y: 115}
        ]
    },

    // Nivel 9: No metales
    9: {
        casillas: [
            {id: "H",  x: 22,  y: 13},  // Hidrógeno (sobre Litio)
            {id: "C",  x: 103, y: 30},  // Carbono (Grupo 14)
            {id: "N",  x: 120, y: 30},  // Nitrógeno
            {id: "P",  x: 120, y: 47},  // Fósforo
            {id: "O",  x: 137, y: 30},  // Oxígeno
            {id: "S",  x: 137, y: 47},  // Azufre
            {id: "Se", x: 137, y: 64},  // Selenio
            {id: "F",  x: 154, y: 30},  // Flúor
            {id: "Cl", x: 154, y: 47},  // Cloro
            {id: "Br", x: 154, y: 64},  // Bromo
            {id: "I",  x: 154, y: 81}   // Yodo
        ]
    },

    // Nivel 10: Metaloides
    10: {
        casillas: [
            {id: "B",  x: 86,  y: 30},  // Boro
            {id: "Si", x: 103, y: 47},  // Silicio
            {id: "Ge", x: 103, y: 64},  // Germanio
            {id: "As", x: 120, y: 64},  // Arsénico
            {id: "Sb", x: 120, y: 81},  // Antimonio
            {id: "Te", x: 137, y: 81},  // Telurio
            {id: "Po", x: 137, y: 98}   // Polonio
        ]
    },

    // Nivel 11: Otros metales
    11: {
        casillas: [
            {id: "Al", x: 86,  y: 47},  // Aluminio
            {id: "Ga", x: 86,  y: 64},  // Galio
            {id: "In", x: 86,  y: 81},  // Indio
            {id: "Tl", x: 86,  y: 98},  // Talio
            {id: "Nh", x: 86,  y: 115}, // Nihonio
            {id: "Sn", x: 103, y: 81},  // Estaño
            {id: "Pb", x: 103, y: 98},  // Plomo
            {id: "Fl", x: 103, y: 115}, // Flerovio
            {id: "Bi", x: 120, y: 98},  // Bismuto
            {id: "Mc", x: 120, y: 115}, // Moscovio
            {id: "Lv", x: 137, y: 115},// Livermorio
            {id: "At", x: 154, y: 98},  // Astato
            {id: "Ts", x: 154, y: 115}  // Teneso
        ]
    }
};