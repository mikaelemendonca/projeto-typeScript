import { Transacao } from '../types/Transacao.js';
import { TipoTransacao } from '../types/TipoTransacao.js';
import Conta from '../types/Conta.js';
import SaldoComponent from './saldoComponent.js';
import ExtratoComponent from './extratoComponent.js';

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        if (!elementoFormulario.checkValidity()) {
            alert('Por favor, preecha todos os campos.');
            return;
        }
    
        const inputTipoTransacao = document.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = document.querySelector("#valor") as HTMLInputElement;
        const inputData = document.querySelector("#data") as HTMLInputElement;
    
        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + " 00:00:00");
    
        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
    
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
    
        elementoFormulario.reset();
    } catch (error) {
        alert(error.message);
    }
});
