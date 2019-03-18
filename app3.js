const argv = require('yargs')
    .command('listar',
        'Imprime en consola la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
    .command('crear',
        'Genera un archivo con la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                alias: 'l',
                default: 10
            }
        })
    .help()
    .argv;

console.log('Base=', argv.base);
console.log('Limite=', argv.limite);

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        // console.log('Comando listar')
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //  console.log('Comando crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
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