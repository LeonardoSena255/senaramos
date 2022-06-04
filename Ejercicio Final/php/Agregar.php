<?php
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
        $consultaSQL = "insert into `futbolista`(`nomJugador`, `nomEquipo`, `division`, `paisOrigen`, `fechaNac`, `edad`, `altura`, `peso`, `posicion`, `pierna`) VALUES ('$nom','$nomEq','$div','$pais','$fecha','$edad','$altura','$peso','$pos','$pie')";
        $consulta = $con -> prepare($consultaSQL);
        $consulta -> execute();
        //$resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch (PDOException $e) {
        echo "Error al agregar a la base de datos";
        echo $e -> getMessage();
    }

    //echo json_encode($resultado);
?>