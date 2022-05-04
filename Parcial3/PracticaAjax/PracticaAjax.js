$(document).ready( function(){
    $("#btn4").on('click', (e) =>{
        e.preventDefault();
        $.ajax({
            url: 'PracticaAjax.php',
            method: 'POST',
            success: response => {
                $('#ejemplo').text(response);
            }
        })
    });

});

