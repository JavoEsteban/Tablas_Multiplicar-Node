const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.red))
            .catch(err => console.log(err))
        console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green('Archivo creado:'), archivo))
            .catch(err => console.log(err))
        console.log('Crear');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);