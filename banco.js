var banco = new Object();
banco.conta = "1324";
banco.saldo = 500;
banco.tipoConta = "conta corrente";
banco.agencia = "pacmey";
banco.buscarSaldo = function SaldoValor(){
    console.log("Seu saldo na conta é de " + this.saldo);
} 
banco.deposito = function DepositarValor(quantia){
    this.saldo += quantia;
    console.log(quantia + " foi depositada na sua conta, totalizando: " + this.saldo + " na conta.")
}
banco.saque = function SaquearValor(quantia){
    this.saldo -= quantia;
    console.log(quantia + " foi sacada de sua conta, agora tem: " + this.saldo + " na conta.")
}
banco.numeroConta = function NumeroConta() 
{
    console.log("Seu número da conta: " + this.conta);
};

banco.buscarSaldo();
banco.deposito(5);
banco.saque(20);
banco.numeroConta();