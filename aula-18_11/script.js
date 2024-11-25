/*
Elabore um programa que apresente e solicite qual lanche o usuário
deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e faça o processo se positivo.
Apresente a lista e solicite se o usuário deseja bebida, solicite a
quantidade e adicione a mesma lista de pedidos, solicite se deseja mais
produtos.
Ao final, apresente o pedido com todos os itens, total do lanches,
total das bedidas e total do pedido.
Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e
valor para frete caso seja entrega.
*/

/*
Bloco 1: Lista de Lanches

- Descrição: Este bloco cria uma lista chamada `listaLanches` que contém objetos
representando diferentes lanches. Cada objeto tem três propriedades: `codigo`,
`nome` e `preco`.
- Interação: Esta lista será usada posteriormente para exibir o menu de lanches
e para verificar os códigos dos lanches escolhidos pelo usuário.
*/

var listaLanches = [
    {codigo: 1, nome: "HAMBURGUER", preco: 10},
    {codigo: 2, nome: "X - SALADA", preco: 15},
    {codigo: 3, nome: "X - BACON ", preco: 20}
];

/*
Bloco 2: Exibição do Menu de Lanches

- Descrição: Este bloco exibe o menu de lanches no console. Primeiro, imprime o
cabeçalho do menu. Em seguida, usa um loop `for` para percorrer a lista
`listaLanches` e imprimir o código, nome e preço de cada lanche.
- Interação: Este bloco utiliza a lista `listaLanches` criada no Bloco 1 para
exibir as informações dos lanches.
*/

console.log("===== MENU LANCHES =====\n\nCódigo |      Nome      |  Preço\n");
for (var i = 0; i < listaLanches.length; i++) {
    console.log(listaLanches[i].codigo + "           " + listaLanches[i].nome + "    R$ " + listaLanches[i].preco);
}

/*
Bloco 3: Inicialização de Variáveis

- Descrição: Este bloco inicializa duas variáveis. `pedidos` é uma lista
vazia que armazenará os pedidos de lanches e bebidas. `condicao` é uma variável
de controle que será usada para continuar ou parar o loop de pedidos.
- Interação: Estas variáveis serão usadas no Bloco 4 para adicionar lanches
ao pedido e controlar o loop de pedidos.
*/

var pedidos = [];
var condicao = "s";

/*
Bloco 4: Adicionar Lanches ao Pedido

- Descrição: Este bloco usa um loop `while` para permitir que o usuário adicione
lanches ao pedido. Dentro do loop, o programa solicita ao usuário o código e a
quantidade do lanche desejado. Em seguida, usa um loop `for` para encontrar o
lanche correspondente na lista `listaLanches`. Se encontrar, adiciona o lanche à
lista `pedidos` com o nome, quantidade e valor total. O loop continua até que o
usuário digite "n" para a variável `condicao`.
- Interação: Este bloco interage com a lista `listaLanches` (Bloco 1) para
verificar os códigos dos lanches e com a lista `pedidos` (Bloco 3) para adicionar
os pedidos.
*/

while (condicao == "s") {
    var codigoLanches = parseInt(prompt("Digite o CÓDIGO do lanche desejado:"));
    var qtdeLanches = parseInt(prompt("Digite a QUANTIDADE de lanches desejada:"));

    for (var i = 0; i < listaLanches.length; i++) {
        if (codigoLanches == listaLanches[i].codigo) {
            pedidos[pedidos.length] = {
                nome: listaLanches[i].nome,
                quantidade: qtdeLanches,
                valor: listaLanches[i].preco * qtdeLanches
            }
        }
    }

    condicao = prompt("Deseja adicionar mais lanches? (s / n)");
}

/*
Bloco 5: Lista de Bebidas

- Descrição: Este bloco cria uma lista chamada `listaBebidas` que contém objetos
representando diferentes bebidas. Cada objeto tem três propriedades: `codigo`,
`nome` e `preco`.
- Interação: Esta lista será usada posteriormente para exibir o menu de bebidas
e para verificar os códigos das bebidas escolhidas pelo usuário.
*/

