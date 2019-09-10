const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`${base} No es un número`);
            return;
        }
        if (!Number(limite)) {

            reject(`${limite} No es un número`);
            return;
        }


        data = ''
        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado} \n`;
        }

        resolve(data);

    });

}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`${base} No es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += ` ${base} * ${i} = ${resultado} \n`;


        }

        fs.writeFile(`tablasMultiplicar/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}