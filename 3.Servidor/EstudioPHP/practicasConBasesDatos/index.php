<?php
$conexion = mysql_connect('localhost', 'marcos', '1234') or die('No se pudo conectar a la base de datos.');
mysql_select_db('basedatosprueba', $conexion);
$resultados=mysql_query('Select * from usuarios')
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Practicas con Bases de Datos</title>
</head>
<body>
<?php
while ($fila = mysql_fetch_object($resultados)) {
    echo $fila->nombre;
    echo "<br>";
}
?>
    
</body>
</html>