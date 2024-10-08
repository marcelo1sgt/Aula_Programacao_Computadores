// While é um laço de repetição
// Que se repete até que a condição seja atendida (true)

var notas = [];
var i = 0;

while (i < 4){
    notas[i] = parseInt(Prompt(`Digite a nota [ ${i + 1} ]`));
    i++;
}

i = 0;
var media = 0;
while (i < notas.length) {
    media += notas[i];
    i++;
}
media = media / notas.length;
console.log(`A Média é: ${media}`)
