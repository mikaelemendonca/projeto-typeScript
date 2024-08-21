export class Armazenador {
    constructor() { }
    static salvar(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    }
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
export default Armazenador;
