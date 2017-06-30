/**
 * @author Kishor Mali
 */


jQuery(document).ready(function(){
	
	jQuery(document).on("click", ".deleteUser", function(){
		var userId = $(this).data("userid"),
			hitURL = baseURL + "deleteUser",
			currentRow = $(this);
		
		var confirmation = confirm("Tem certeza que deseja excluir esse usuário");
		
		if(confirmation)
		{
			jQuery.ajax({
			type : "POST",
			dataType : "json",
			url : hitURL,
			data : { userId : userId } 
			}).done(function(data){
				console.log(data);
				currentRow.parents('tr').remove();
				if(data.status = true) { alert("Usuário deletado com sucesso"); }
				else if(data.status = false) { alert("Falha ao deletar usuário"); }
				else { alert("Opa, essa area é restrita para você..!"); }
			});
		}
	});
	
	
	jQuery(document).on("click", ".searchList", function(){
		
	});
	
});
