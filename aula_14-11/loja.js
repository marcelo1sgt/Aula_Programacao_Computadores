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
