import Conta from '../types/Conta.js';
import SaldoComponent from './saldoComponent.js';
import ExtratoComponent from './extratoComponent.js';
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        if (!elementoFormulario.checkValidity()) {
            alert('Por favor, preecha todos os campos.');
            return;
        }
        const inputTipoTransacao = document.querySelector("#tipoTransacao");
        const inputValor = document.querySelector("#valor");
        const inputData = document.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + " 00:00:00");
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
