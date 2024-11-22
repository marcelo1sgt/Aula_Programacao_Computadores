/*
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
*/

var listaBebidas = [];
var condicao = "s";
var i = 0;

while(condicao =="s") {
    var bebida = {};
    bebida.codigo = parseInt(prompt(`Digite o CÓDIGO da bebida:`));
    bebida.nome = prompt(`Digite o NOME da bebida:`);
    bebida.preco = parseFloat(prompt(`Digite o PREÇO da bebida:`));

    listaBebidas[i] = bebida;

    condicao = prompt(`Digite [ s ] para continuar.`);
    i++;
}

console.log("Código" +   "  |  " +   "Nome" + "  |  " +     "Preço");

for(i = 0; i < listaBebidas.length; i++) {
    console.log(listaBebidas[i].codigo + "     " + listaBebidas[i].nome + "      " + listaBebidas[i].preco);
}

