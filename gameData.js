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
    },

    // Nivel 12: metales de transicion
    12: {
        casillas: [
            {id: "Sc", x: 21,  y: 44},  // Escandio
            {id: "Y", x: 21,  y: 61},  // Itrio
            {id: "Ti", x: 38,  y: 44},  // Titanio
            {id: "Zr", x: 38,  y: 61},  // Circonio
            {id: "Hf", x: 38,  y: 78}, // Hafnio
            {id: "Rf", x: 38, y: 95},  // Rutherfornio
            {id: "V", x: 55, y: 44},  // Vanadio
            {id: "Nb", x: 55, y: 61}, // Niobio
            {id: "Ta", x: 55, y: 78},  // Tantalio
            {id: "Db", x: 55, y: 95}, // Dubnio
            {id: "Cr", x: 72, y: 44},// Cromo
            {id: "Mo", x: 72, y: 61},  // Molibdeno
            {id: "W", x: 72, y: 78},  // Wolframio
            {id: "Sg", x: 72,  y: 95},  // Seaborgio
            {id: "Mn", x: 89,  y: 44},  // Manganeso
            {id: "Tc", x: 89,  y: 61},  // Tecnecio
            {id: "Re", x: 89,  y: 78},  // Renio
            {id: "Bh", x: 89,  y: 95}, // Bohrio
            {id: "Fe", x: 106, y: 44},  // Hierro
            {id: "Ru", x: 106, y: 61},  // Rutenio
            {id: "Os", x: 106, y: 78}, // Osmio
            {id: "Hs", x: 106, y: 95},  // Hasio
            {id: "Co", x: 123, y: 44}, // Cobalto
            {id: "Rh", x: 123, y: 61},// Rodio
            {id: "Ir", x: 123, y: 78},  // Iridio
            {id: "Mt", x: 123, y: 95},  // Meitnerio
            {id: "Ni", x: 140,  y: 44},  // Niquel
            {id: "Pd", x: 140,  y: 61},  // Paladio
            {id: "Pt", x: 140,  y: 78},  // Platino
            {id: "Ds", x: 140,  y: 95}, // Darmstatio
            {id: "Cu", x: 157, y: 44},  // Cobre
            {id: "Ag", x: 157, y: 61},  // Plata
            {id: "Au", x: 157, y: 78}, // Oro
            {id: "Rg", x: 157, y: 95},  // Roentgenio
            {id: "Zn", x: 174, y: 44}, // Zinc
            {id: "Cd", x: 174, y: 61},// Cadmio
            {id: "Hg", x: 174, y: 78},  // Mercurio
            {id: "Cn", x: 174, y: 95}  // Copernicio
        ]
    },

    // Nivel 13: Lantanidos
    13: {
        casillas: [
            {id: "La", x: 2,  y: 49},  // Lantano
            {id: "Ce", x: 2,  y: 66},  // Cerio
            {id: "Pr", x: 19,  y: 66},  // Praseodimio
            {id: "Nd", x: 36,  y: 66},  // Neodimio
            {id: "Pm", x: 53,  y: 66}, // Prometio
            {id: "Sm", x: 70, y: 66},  // Samario
            {id: "Eu", x: 87, y: 66},  // Europio
            {id: "Gd", x: 104, y: 66}, // Gadolinio
            {id: "Tb", x: 121, y: 66},  // Terbio
            {id: "Dy", x: 138, y: 66}, // Disprosio
            {id: "Ho", x: 155, y: 66},// Holmio
            {id: "Er", x: 172, y: 66},  // Erbio
            {id: "Tm", x: 189, y: 66},  // Tulio
            {id: "Yb", x: 206, y: 66},  // Iterbio
            {id: "Lu", x: 223, y: 66}  // Lutecio
        ]
    },

    // Nivel 14: Actinidos
    14: {
        casillas: [
            {id: "Ac", x: 2,  y: 100},  // Actinio
            {id: "Th", x: 2,  y: 83},  // Torio
            {id: "Pa", x: 19,  y: 83},  // Protactinio
            {id: "U", x: 36,  y: 83},  // Uranio
            {id: "Np", x: 53,  y: 83}, // Neptunio
            {id: "Pu", x: 70, y: 83},  // Plutonio
            {id: "Am", x: 87, y: 83},  // Americio
            {id: "Cm", x: 104, y: 83}, // Curio
            {id: "Bk", x: 121, y: 83},  // Berkelio
            {id: "Cf", x: 138, y: 83}, // Californio
            {id: "Es", x: 155, y: 83},// Einstenio
            {id: "Fm", x: 172, y: 83},  // Fermio
            {id: "Md", x: 189, y: 83},  // Mendelevio
            {id: "No", x: 206, y: 83},  // Nobelio
            {id: "Lr", x: 223, y: 83}  // Lawrencio
        ]
    },

    // Nivel 15: Grupo A
    15: {
        casillas: [
            {id: "H",  x: 22,  y: 13},  // Hidrógeno
            {id: "Li", x: 22,  y: 30},  // Alcalinos
            {id: "Na", x: 22,  y: 47},
            {id: "K",  x: 22,  y: 64},
            {id: "Rb", x: 22,  y: 81},
            {id: "Cs", x: 22,  y: 98},
            {id: "Fr", x: 22,  y: 115},
            {id: "Be", x: 39,  y: 30},  // Alcalinos terreos
            {id: "Mg", x: 39,  y: 47},
            {id: "Ca", x: 39,  y: 64},
            {id: "Sr", x: 39,  y: 81},
            {id: "Ba", x: 39,  y: 98},
            {id: "Ra", x: 39,  y: 115},
            {id: "B",  x: 86,  y: 30},  // boroides
            {id: "Al", x: 86,  y: 47},
            {id: "Ga", x: 86,  y: 64},
            {id: "In", x: 86,  y: 81},
            {id: "Tl", x: 86,  y: 98},
            {id: "Nh", x: 86,  y: 115},
            {id: "C",  x: 103, y: 30},  // Carbonoides
            {id: "Si", x: 103, y: 47},
            {id: "Ge", x: 103, y: 64},
            {id: "Sn", x: 103, y: 81},
            {id: "Pb", x: 103, y: 98},
            {id: "Fl", x: 103, y: 115},
            {id: "N",  x: 120, y: 30},  // Nitrogenoides
            {id: "P",  x: 120, y: 47},
            {id: "As", x: 120, y: 64},
            {id: "Sb", x: 120, y: 81},
            {id: "Bi", x: 120, y: 98},
            {id: "Mc", x: 120, y: 115},
            {id: "O",  x: 137, y: 30},  // calcogenos
            {id: "S",  x: 137, y: 47},
            {id: "Se", x: 137, y: 64},
            {id: "Te", x: 137, y: 81},
            {id: "Po", x: 137, y: 98},
            {id: "Lv", x: 137, y: 115},
            {id: "F",  x: 154, y: 30},  // Halogenos
            {id: "Cl", x: 154, y: 47},
            {id: "Br", x: 154, y: 64},
            {id: "I",  x: 154, y: 81},
            {id: "At", x: 154, y: 98},
            {id: "Ts", x: 154, y: 115},
            {id: "He", x: 171, y: 13},  // Gases nobles
            {id: "Ne", x: 171, y: 30},
            {id: "Ar", x: 171, y: 47},
            {id: "Kr", x: 171, y: 64},
            {id: "Xe", x: 171, y: 81},
            {id: "Rn", x: 171, y: 98},
            {id: "Og", x: 171, y: 115}
        ]
    }
};