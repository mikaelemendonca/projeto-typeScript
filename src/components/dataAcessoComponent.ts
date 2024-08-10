import Conta from '../types/Conta.js';
import { FormatoData } from '../types/FormatoData.js';
import { formatarData } from '../utils/formaters.js';

renderizarDataAcesso();
function renderizarDataAcesso(): void {
    const elementoDataAcesso = document.querySelector(".block-saldo time");
    if (elementoDataAcesso) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}

const DataAcessoComponent = {
    atualizar() {
        renderizarDataAcesso();
    }
}

export default DataAcessoComponent;
