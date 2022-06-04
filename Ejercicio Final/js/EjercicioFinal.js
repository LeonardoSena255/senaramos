$(document).ready( function(){

        $('#btnConsultaBD').click(function() {
            swal("Teclee el ID a consultar: ",{
                content: "input",
            })
            .then((parid) => {
                if(parid == null){
                    swal("Error","Favor de ingresar un ID valido", "error" ); 
                }
                $.post('php/Consultar.php',{par1:parid},function(data){
                    if (data.nomJugador == null) {
                        swal("Error", "El ID ingresado no existe", "error");

                    } else {
                        refrescar(data);
                    }

                    },'json');
            })
            let borrar = document.querySelector("#btnBorrarBD");
            let modificar = document.querySelector("#btnModificarBD");
            borrar.disabled = false;
            modificar.disabled = false;
        });


    $('#btnAgregarBD').click(function() {
        try {
            let nom = document.getElementById("nomJugador").value;
            let nomEq = document.getElementById("nomEquipo").value;
            let div = document.getElementById("division").value;
            let pais = document.getElementById("paisOrigen").value;
            let fecha = document.getElementById("fechaNac").value;
            let edad = document.getElementById("edad").value;
            let alt = document.getElementById("altura").value;
            let peso = document.getElementById("peso").value;
            let pos = document.getElementById("posicion").value;
            let pie;
            if (document.getElementById('derecho').checked == true) {
                pie = "Derecho";
            }
            if (document.getElementById('zurdo').checked == true) {
                pie = "Zurdo";
            }
            if (nom == "" || nomEq == "" || div == "" || pais == "" || fecha == "" || edad == "" || alt == "" || peso == "" || pos == "") {
                swal("Error", "No deje campos vacios", "error");
            } else {
                $.post('php/Agregar.php',{parNom:nom, parNomEq:nomEq, parDiv:div, parPais:pais, parFecha:fecha, parEdad:edad, parAlt:alt, parPeso:peso, parPos:pos, parPie:pie},
                {},'json');
                swal("Agregar Jugador","Se ha agregado al jugador correctamente","success");
            }
        } catch (exception) {
            swal("Error","Ha ocurrido un error","error");
        }
    });

    $('#btnModificarBD').click(function() {
        try {
            let id = document.getElementById("idJugador").value;
            let nom = document.getElementById("nomJugador").value;
            let nomEq = document.getElementById("nomEquipo").value;
            let div = document.getElementById("division").value;
            let pais = document.getElementById("paisOrigen").value;
            let fecha = document.getElementById("fechaNac").value;
            let edad = document.getElementById("edad").value;
            let alt = document.getElementById("altura").value;
            let peso = document.getElementById("peso").value;
            let pos = document.getElementById("posicion").value;
            let pie;
            if (document.getElementById('derecho').checked == true) {
                pie = "Derecho";
            }
            if (document.getElementById('zurdo').checked == true) {
                pie = "Zurdo";
            }
            if (nom == "" || nomEq == "" || div == "" || pais == "" || fecha == "" || edad == "" || alt == "" || peso == "" || pos == "") {
                swal("Error", "No deje campos vacios", "error");
            } else {
                $.post('php/Modificar.php',{parID:id,parNom:nom, parNomEq:nomEq, parDiv:div, parPais:pais, parFecha:fecha, parEdad:edad, parAlt:alt, parPeso:peso, parPos:pos, parPie:pie},
                {},'json');
                swal("Modificar Jugador","Se han modificado los datos del jugador correctamente","success");
            }
        } catch (exception) {
            swal("Error","Ha ocurrido un error","error");
        }
    });

    $('#btnBorrarBD').click(function() {
            try {
                let id = document.getElementById("idJugador").value;
                $.post('php/Borrar.php',{parID:id},function(data){
                    swal("Borrar jugador", "Se ha borrado al jugador", "success");
                    Clean();
                },'json');
            } catch (error) {
                swal("Error", "Ha ocurrido un error", "error");
            }
            
        });

        function Clean() {
            $('#idJugador').val("");
            $('#nomJugador').val("");
            $('#nomEquipo').val("");
            $('#division').val("");
            $('#paisOrigen').val("");
            $('#fechaNac').val("");
            $('#edad').val("");
            $('#altura').val("");
            $('#peso').val("");
            $('#posicion').val("selected");
            document.getElementById('derecho').checked = true;
        }

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
            $('#peso').val(objeto.peso + " Kg");
            $('#posicion').val(objeto.posicion);
            if (objeto.pierna == "Derecho" ) {
                document.getElementById('derecho').checked = true;
            }
            if (objeto.pierna == "Zurdo") {
                document.getElementById('zurdo').checked = true;
            }
        }

});

