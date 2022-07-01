const Common = require("./utils/common");

let condition = true;
let cartones = Common.llenarCartones()


const main = async () => {
    do {
        console.clear()

        Common.imprimir(cartones)

        let option = await Common.readInput();
        switch (option) {
            case 'R': {
                cartones = Common.llenarCartones()
                break;
            }
            case 'S': {
                condition = false
                break;
            }

            default:
                Common.marcar(cartones, option);
                break;
        }
        console.clear()
    } while (condition);

}

main()                  