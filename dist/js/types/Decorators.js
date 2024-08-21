export function ValidaDebito(target, propertyKey, descriptior) {
    const originalMethod = descriptior.value;
    descriptior.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error('O valor a ser debitado precisa ser maior do que zero!');
        }
        if (valorDoDebito > this.saldo) {
            throw new Error('Seu saldo é insuficiente para realizar a operação!');
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptior;
}
export function ValidaDeposito(target, propertyKey, descriptior) {
    const originalMethod = descriptior.value;
    descriptior.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error('O valor a ser depositado não pode ser menor ou igual a zero');
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptior;
}
