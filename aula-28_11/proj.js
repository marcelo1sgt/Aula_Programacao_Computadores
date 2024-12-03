/* Elabore um programa para armazenamento e exibição de chamados de manutenção, com Data, Cliente, Local e descrição. */
/*var listaChamados = [];
var i = 0;


function adicionarChamado()	{																		
	var chamados = {}
		chamados.data = prompt("Digite a data do chamado:"),
		chamados.cliente = prompt("Digite a cliente do chamado:"),
		chamados.local = prompt("Digite a local do chamado:"),
		chamados.descricao = prompt("Digite a descrição do chamado:")

		for (var i = 0; i < adicionarChamado.length; i++) {
			console.log(chamados[i].data,	"|", chamados[i].cliente, "|", chamados[i].local, "|", chamados[i].descricao)
		}
	}

	


function listarChamados(){
	// Aqui vai o código para listar os chamados.
}

var continua = 's';
while(continua == 's'){
		var opcao = parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - Listar Chamados"));
		
		if(opcao == 1){adicionarChamado();}else {listarChamados();}
		
		continua = prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
}

*/


var list = [];

var i = 0;

function adicionarChamado(){

	var chamado = {};

chamado.data = prompt(`Digite a DATA: `);

chamado.cliente = prompt(`Digite o nome do CLIENTE: `);

chamado.local = prompt(`Digite o LOCAL: `);

chamado.descricao = prompt(`Descreva o PROBLEMA: `);

list[i] = chamado;

}


function listChamado(){
	console.log(`= = = = = LISTA DE CHAMADOS = = = = =`);

	for(var i = 0; i < list.length; i++) {

	console.log(`DATA: `, list[i].data);

	console.log(`Nome do CLIENTE: `, list[i].cliente);

	console.log(`LOCAL: `, list[i].local);

	console.log(`Descrição do PROBLEMA: `, list[i].descricao);

	}

}

var continua = `s`;

while(continua == `s`) {
	var opcao = parseInt(prompt(`O que deseja fazer?\n1 - ADICIONAR chamado\n2 - LISTAR chamados`));

	if(opcao == 1) {adicionarChamado();} else {listChamado();}

	continua = prompt(`Deseja realizar novas TAREFAS? Digite [ s ] para confirmar:`);

}