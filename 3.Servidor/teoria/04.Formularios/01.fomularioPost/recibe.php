<?php

if (!$_POST){
    header('Location: http://localhost/xamppPHP/3.Servidor/teoria/Formularios/formularioBasico.php');
}
    echo '<pre>';
    print_r($_POST);
    echo'<br>';
    $nombre = $_POST['nombre'];
    $year = $_POST['year'];
    $sexo =$_POST['sexo'];
    $terminos =$_POST['terminos'];
    echo $nombre.'   '.$year.'   '.$sexo.'   '.$terminos;
    echo '<pre>';

?>