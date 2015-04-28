
$(function(){
  $("#nav-toggle").click(function(e){
    e.preventDefault();
    $('#nav').toggleClass( "active" ).find('ul').slideToggle('slow');
    return false
  });
});