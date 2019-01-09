
<?php
$errores = '';
$enviado = "";
if (isset($_POST['submit'])) {
    $nombre = $_POST['Nombre'];
    $correo = $_POST['Correo'];
    $mensaje = $_POST['mensaje'];
    !empty($nombre) ? $nombre=filter_var(trim($nombre), FILTER_SANITIZE_STRING) : $errores.="Por favor ingresa un nombre<br>";
    // if(!empty($nombre)){
    //     $nombre=filter_var(trim($nombre), FILTER_SANITIZE_STRING);
    // }else{
    //     $errores.="Por favor ingresa un nombre<br>";
    // }
}
require 'index.view.php';
?>