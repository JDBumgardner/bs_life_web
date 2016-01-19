var $ = jQuery =  require('jquery');

$(document).ready(function () {

    $(".structureselector").click(function(e){
        e.preventDefault();
        $(".ssi").hide();
        $("#" + $(this).attr('data-id')).show();

    });

    $("#submit_form").click(function(e) {
        data = $("#test_form").serialize();
        $.ajax({
                url: "/data",
                data: data,
                success: function(result) {
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
        })
    });

});
