/* Elabore um programa que contenha uma lista de produtos:

 1 - Hamburguer - R$ 10
 2 - X-Salada - R$ 15
 3 - X-Bacon - R$ 20

 Solicite um código de produto, percorra a lista e exiba seu dados 
 Elabore um programa de cadastro de bebidas com código, nome e valor;
 Ao final, percorra a lista e exiba os dados.
*/

var listalanches = [
    { codigo: 1, nome: "Hamburguer", valor: "R$ " + 10 },
    { codigo: 2, nome: "X-Salada", valor: "R$ " + 15 },
    { codigo: 3, nome: "X-Bacon", valor: "R$ " + 20 },
];

console.log("Código | Nome      | Valor");
for (var i = 0; i < listalanches.length; i++) {
    console.log(listalanches[i].codigo, "   | ", listalanches[i].nome, " | ", listalanches[i].valor);
}

var codigo = parseInt(prompt("Escolha o CÓDIGO de um lanche:"));
var achou = false;
for (var i = 0; i < listalanches.length; i++) {
    if (codigo == listalanches[i].codigo) {
        console.log("\n\n === ESCOLHIDO FOI: === ");
        console.log(listalanches[i].codigo,"   | ", listalanches[i].nome, " | ", listalanches[i].valor);
        achou = true
    }
}
if(achou == false)  {
    console.error("\n\n === PRODUTO NÃO ENCONTRADO === ");
}