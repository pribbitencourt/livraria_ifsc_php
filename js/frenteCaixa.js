$(document).ready(function() {
	$("#btn-buscar").click(function() {
	   $.ajax("http://localhost:8080/ProjetoFinal_Livraria/buscaProduto?titulo="+ $("#titulo-produto").val())
	   .done(function(data){
		   console.dir(data);
		   var produto = jQuery.parseJSON(data);
		   $("#descricaoProduto").val(produto.descricao);
		   $("#valorUnitario").val(produto.valor);
	   })
	   .fail(function(){
		   alert("deu ruim!");
	   })
	});
	$("#quantidade").change(function(){
		$("#valorTotal").val($("#quantidade").val() * $("#valorUnitario").val())
	});
	$("#btn-desconto").click(function(){
		$("#valorTotal").val($("#valorTotal").val() - ($("#valorTotal").val() * $("#valorDesconto").val())/100)
	});
	$("#btn-add").click(function(){
		$("#tabela-produtos").append("<tr><td>"+$("#titulo-produto").val() +"</td><td>"+$("#quantidade").val()+"</td><td>"+$("#valorUnitario").val()+"</td><td>"+$("#valorTotal").val()+"</td></tr>");	
	});
});
