// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        ciclo: 'I',
        materias: [
            {
                identificador: 1,
                unidadValorativa: 4,
                abreviatura: 'MTE115',
                nombreMateria: 'Métodos experimentales',
                aprobada: false,
                requisito: []
            },
            {
                identificador: 2,
                unidadValorativa: 4,
                abreviatura: 'MAT115',
                nombreMateria: 'Matematicas I',
                aprobada: false,
                requisito: []
            },
            {
                identificador: 3,
                unidadValorativa: 4,
                abreviatura: 'IAI115',
                nombreMateria: 'Introducción a la Informática',
                aprobada: false,
                requisito: []
            },
            {
                identificador: 4,
                unidadValorativa: 4,
                abreviatura: 'PSI115',
                nombreMateria: 'Psicologia Social',
                aprobada: false,
                requisito: []
            },
        ]
    },
    {
        ciclo: 'II',
        materias: [
            {
                identificador: 5,
                unidadValorativa: 4,
                abreviatura: 'FIR115',
                nombreMateria: 'Física I',
                aprobada: false,
                requisito: [1, 2]
            },
            {
                identificador: 6,
                unidadValorativa: 4,
                abreviatura: 'MAT215',
                nombreMateria: 'Matematicas II',
                aprobada: false,
                requisito: [2]
            },
            {
                identificador: 7,
                unidadValorativa: 4,
                abreviatura: 'PRN115',
                nombreMateria: 'Programación I',
                aprobada: false,
                requisito: [3]
            },
            {
                identificador: 8,
                unidadValorativa: 4,
                abreviatura: 'MSM115',
                nombreMateria: 'Manejo de Software para Microcomputadoras',
                aprobada: false,
                requisito: [3]
            },
            {
                identificador: 9,
                unidadValorativa: 4,
                abreviatura: 'HSE115',
                nombreMateria: 'Historia Social y Económica de El Salvador y C.A.',
                aprobada: false,
                requisito: [4]
            },
        ]
    },
    {
        ciclo: 'III',
        materias: [
            {
                identificador: 10,
                unidadValorativa: 4,
                abreviatura: 'FIR215',
                nombreMateria: 'Física II',
                aprobada: false,
                requisito: [5, 6]
            },
            {
                identificador: 11,
                unidadValorativa: 4,
                abreviatura: 'MAT315',
                nombreMateria: 'Matematicas III',
                aprobada: false,
                requisito: [6]
            },
            {
                identificador: 12,
                unidadValorativa: 4,
                abreviatura: 'PRN215',
                nombreMateria: 'Programación II',
                aprobada: false,
                requisito: [7]
            },
            {
                identificador: 13,
                unidadValorativa: 4,
                abreviatura: 'PYE115',
                nombreMateria: 'Probabilidad y Estadística',
                aprobada: false,
                requisito: [6]
            },
            {
                identificador: 14,
                unidadValorativa: 4,
                abreviatura: 'MEC115',
                nombreMateria: 'Modelos Económicos',
                aprobada: false,
                requisito: [6, 9]
            },
        ]
    },
    {
        ciclo: 'IV',
        materias: [
            {
                identificador: 15,
                unidadValorativa: 4,
                abreviatura: 'FIR315',
                nombreMateria: 'Física III',
                aprobada: false,
                requisito: [10]
            },
            {
                identificador: 16,
                unidadValorativa: 4,
                abreviatura: 'MAT315',
                nombreMateria: 'Matematicas III',
                aprobada: false,
                requisito: [11]
            },
            {
                identificador: 17,
                unidadValorativa: 4,
                abreviatura: 'ESD115',
                nombreMateria: 'Estructuras de Datos',
                aprobada: false,
                requisito: [12]
            },
            {
                identificador: 18,
                unidadValorativa: 4,
                abreviatura: 'PRN315',
                nombreMateria: 'Programación III',
                aprobada: false,
                requisito: [12]
            },
            {
                identificador: 19,
                unidadValorativa: 4,
                abreviatura: 'MEP115',
                nombreMateria: 'Métodos Probabilísticos',
                aprobada: false,
                requisito: [13]
            },
        ]
    },
    {
        ciclo: 'V',
        materias: [
            {
                identificador: 20,
                unidadValorativa: 4,
                abreviatura: 'SDU115',
                nombreMateria: 'Sistemas Digitales',
                aprobada: false,
                requisito: [7, 15]
            },
            {
                identificador: 21,
                unidadValorativa: 4,
                abreviatura: 'ANS115',
                nombreMateria: 'Análisis Numérico',
                aprobada: false,
                requisito: [7, 16]
            },
            {
                identificador: 22,
                unidadValorativa: 4,
                abreviatura: 'HDP115',
                nombreMateria: 'Herramientas de Productividad',
                aprobada: false,
                requisito: [9, 17]
            },
            {
                identificador: 23,
                unidadValorativa: 4,
                abreviatura: 'SYP115',
                nombreMateria: 'Sistemas y Procedimientos',
                aprobada: false,
                requisito: [18]
            },
            {
                identificador: 24,
                unidadValorativa: 4,
                abreviatura: 'MOP115',
                nombreMateria: 'Métodos de Optimización',
                aprobada: false,
                requisito: [19]
            },
        ]
    },
    {
        ciclo: 'VI',
        materias: [
            {
                identificador: 25,
                unidadValorativa: 4,
                abreviatura: 'I',
                nombreMateria: 'Técnica Eléctiva I',
                aprobada: false,
                requisito: []
            },
            {
                identificador: 26,
                unidadValorativa: 4,
                abreviatura: 'ARC115',
                nombreMateria: 'Arquitectura de Computadoras',
                aprobada: false,
                requisito: [20, 21]
            },
            {
                identificador: 27,
                unidadValorativa: 4,
                abreviatura: 'SIC115',
                nombreMateria: 'Sistemas Contables',
                aprobada: false,
                requisito: [22]
            },
            {
                identificador: 28,
                unidadValorativa: 4,
                abreviatura: 'IFI115',
                nombreMateria: 'Ingenieria Financiera',
                aprobada: false,
                requisito: [12]
            },
            {
                identificador: 29,
                unidadValorativa: 4,
                abreviatura: 'TSI115',
                nombreMateria: 'Teoría de sistemas',
                aprobada: false,
                requisito: [23]
            },
        ]
    },
    {
        ciclo: 'VII',
        materias: [
            {
                identificador: 30,
                unidadValorativa: 4,
                abreviatura: 'MIP115',
                nombreMateria: 'Microprogramación',
                aprobada: false,
                requisito: [26]
            },
            {
                identificador: 31,
                unidadValorativa: 4,
                abreviatura: 'II',
                nombreMateria: 'Técnica Eléctiva II',
                aprobada: false,
                requisito: []
            },
            {
                identificador: 32,
                unidadValorativa: 4,
                abreviatura: 'TAD115',
                nombreMateria: 'Teoría Administrativa',
                aprobada: false,
                requisito: [27]
            },
            {
                identificador: 33,
                unidadValorativa: 4,
                abreviatura: 'DSI115',
                nombreMateria: 'Diseño de Sistemas I',
                aprobada: false,
                requisito: [27, 29]
            },
            {
                identificador: 34,
                unidadValorativa: 4,
                abreviatura: 'III',
                nombreMateria: 'Técnica Eléctiva III',
                aprobada: false,
                requisito: []
            },
        ]
    },
    {
        ciclo: 'VIII',
        materias: [
            {
                identificador: 35,
                unidadValorativa: 4,
                abreviatura: 'COS115',
                nombreMateria: 'Comunicaciones I',
                aprobada: false,
                requisito: [30]
            },
            {
                identificador: 36,
                unidadValorativa: 4,
                abreviatura: 'SIO115',
                nombreMateria: 'Sistemas Operativos',
                aprobada: false,
                requisito: [30]
            },
            {
                identificador: 37,
                unidadValorativa: 4,
                abreviatura: 'ANF115',
                nombreMateria: 'Análisis Financiero',
                aprobada: false,
                requisito: [28, 32]
            },
            {
                identificador: 38,
                unidadValorativa: 4,
                abreviatura: 'DSI215',
                nombreMateria: 'Diseño de Sistemas II',
                aprobada: false,
                requisito: [33]
            },
            {
                identificador: 39,
                unidadValorativa: 4,
                abreviatura: 'IV',
                nombreMateria: 'Técnica Eléctiva IV',
                aprobada: false,
                requisito: []
            },
        ]
    },
    {
        ciclo: 'IX',
        materias: [
            {
                identificador: 40,
                unidadValorativa: 4,
                abreviatura: 'LPR115',
                nombreMateria: 'Legislación Profesional',
                aprobada: false,
                requisito: [],
                uv: 120
            },
            {
                identificador: 41,
                unidadValorativa: 4,
                abreviatura: 'RHU115',
                nombreMateria: 'Recursos Humanos',
                aprobada: false,
                requisito: [32]
            },
            {
                identificador: 42,
                unidadValorativa: 4,
                abreviatura: 'BAD115',
                nombreMateria: 'Bases de Datos',
                aprobada: false,
                requisito: [36, 38]
            },
            {
                identificador: 43,
                unidadValorativa: 4,
                abreviatura: 'SGI115',
                nombreMateria: 'Sistemas de Información Gerencial',
                aprobada: false,
                requisito: [38]
            },
            {
                identificador: 44,
                unidadValorativa: 4,
                abreviatura: 'V',
                nombreMateria: 'Técnica Eléctiva V',
                aprobada: false,
                requisito: []
            },
        ]
    },
    {
        ciclo: 'X',
        materias: [
            {
                identificador: 45,
                unidadValorativa: 4,
                abreviatura: 'CPR115',
                nombreMateria: 'Consultoría Profesional',
                aprobada: false,
                requisito: [],
                uv: 150
            },
            {
                identificador: 46,
                unidadValorativa: 4,
                abreviatura: 'ACC115',
                nombreMateria: 'Administración de Centros de Cómputo',
                aprobada: false,
                requisito: [41, 42, 43]
            },
            {
                identificador: 47,
                unidadValorativa: 4,
                abreviatura: 'API115',
                nombreMateria: 'Administración de Proyectos Informáticos',
                aprobada: false,
                requisito: [37, 43]
            },
            {
                identificador: 48,
                unidadValorativa: 4,
                abreviatura: 'VI',
                nombreMateria: 'Técnica Eléctiva VI',
                aprobada: false,
                requisito: []
            },
        ]
    },
];