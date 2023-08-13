$(function(){
	var $submitForm=$("#submit");
	
	$submitForm.validate({
		rules:{
			email:{
			   required:true,
			   email:true
			},
			subject:{
				required:true
			},
			gender:{
				required:true
			},
			msg:{
				required:true
			}

		},
		messages:{
			email:{
				required:'Email Address is required',
				email:'Email is invalid'
		},		
		subject:{
			required:'Subject is required'
		},	
		gender:{
			required:'Choose a gender'
		},		
		msg:{
			required:'Write a message'
		}
			
			},
			errorPlacement:function(error,element){
				if(element.is(":radio")){
					error.appendTo(element.parents(".gen"));
				}else{
					error.insertAfter(element);
				}
			}
		
		
		
	})

})