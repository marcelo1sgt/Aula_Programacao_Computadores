// Para criar objetos, usamos {} chaves
// Objetos se parecem com Arrays, porém utilizam palavras suas posições

var objeto = {}; // Objeto vazio

var carro = {
    marca: "BYD", // Usa o padrão chave:valor
    modelo: "Seal"
};

// Para acessar ou alterar um valor, usamos . (ponto)
console.log("Marca:", carro.marca);

// Adicionar novos elementos no objeto só usar o ponto (.)
carro.ano = 2024;

console.log(carro); // Mostra todo o obejeto no console.
// IMPORTANTE: Imprimir o Array ou objeto inteiro só funciona no console.
