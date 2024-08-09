// Tipos Primitivos
let valor: number = 3000;
let nome: string = '';
let isPago: boolean = false;

let qualquer: any = "";
qualquer = 27;

// Arrays
const lista = [];
lista.push('Mika', 27, true, []);

const listaNumeros: number[] = [21, 13.5, 5.01];

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string,
    valor: number,
    data: Date
};

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    valor: 10,
    data: new Date('2024-08-08')
};


