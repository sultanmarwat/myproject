// 



// *********append_phone_number_code******************************

$(document).ready(function() {
	var max_fields      = 3; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
	var add_button      = $(".add_field_button"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div class="input-group-append mt-2"><input type="text" class="form-control" name="mytext[]" id="inputtopic2" placeholder="Std Phone Number"><a href="#" class="btn btn-outline-danger remove_field "><span class="font-weight-bold">-</span></a></div>'); //add input box
		}
	});
	
	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});


// <input type="text" name="mytext[]"/>









// $(document).ready(function() {


//       $(".add-more").click(function(){ 
//           var html = $(".copy").html();
//           $(".after-add-more").after(html);
//       });


//       $("body").on("click",".remove",function(){ 
//           $(this).parents(".control-group").remove();
//       });


//     });

