var numeroUm = parseFloat(prompt("Insira o número: "));
var operacao = prompt("Escolha a operação (+, -, *, /):");
var numeroDois = parseFloat(prompt("Insira o número: "));
var resultado = 0

if(operacao == "+"){
    resultado = numeroUm + numeroDois;
    console.log("O resultado da soma é: " + resultado);
}else if(operacao == "-"){
    resultado = numeroUm - numeroDois;
    console.log("O resultado da subtração é: " + resultado);
}else if(operacao == "*"){
    resultado = numeroUm * numeroDois;
    console.log("O resultado da multiplicação é: " + resultado);
}else if (operacao == "/"){
    resultado = numeroUm / numeroDois;
    console.log("O resultado da divisão é: " + resultado);
}else {
    console.log("Digite uma das opções válidas! Burooooo!");
}
