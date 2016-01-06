var $ = jQuery =  require('jquery');

$(document).ready(function () {

$(".structureselector").click(function(e){
    e.preventDefault();
    $(".ssi").hide();
    $("#" + $(this).attr('data-id')).show();

});

});

