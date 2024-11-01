   var numeros = [];
   var condicao = "s";
   i = 0;
   
   while (condicao == "s") {
    numeros [i] = parseFloat(prompt("Digite um número."));
    i++;
    condicao = prompt("Digite [ s ] para continuar.");
   }

   var operacao = prompt("Escolha uma das seguintes operações: SOMA [ + ] ou MULTIPLICAÇÃO [ * ].")
   var total = 0;
   i = 0;
   
   if (operacao == "+") {
    while (i < numeros.length) {
        total += numeros[i];
        i++;
    }
    console.log("Os números digitados foram " + numeros + " e o valor da operação SOMA é " + total)
   } 
   else if (operacao == "*") {
    total = 1
    i = 0
    while (i < numeros.length) {
        total += numeros[i];
        i++;
        console.log("Os números digitados foram " + numeros + " e o valor da operação MULTIPLICAÇÃO é " + total)
    }
}