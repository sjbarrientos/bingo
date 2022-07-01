const Carton = require('../models/carton');

class Common {
    static llenarCartones() {
        let plantilla = require('../cartones.json');
        let cartones = [];
        Object.keys(plantilla).forEach(key => {
            cartones.push(new Carton(key, plantilla[key]));
        })
        return cartones;
    }
    static imprimir(cartones) {
        cartones.forEach(carton => {
            console.log(carton.imprimirCarton())
        })
    }
    static marcar(cartones, value) {
        cartones.forEach(carton => {
            carton.marcarCasilla(value)
        })
    }

    static readInput = () => new Promise((resolve) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question("proximo numero( Reiniciar: R Salir: S )", (option) => {
            readline.close();
            resolve(option);
        });
    });
}

module.exports = Common