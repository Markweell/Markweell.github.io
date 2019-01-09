<?php

if (!$_GET){
    header('Location: http://localhost/xamppPHP/3.Servidor/teoria/Formularios/formularioGet/formularioBasicoGet.php');
}
    echo '<pre>';
    print_r($_GET);
    echo'<br>';
    if(isset($nombre)){
        $nombre = $_GET['nombre'];    
    }else{echo 'no has puesto el nombre.<br>';}

    $nombre = $_GET['nombre'];
    $year = $_GET['year'];
    $sexo = $_GET['sexo'];
    $terminos = $_GET['terminos'];
    echo $nombre.'   '.$year.'   '.$sexo.'   '.$terminos;
    echo '<pre>';

?>