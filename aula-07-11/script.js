// Quando temos uma qunatidade pré definida de repetições utilizamos o 'for'
// O 'for' possui 3 parâmetros: (contador; condição, modificador)
// Para repetir 3 vezes:

for (var i = 0; i < 3; i++){
    console.log("O 'i' vale: ", i);
}

//Todo Array pode ser percorrido com 'for'
console.log("Imprimindo o Array: ");

var frutas = ['Maçã', 'Banana', 'Uva', 'Pessego', 'Mamão', 'Melão'];
for (var i = 0; i < frutas.length; i++){
    console.log("A fruta [ " + i + " ] é: " + frutas[i]);
    console.log("A fruta [ " ,i, " ] é: " , frutas[i]);
    console.log(`A fruta [ ${i} ] é: ${frutas[i]}`);
}
