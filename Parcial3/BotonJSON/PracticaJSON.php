<?php
    $registro['idJugador'] = '123';
    $registro['nomJugador'] ='Leonardo';
    $registro['nomEquipo'] ='Chivas';
    $registro['division'] ='Primera Division';
    $registro['paisOrigen'] ='Mexico';
    $registro['fecha'] ='07/04/2001';
    $registro['edad'] ='21';
    $registro['peso'] ='55 kg';
    $registro['altura'] = '1.75';
    $registro['posicion'] = 'Defensa';


    $registroJson = json_encode($registro);
    echo $registroJson;
?>