var listaBebidas = [
    {codigo: 1, nome:"      COCA - COLA ", preco: 10.50},
    {codigo: 2, nome:"      FANTA       ", preco: 10.50},
    {codigo: 3, nome:"      GUARANÁ     ", preco: 10.00},
    {codigo: 4, nome:"      SUCO NATURAL", preco: 12.00},
    {codigo: 5, nome:"      ÁGUA        ", preco: 5.00}
];

/*
Bloco 6: Exibição do Menu de Bebidas

- Descrição: Este bloco exibe o menu de bebidas no console. Primeiro, imprime o
cabeçalho do menu. Em seguida, usa um loop `for` para percorrer a lista
`listaBebidas` e imprimir o código, nome e preço de cada bebida.
- Interação: Este bloco utiliza a lista `listaBebidas` criada no Bloco 5 para
exibir as informações das bebidas.
*/

console.log("\n\n===== MENU BEBIDAS =====\n\nCódigo |     Nome      |   Preço\n");
for(i = 0; i < listaBebidas.length; i++) {
    console.log(listaBebidas[i].codigo + "  " + listaBebidas[i].nome + "    " + listaBebidas[i].preco);
}

/*
Bloco 7: Adicionar Bebidas ao Pedido

- Descrição: Este bloco usa um loop `while` para permitir que o usuário adicione
bebidas ao pedido. Dentro do loop, o programa solicita ao usuário o código e a
quantidade da bebida desejada. Em seguida, usa um loop `for` para encontrar a
bebida correspondente na lista `listaBebidas`. Se encontrar, adiciona a bebida
à lista `pedidos` com o nome, quantidade e valor total. O loop continua até que
o usuário digite "n" para a variável `condicao`.
- Interação: Este bloco interage com a lista `listaBebidas` (Bloco 5) para
verificar os códigos das bebidas e com a lista `pedidos` (Bloco 3) para adicionar
os pedidos.
*/

condicao = "s";
while(condicao == "s") {
    var codigoBebidas = parseInt(prompt("Digite o CÓDIGO da bebida desejada:"));
    var qtdeBebidas = parseInt(prompt("Digite a QUANTIDADE de bebidas desejada:"));

    for(i = 0; i < listaBebidas.length; i++) {
        if (codigoBebidas == listaBebidas[i].codigo) {
            pedidos[pedidos.length] = {
                nome: listaBebidas[i].nome,
                quantidade: qtdeBebidas,
                valor: listaBebidas[i].preco * qtdeBebidas
            }
        }
    }
    condicao = prompt("Deseja adicionar mais bebidas? (s / n)");
}

/*
Bloco 8: Exibir o Pedido Final

- Descrição: Este bloco exibe o pedido final com todos os itens no console.
Primeiro, imprime o cabeçalho do pedido. Em seguida, usa um loop `for` para
percorrer a lista `pedidos` e imprimir a quantidade, nome e valor de cada item.
- Interação: Este bloco interage com a lista `pedidos` (Bloco 3, Bloco 4 e
Bloco 7) para exibir os detalhes do pedido.
*/

console.log("\n\n=== PEDIDO FINAL ===");
var totalPedido = 0;
for (i = 0; i < pedidos.length; i++) {
    console.log(pedidos[i].quantidade + " unidade(s) de " + pedidos[i].nome + " = R$ " + pedidos[i].valor);
    totalPedido += pedidos[i].valor;
}
console.log("\nTotal do pedido: R$ " + totalPedido);
console.log("\n\n* * * AGRADECEMOS PELA PREFERÊNCIA * * *");

/*
Interação entre os Blocos

1. Bloco 1 e Bloco 2: A lista de lanches é criada e exibida no menu.
2. Bloco 3 e Bloco 4: As variáveis são inicializadas e os lanches são adicionados
ao pedido
*/