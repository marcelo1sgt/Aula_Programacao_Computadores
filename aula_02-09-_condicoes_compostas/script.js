/**
 * A primeira estrutura condicional é o IF
 * Ele é tem a anatomia de if(condição){}else{}
 * 
 * Porém, podemos ter mais de 1 condição,
 * neste caso usamos if(){} else if() {} ... else{}
 * 
 * Exeplo para a idade brasileira:
 *

var anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"))

// Cria um elemento de data
const data = new Date();

// Pega o ano do element de data
const anoAtual = data.getFullYear();

const idade = anoAtual - anoNascimento;
console.log("Sua idade é: " + idade);

if(idade >= 18){
    console.log("Você é maior de idade e pode:");
    console.log("1. Pode tirar a CNH!");
    console.log("2. É obrigado a votar!");
    console.log("3. Pode Consumir bebidas alcoólicas e entrar em qualquer lugar.")
} else if (idade >= 16){
    console.log("Você é menor de idade, porem:");
    console.log("Pode votar!");
    console.log("Pode ser emancipado!");
    console.log("Pode entrar em alguns lugares desacompanhado.");
} else{
    console.log("Você é completamente menor de idade!");
    console.log("É completamente dependente de um responsável!");
}

*/

var diaSemana = parseInt(prompt("Digite o dia da semana em número."));

if(diaSemana == 1){
    console.log("O dia da semana é Domingo");
} if(diaSemana == 2){
    console.log("O dia da semana é Segunda-Feira");
} if(diaSemana == 3){
    console.log("O dia da semana é Terça-Feira");
} if(diaSemana == 4){
    console.log("O dia da semana é Quarta-Feira");
} if(diaSemana == 5){
    console.log("O dia da semana é Quinta-Feira");
} if(diaSemana == 6){
    console.log("O dia da semana é Sexta-Feira");
} if(diaSemana == 7){
    console.log("O dia da semana é Sábado")
} else{
    console.log("Número inválido.")
}