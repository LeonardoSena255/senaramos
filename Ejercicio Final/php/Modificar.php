<?php
    $iduserM = $_POST['parID'];
    $nom = $_POST['parNom'];
    $nomEq = $_POST['parNomEq'];
    $div = $_POST['parDiv'];
    $pais = $_POST['parPais'];
    $fecha = $_POST['parFecha'];
    $edad = $_POST['parEdad'];
    $altura = $_POST['parAlt'];
    $peso = $_POST['parPeso'];
    $pos = $_POST['parPos'];
    $pie = $_POST['parPie'];


    try {
        $con = new PDO("mysql:host=localhost;dbname=l19100255;port=3306",'root','');
    } catch (PDOException $e) {
        echo "Error de conexion";
        echo $e->getMessage();
        exit();
    }

    try {
        $consultaSQL = "update `futbolista` set `nomJugador`='$nom',`nomEquipo`='$nomEq',`division`='$div',`paisOrigen`='$pais',`fechaNac`='$fecha',`edad`='$edad',`altura`='$altura',`peso`='$peso',`posicion`='$pos',`pierna`='$pie' WHERE idJugador =".$iduserM;
        $consulta = $con -> prepare($consultaSQL);
        $consulta -> execute();
        $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch (PDOException $e) {
        echo "Error al modificar en la base de datos";
        echo $e -> getMessage();
    }

    echo json_encode($resultado);
?>