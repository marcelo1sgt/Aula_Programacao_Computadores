/* 
Elabore um programa que receba um numero e exiba sua tabuada usando o while */


var numero = parseInt(prompt("Digite um número para ver sua tabuada: "));
var contador = 1;
while (contador <= 10) {
    var resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
    contador++;
}






