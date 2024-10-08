/*
var notaUm = parseFloat(prompt("Insira a nota: "));
var notaDois = parseFloat(prompt("Insira a nota: "));
var notaTres = parseFloat(prompt("Insira a nota: "));
var notaQuat = parseFloat(prompt("Insira a nota: "));

media = (notaUm + notaDois + notaTres + notaQuat) / 4
console.log("A media final é: " + media)
*/

var notas = [];
var i = 0;

// Recebe as notas
notas[i] = parseInt(prompt("Digite a nota nº " + (i + 1)));
i++;
notas[i] = parseInt(prompt("Digite a nota nº " + (i + 1)));
i++;
notas[i] = parseInt(prompt("Digite a nota nº " + (i + 1)));
i++;
notas[i] = parseInt(prompt("Digite a nota nº " + (i + 1)));

 var media = notas[0] + notas[1] + notas[2] + notas[3];
 media = media / notas.length;
 console.log("Média é: ", media);
