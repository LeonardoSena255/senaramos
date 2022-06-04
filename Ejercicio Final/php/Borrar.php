<?php
    $iduser = $_POST['parID'];


    try {
        $con = new PDO("mysql:host=localhost;dbname=l19100255;port=3306",'root','');
    } catch (PDOException $e) {
        echo "Error de conexion";
        echo $e->getMessage();
        exit();
    }

    try {
        $consultaSQL = "delete from `futbolista` where `futbolista`.`idJugador` = ".$iduser;
        $consulta = $con -> prepare($consultaSQL);
        $consulta -> execute();
        $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch (PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e -> getMessage();
    }

    echo json_encode($resultado);
?>