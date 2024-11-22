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


/*
var produtos = [];

var i = 0;
var condicao = 1;

while(condicao){
    // Cria o produto vazio que vamos preencher 
    var produto = {};

    produto.codigo = i+1; // Como o 1 começa em zero, aumentamos 1;
    produto.nome = prompt("Digite o nome do produto:");
    produto.preco = parseFloat(prompt("Digite o preço do produto:"));

    produtos[i] = produto;

    condicao = parseInt(prompt("Digite 1 para adicionar mais produtos\nDigite 0 para SAIR"));
    
    i++;
}
//console.log(produtos);

// Como imprimir o nome do segundo produto da lista:
//console.log(produtos[1].nome);

for (i = 0; i < produtos.length; i++){
    console.log("Nome: " + produtos[i].nome + "\nPreço: " + produtos[i].preco + "\nCodigo: " + produtos[i].codigo)   
}
*/