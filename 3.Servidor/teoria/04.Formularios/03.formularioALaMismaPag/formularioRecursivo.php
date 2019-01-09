<?php 
if (isset($_POST['nombre'])){
    echo $_POST['nombre'];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario Básico</title>
</head>
<body>
    <!-- Si dejamos el action vacio no redirige a la misma página, otra manera sería poner el nombre del archivo 
    <form action="" method="post">
    <form action="formularioRecursivo.php" method="post"> 
        La última manera es con la variable local de $_SERVER que con 'PHP_SELF' nos devuelve el nombre 
        de la página de forma dinamica-->
    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <input type="text" placeholder="Nombre:" name="nombre">
        <br>
        <label for='nombre'>Hombre</label>
        <input type='radio' name='sexo' value="hombre" id ='nombre'>
        <label for='mujer'>Mujer</label>
        <input type='radio' name='sexo' value='mujer' id ='mujer'>
        <br>
        <select name="year" id="year">
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
        </select>
        <br>
        <label for="terminos">¿Aceptas los términos?</label>
        <input type="checkbox" name="terminos" id="terminos" value="terminos">
        <br>
        <input type='submit' value='Enviar'>
    </form>
    <p><a href="verCodigoEjercicio.php">Ver Código</a> &nbsp&nbsp&nbsp&nbsp<a href="../index.html">Atras</a></p>
</body>
</html>
