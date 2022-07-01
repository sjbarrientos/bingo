class Casilla {

    #valor
    #check
    constructor(valor) {
        this.#valor = valor;
        this.#check = (valor === 'FUN') ? true : false;

    }

    get valor() {
        return this.#valor;
    }
    set valor(valor) {
        this.#valor = valor;
    }
    get check() {
        return this.#check;
    }
    set check(check) {
        this.#check = check;
    }
    validate = (valor) => {
        if (this.#valor === valor) {
            this.#check = !this.check
        }
    }
}



module.exports = Casilla;