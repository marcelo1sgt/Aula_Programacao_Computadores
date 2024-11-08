/*
Elabore um programa que receba uma lista de receitas, depois receba uma lista de despesas.
Ao final, some todas as receitas e despesas, exiba o total e apresente a diferença entre eles.
*/

var receitas = [];
var despesas = [];

var condicao = prompt("Digite [ r ] para receita, [ d ] para despesa e [ s ] para sair.");
var i = 0;
var j = 0;


while (condicao != "s") {
    if (condicao == "r") {
        receitas[i] = parseFloat(prompt("Digite o valor da receita: "));
        i++;
    } else if (condicao == "d") {
        despesas [j] = parseFloat(prompt("Digite o valor da despesa: "));
        i++;
    }
}