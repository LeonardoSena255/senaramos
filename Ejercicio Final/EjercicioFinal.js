$(document).ready( function(){
    $("#btn4").on('click', (e) =>{
        e.preventDefault();
        $.ajax({
            url: 'PracticaJSON.php',
            method: 'POST',
            success: response => {
                $('#ejemplo').text(response);
            }
        })
    });
    
    $('#btnjson').click(function() {
        $.post('PracticaJSON.php',{},function(data){

              console.log(data);
              $('#idJugador').val(data.idJugador);
              $('#nomJugador').val(data.nomJugador);
              $('#nomEquipo').val(data.nomEquipo);
              $('#division').val(data.division);
              $('#paisOrigen').val(data.paisOrigen);
              $('#fechaNac').val(data.fecha);
              $('#edad').val(data.edad);
              $('#altura').val(data.altura);
              $('#inlineFormCustomSelect').val(data.posicion);

          },'json');
    });


    document.getElementById("btnfetch").addEventListener("click",function(){
        let promesa = fetch("PracticaFetch.php");
        promesa.then(respuesta => respuesta.json())
        .then(data => {
            $('#idJugador').val(data.idJugador);
              $('#nomJugador').val(data.nomJugador);
              $('#nomEquipo').val(data.nomEquipo);
              $('#division').val(data.division);
              $('#paisOrigen').val(data.paisOrigen);
              $('#fechaNac').val(data.fecha);
              $('#edad').val(data.edad);
              $('#altura').val(data.altura);
              $('#inlineFormCustomSelect').val(data.posicion);
        } );
    });

    $('#btnConsultaBD').click(function(){
            let parid = prompt("Teclee el ID del jugador a consultar:");
            $.post('EjercicioFinal.php',{par1:parid},function(data){
                refrescar(data);
            },'json');
        });

        function refrescar(objeto) {
            console.log(objeto);
            $('#idJugador').val(objeto.idJugador);
            $('#nomJugador').val(objeto.nomJugador);
            $('#nomEquipo').val(objeto.nomEquipo);
            $('#division').val(objeto.division);
            $('#paisOrigen').val(objeto.paisOrigen);
            $('#fechaNac').val(objeto.fechaNac);
            $('#edad').val(objeto.edad);
            $('#altura').val(objeto.altura);
            $('#inlineFormCustomSelect').val(objeto.posicion);
        }

});

