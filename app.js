const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

console.log('Base=', argv.base);
console.log('Limite=', argv.limite);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        // console.log('Comando listar')
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //  console.log('Comando crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocodo')

}


//console.log('----------');
//console.log(argv);

//crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(e => console.log(e));