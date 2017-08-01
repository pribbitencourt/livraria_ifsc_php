$(document).ready(function() {
	$("#btn-buscar").click(function() {
		$.ajax("http://localhost:8080/ProjetoFinal_Livraria/buscaProdutos?titulo="+ $("#titulo-produto").val())
	   .done(function(data){
		   var produtos = jQuery.parseJSON(data);
		   console.dir(produtos);
		   $("#tabela-produtos").html("");
		   produtos.forEach(function(produto, count, produtos){
			   	$("#tabela-produtos").append("<tr><td>"+produto.titulo +"</td><td>"+produto.autor+"</td><td>"+produto.editora+"</td><td>"+produto.numero+"</td><td>"+produto.isbn+"</td><td>"+produto.valor+"</td><td><a href=''>Editar</a></td><td><a href='' class='delete-link' id="+produto.isbn+" >Excluir</a></td></tr>");   
		   });
	   })
	   .fail(function(){
		   alert("deu ruim!");
	   })
	});
	$(".delete-link").click(function(event) {
		event.preventDefault();
		var url = "http://localhost:8080/ProjetoFinal_Livraria/deletarProduto?isbn="+ $(this).attr('id');
		$.ajax(url)
	   .done(function(data){
		   var produtos = jQuery.parseJSON(data);
		   console.dir(produtos);
		   $("#tabela-produtos").html("");
		   produtos.forEach(function(produto, count, produtos){
			   	$("#tabela-produtos").append("<tr><td>"+produto.titulo +"</td><td>"+produto.autor+"</td><td>"+produto.editora+"</td><td>"+produto.numero+"</td><td>"+produto.isbn+"</td><td>"+produto.valor+"</td><td><a href=''>Editar</a></td><td><a href='' class='delete-link' id="+produto.isbn+" >Excluir</a></td></tr></tr>");   
		   });
	   })
	   .fail(function(){
		   alert("deu ruim!");
	   })
	});
});
