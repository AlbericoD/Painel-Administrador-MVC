/**
 * File : editUser.js 
 * 
 * This file contain the validation of edit user form
 * 
 * @author Kishor Mali
 */
$(document).ready(function(){
	
	var editUserForm = $("#editUser");
	
	var validator = editUserForm.validate({
		
		rules:{
			fname :{ required : true },
			email : { required : true, email : true, remote : { url : baseURL + "checkEmailExists", type :"post", data : { userId : function(){ return $("#userId").val(); } } } },
			cpassword : {equalTo: "#password"},
			mobile : { required : true, digits : true },
			role : { required : true, selected : true}
		},
		messages:{
			fname :{ required : "Este campo é obrigatório" },
			email : { required : "Este campo é obrigatório", email : "Por favor, entre com um e-mail válido", remote : "Opa!, esse Email já está sendo utilizado" },
			password : { required : "Este campo é obrigatório" },
			cpassword : {required : "Este campo é obrigatório", equalTo: "Por favor, coloque a mesma senha" },
			mobile : { required : "Este campo é obrigatório", digits : "Apenas números aqui" },
			role : { required : "Este campo é obrigatório", selected : "Selecione pelo menos uma opção" }		
		}
	});
});