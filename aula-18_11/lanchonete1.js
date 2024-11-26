var lanche = [
    {codigo: 1, nome: "Hamburguer", valor: 10.00 },
    {codigo: 2, nome: "X-Salada", valor: 15.00 },
    {codigo: 3, nome: "X-Bacon", valor: 20.00 },
];

console.log("Codigo  |Nome    | valor");

var resposta = "sim";
while(resposta === "sim"){
    var valorTotal = 0; 
    var quantidade = 1; // Inicialmente definir quantidade como 1
    for (var i = 0; i < lanche.length; i++){
        console.log(lanche[i].codigo, " |", lanche[i].nome, "  |", lanche[i].valor);
    }
    var codigo = parseInt(prompt("Escolha um lanche:"));
    var achou = false;
    for (var i = 0; i < lanche.length; i++){
        if (codigo === lanche[i].codigo) {
            console.log("\n\n === O lanche escolhido foi: === ");
            console.log(lanche[i].codigo, " |", lanche[i].nome, "  |", lanche[i].valor);
            achou = true;
            valorTotal += lanche[i].valor * quantidade;
            console.log("Valor Total: ", valorTotal);
            resposta = prompt("Deseja adicionar mais um lanche?\n Digite sim para continuar:");
        }
    }
    if(!achou){
        console.log("\n\n === Produto não encontrado: === ");
    }
}

var bebida = [
    {numero: 1, nome: "Coca-cola", preco: 7.00 },
    {numero: 2, nome: "Água", preco: 3.50 },
    {numero: 3, nome: "Suco Natural", preco: 8.00 },
    {numero: 4, nome: "Heineken", preco: 20.00 },
    {numero: 5, nome: "Heineken Long Neck", preco: 10.50 },
];

console.log("numero  | nome   | preco");
for (var i = 0; i < bebida.length; i++){
    console.log(bebida[i].numero, "  |", bebida[i].nome, "  |", bebida[i].preco);
}

var numero = parseInt(prompt("Escolha uma bebida:"));
achou = false;
for (var i = 0; i < bebida.length; i++){
    if(numero === bebida[i].numero){
        console.log("\n\n\ === A bebida escolhida foi: ===");
        console.log(bebida[i].numero, " |", bebida[i].nome, "  |", bebida[i].preco);
        achou = true;
    }
}

if(!achou){
    console.log("\n\n === Produto não encontrado: === ");
}
