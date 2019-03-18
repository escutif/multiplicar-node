const { crearArchivo } = require('./multiplicar/multiplicar')
    //let base = '4e';

//console.log(module)

//console.log(multiplicar)
//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`));

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));