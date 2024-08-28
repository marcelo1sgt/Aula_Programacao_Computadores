/*

var palavraVariavel = ?

Funções:
prompt(" "):string
parseInt(" "):number
parseFloat(" "):number
console.log(" "):void

Operadores:
+ Soma ou concatena
- Subtrai
* Multiplica
/ Divide

Condições:
if(var ou texto/número ____ var ou texto/número): Retorna um Boolean True or False
== Igual/Comparação
>  Maior
>= Maior igual
<  Menor
<= Menor igual
!= Diferente

*/

var anoAtual = 2024;
var anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
var idade = anoAtual - anoNascimento;

if(idade >= 18){
    console.log("Você é maior de idade no Brasil!");
    console.log("Você é obrigado a votar!");
}else{
    console.log("Você é menor de idade no Brasil!");
}

// Manipulando o if
console.log("Usando apenas o > (idade > 17)");
if(idade > 17){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

console.log("Invertendo o resultado idade < 18 ");
if (idade < 18){
    console.log("Menor de idade!");
}else{
    console.log("Maior de idade!");
}











