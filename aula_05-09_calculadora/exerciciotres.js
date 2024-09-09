var compra = parseFloat(prompt("Digite o valor da compra: "));
const frete = 50
var valorTotal = (compra + frete)

if (compra < 300){
    console.log("O valor total é: " + valorTotal)
}else{
    console.log("O valor total é: " + compra)
}

