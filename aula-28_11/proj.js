/* Elabore um programa para armazenamento e exibição de chamados de manutenção, com Data, Cliente, Local e descrição. */
var listaChamados = [];
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

