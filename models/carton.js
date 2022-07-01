const _ = require('lodash');
require('colors');
const Casilla = require('./casilla');
class Carton {

    #filas = 5
    #casillas = {}
    #nro
    constructor(nro, carton) {
        this.#nro = nro;
        for (let i = 0; i < this.#filas; i++) {
            for (let j = 0; j < 5; j++) {
                let valor = _.get(carton, `${i}.${j}`)
                _.set(this.#casillas, `${i}.${j}`, new Casilla(valor))
            }
        }

    }

    imprimirCarton() {

        let carton = ('*********************************\n' +
            this.#nro + '\n' +
            '*********************************\n').yellow;
        for (let i = 0; i < this.#filas; i++) {
            for (let j = 0; j < 5; j++) {
                let casilla = _.get(this.#casillas, `${i}.${j}`)
                carton += `${(casilla.check) ? this.pad(casilla.valor, 3).green : this.pad(casilla.valor, 3)
                    } |`
            }
            carton += '\n';
        }
        return carton;
    }

    marcarCasilla(valor) {
        for (let i = 0; i < this.#filas; i++) {
            for (let j = 0; j < 5; j++) {
                this.#casillas[`${i}`][`${j}`].validate(valor)
            }
        }
    }
    pad(value, width, z = ' ') {
        value = value + '';
        return value.length >= width ? value : new Array(width - value.length + 1).join(z) + value;
    }


}

module.exports = Carton