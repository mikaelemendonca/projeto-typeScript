// Tipos Primitivos
let valor = 3000;
let nome = '';
let isPago = false;
let qualquer = "";
qualquer = 27;
// Arrays
const lista = [];
lista.push('Mika', 27, true, []);
const listaNumeros = [21, 13.5, 5.01];
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    valor: 10,
    data: new Date('2024-08-08')
};
