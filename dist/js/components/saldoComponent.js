import Conta from '../types/Conta.js';
import { formatarMoeda } from '../utils/formaters.js';
renderizarSaldo();
function renderizarSaldo() {
    const elementoSaldo = document.querySelector(".saldo-valor .valor");
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
