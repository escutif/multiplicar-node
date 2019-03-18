const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('=========================================='.green);
    console.log(`=============tabla de ${base}=================`.green);
    console.log('=========================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.red);
    }
    console.log('=========================================='.green);

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un numero!');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-limite-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}