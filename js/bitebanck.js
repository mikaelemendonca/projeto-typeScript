let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preecha todos os campos.');
        return;
    }

    const inputTipoTransacao = document.querySelector("#tipoTransacao");
    const inputValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao == 'Depósito') {
        saldo += valor
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor
    } else {
        alert('Tipo de transação inválida');
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    elementoFormulario.reset();
});

