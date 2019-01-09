<?php

//$nombre=isset($_GET['nombre']) ? $_GET['nombre'] : 'Anonimo';

//Esto de arriba, y esto de abajo es lo mismo. El operador Fusion null es ??
// Se comporta como un ternario que comprueba si existe una variable, sino 
// existe le puedes decir que haga otra cosa.  
$nombre = $_GET['nombre'] ?? 'Anonimo';
echo $nombre;

?>