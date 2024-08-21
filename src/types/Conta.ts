import Armazenador from "./Armazenador.js";
import { ValidaDebito, ValidaDeposito } from "./Decorators.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js"

export class Conta {
    private nome: string;
    private saldo: number = Armazenador.obter<number>('saldo') || 0;
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(('transacoes'), (key: string, value: string) => {
        if (key === 'data') {
            return new Date(value);
        }
        return value;
    }) || [];

    constructor(nome: string) {
        this.nome = nome;
    }

    public getTitular(): string {
        return this.nome;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getDataAcesso(): Date {
        return new Date();
    }

    public getGrupoTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort(
            (t1, t2) => t2.data.getTime() - t1.data.getTime()
        );
        
        let labelAtualGrupoTransacao: string = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString(
                'pt-br', {month: "long", year: "numeric"}
            );

            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelAtualGrupoTransacao,
                    transacoes: []
                })
            }

            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    }

    @ValidaDebito
    private debitar(valor: number): void {
        this.saldo -= valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }

    @ValidaDeposito
    private depositar(valor: number): void {
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }

    public registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        } else if (
            novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA
            || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO
        ) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } else {
            throw new Error('Tipo de transação inválida');
        }
        
        this.transacoes.push(novaTransacao);
        Armazenador.salvar('transacoes', JSON.stringify(this.transacoes));
    }
}

export class ContaPremium extends Conta {
    registrarTransacao(transacao: Transacao): void {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            console.log('ganhou um bônus de 0.50 centavos');
            transacao.valor += 0.50;
        }

        super.registrarTransacao(transacao);
    }
}

const conta = new Conta('Mikaele Costa Mendonça');
const contaPremium = new ContaPremium('João Pedro Costa Mendonça');

export default conta;
