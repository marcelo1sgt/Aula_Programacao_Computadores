/*
Elabore um programa que receba tarefas a fazer, ao final exiba elas. */

var tarefas = [];
var continuar = 's';
var i = 0;

while(continuar == 's'){
    tarefas[i] = prompt("Digite a tarefa: ");
    i++;
    continuar = prompt("Digite s para adicionar mais tarefas: ");
}

i = 0;
while(i < tarefas.lenght){
    console.log("Tarefa [" + (i + 1) + "]: ", tarefas[i]);
    i++;
}