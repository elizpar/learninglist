$(document).ready(function(){
  //add list items

        $('button').on('click', function(event) {
                event.preventDefault();
                var listEntry = $("input").val();
  
                $('#list').append('<li><button class="delete">&times;</button>' +listEntry+ '</li>');
                $('input').val("");
                });
  
  		//$('.delete').on('click', function(e) {
  		//$(this).remove();

  		//});
        
        $('.delete').on('click', function(e){
          $(this).remove();                                           
          });

  	
  		//$("#list").on('click',function(e) {
        	//$("#this").fadeOut("slow");

  		//});
  		



        });