var idade = parseInt(prompt("Insira sua idade: "));
var classificacao;

if (idade >= 18){
    classificacao = "18";
} else if (idade >= 16){
    classificacao = "16";
} else if (idade >= 14){
    classificacao = "14";
} else if (idade >= 12){
    classificacao = "12";
} else{
    classificacao = "Livre";
}
    console.log("Classificação: " + classificacao);                 