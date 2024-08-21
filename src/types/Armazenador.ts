export class Armazenador {
    private constructor() { }

    public static salvar(chave: string, valor: any): void {
        localStorage.setItem(
            chave,
            JSON.stringify(valor)
        );
    }

    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;
        }

        if (reviver) {
            return JSON.parse(valor, reviver) 
        }
        return JSON.parse(valor);
    }
}

export default Armazenador;
