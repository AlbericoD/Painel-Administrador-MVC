/**
 * File : addUser.js
 * 
 * This file contain the validation of add user form
 * 
 * Using validation plugin : jquery.validate.js
 * 
 * @author Kishor Mali
 */

$(document).ready(function(){
	
	var addUserForm = $("#addUser");
	
	var validator = addUserForm.validate({
		
		rules:{
			fname :{ required : true },
			email : { required : true, email : true, remote : { url : baseURL + "checkEmailExists", type :"post"} },
			password : { required : true },
			cpassword : {required : true, equalTo: "#password"},
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
