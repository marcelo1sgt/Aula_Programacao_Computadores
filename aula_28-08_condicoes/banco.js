/*
Elabore um programa que:
1. Inicie o saldo da conta zerado.
2. Solicite um valor a ser depositado
3. Solicite um valor a ser sacado.
4. Apresente se é possivel sacar ou não o valor.
*/

var saldoAtual = parseInt(0)
var deposito = parseFloat(prompt("Valor a ser depositado: "));
var sacado = parseFloat(prompt("Valor a ser sacado: "));

if(sacado > deposito){
    console.log("Não é possivel sacar o valor")
}else{
    console.log("É possivel sacar o valor")
}
