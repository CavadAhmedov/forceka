$(function(){

    $('#top_right img').click(function(){
        $("#option").toggleClass("showoption")
        window.setTimeout(function(){
            $("#option").removeClass('showoption');
        }, 4000);
      });
      


})
