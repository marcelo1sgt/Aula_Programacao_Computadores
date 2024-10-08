// [] criam um vetor/array/matriz
var vetor = [];

// Para adicionar um elemento colocamos sua posição
vetor[0] = "Primeira coisa";
vetor[1] = 51;

// para exibir o conteudo de um array, devemos chamar pela posição
console.log("Posição 0", vetor[0]); // imprime "Primeira coisa"

// Para controlar as posições é comun ter um contador, geralmente i
var i = 0;

var array = [];

// usamos a variavel "i" para definir a posição
array[1] = 10;
// após seu uso, devemos aumentar seu valor em 1:
i++;
array[1] = 8; // aqui o i vale 1

console.log(array); // exibe tudo que está dentro do array (somente para testes)
