/*
Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e faça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total do lanches, total das bedidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega.
*/

var listalanches = [
    { codigo: 1, nome: "Hamburguer", valor: "R$ " + 10 },
    { codigo: 2, nome: "X-Salada", valor: "  R$ " + 15 },
    { codigo: 3, nome: "X-Bacon", valor: "   R$ " + 20 },
];

console.log("Código | Nome      | Valor");
for (var i = 0; i < listalanches.length; i++) {
    console.log(listalanches[i].codigo + "  |   " + listalanches[i].nome + "    |   " + listalanches[i].valor);
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