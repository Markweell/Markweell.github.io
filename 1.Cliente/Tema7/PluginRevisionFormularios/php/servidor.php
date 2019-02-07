<?php
if (isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['correo'])) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    echo "Nombre: " . $nombre . "\n" . "Apellidos: " . $apellido . "\n" . "Correo: " . $correo;
}
?>