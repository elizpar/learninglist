$(document).ready(function(){
  //add list items

  $('.add').on('click', function(event) {
    event.preventDefault();
    var listEntry = $("input").val();
    $('#list').append('<li><button class="delete">&times;</button><span>' +listEntry+ '</span></li>');
    $('input').val("");
  });
  
  $('#list').on('click', '.delete', function(event){
    event.preventDefault();
    $(this).parent().remove();                                         
    });

  	     
  	$('#list').on('click', 'li span', function(e) {
      $(this).toggleClass('linethrough');

  	});

});