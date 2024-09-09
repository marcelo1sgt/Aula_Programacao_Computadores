var idade = parseInt(prompt("Insira sua idade: "));
var classificacao;

if (idade <12){
    classificacao = "Livre";
} else if (idade < 14){
    classificacao = "12";
} else if (idade <16){
    classificacao = "14";
} else if (idade <18){
    classificacao = "16";
} else{
    classificacao = "18";
}
    console.log("Classificação: " + classificacao);