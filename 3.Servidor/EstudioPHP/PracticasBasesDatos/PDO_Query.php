<?php
try {
    // Creación de una conexión a una base de datos:
    // Los parámetros son : la ip del servidor, el nombre de la base de dato, el nombre del usuario
    // y la contraseña en caso de que la tenga, sino se deja en blanco.
    $conexion = new PDO('mysql:host=localhost;dbname=basedatosprueba', 'root', '');
    

    //Método query
    //$conexion->query('INSERT INTO `usuarios` (`ID`, `Nombre`, `Apellidos`) VALUES (NULL, "Rocio", "SantaMaria")');
    
  
    // Manera de obtener el id por get. CUIDADO!! Pueden inyectar código.
    // Por ejemplo si ponen en la url ?id=3 or id=4 estarían accediendo a dos valores.
    /*
    $id = $_GET["id"];
    $resultado = $conexion->query('SELECT * FROM `usuarios` WHERE ID = '.$id.'');
    /*
    */
    // El método query es recomendable si no utilizamos variables pues si las utilizamos, nos
    // podrían inyectar código. 
    $resultado = $conexion->query('SELECT * FROM `usuarios` WHERE ID = 3');
/*









*/
} catch (PDOException $e) {
    echo "Error: ". $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../../css/estilo.css">
    <title>Conexion por PDO</title>
</head>
<body>
    <?php
    foreach ($resultado as $fila) {
        echo $fila['ID'] ." - ". $fila['Nombre'] .'</br>';
    }
    ?>
<p class = "menu"><a  href="verCodigoEjercicio_Query.php">Ver Código</a> &nbsp&nbsp&nbsp&nbsp<a href="index.html">Atras</a></p>
</body>
</html>
