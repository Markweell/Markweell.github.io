<?php
if (isset($_POST['submit'])) {
    $nombre=$_POST['nombre'];
    $correo= $_POST['correo'];
    $errores='';
    if (!empty($nombre)) {
        #stripslashes --> impide el uso de \ por motivos de seguridad.
        #trim --> Limpia los espacios en blanco antes y despues del nombre.
        #htmlspecialchars --> impide ejecutar código html por motivos de seguridad.
        /*
        $nombre = stripslashes( htmlspecialchars(trim($nombre)));
        /* */
        $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
        /*
        */
        echo 'Tu nombre es : ' .$nombre;
    } else {
        $errores .= 'Por favor agrega un nombre<br>';
    }
    
    if (!empty($correo)) {
        #stripslashes --> impide el uso de \ por motivos de seguridad.
        #trim --> Limpia los espacios en blanco antes y despues del nombre.
        #htmlspecialchars --> impide ejecutar código html por motivos de seguridad.
       //$correo = stripslashes(htmlspecialchars(trim($correo)));
        $correo = filter_var($correo, FILTER_SANITIZE_EMAIL);// esto es un flitro de saneamiento, con esto eliminamos posibles errores de teclas.
        if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
            $errores .= "Por favor ingresa un correo válido<br>";
        } else {
            echo '<br> y tu correo es: ' .$correo;
        }
    } else {
        $errores .= 'Por favor agrega un correo';
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
    .error{
        color:red;
    }
    </style>
    <title>Validacion de un formulario.</title>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
    <input type="text" name="nombre" placeholder="Nombre:">   
    <input type="text" name="correo" placeholder="Correo:" >
    <?php if (!empty($errores)): ?>
        <div class="error"><?php echo $errores;?><div>
    <?php endif; ?>
    <input type="submit" name="submit">
    </form> 
    <p><a href="verCodigoEjercicio.php">Ver Código</a> &nbsp&nbsp&nbsp&nbsp<a href="../index.html">Atras</a></p>
</body>
</html>