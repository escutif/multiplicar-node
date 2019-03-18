//console.log(process);

console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


console.log(parametro);
console.log(base);