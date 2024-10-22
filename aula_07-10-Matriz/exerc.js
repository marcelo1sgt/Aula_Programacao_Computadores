var numeros = [];
var condicao = 'sim';
var i = 0;

while(condicao == 'sim'){
    numeros[i] = parseFloat(prompt("Digite um número: "));
    i++;

    condicao = prompt("Deseja adicionar mais números?\n Digite Sim para continuar");
}

var operacao = prompt("Digite + para somar e * para multiplicar")

if(operacao == "+"){
    var total = 0;
    i = 0;

    while (i < numeros.lenght) {
        total += numeros[i];
        i++;
        
    }
}else {
    var total = 0;
    i = 0;

    while (i < numeros.lenght) {
        total *= numeros[i];
        i++;
    }
}
console.log("O Total é: ", total);
