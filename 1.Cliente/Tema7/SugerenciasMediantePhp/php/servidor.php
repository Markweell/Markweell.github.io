<?php
$companieros = ['Angelo Barbara',
'Francisco', 'Guillermo Boquizo',
 'Suso Mejías', 'Er zuri', 'Bravo',
 'Jose Rafael', 'Mario', 'Samuel',
 'Javi', 'Sojo', 'Chema','Marcos'];

if (isset($_GET['textoInput'])) {
    $mensaje = "";
    if ($_GET['textoInput']==="") {
        echo "No hay ninguna coincidencia";
        return;
    }
    foreach ($companieros as $companiero) {
        if (stristr($companiero,$_GET['textoInput'])) {
            $mensaje .= $companiero.",";
        }

    }
    if ($mensaje === "") {
        $mensaje = "No hay ninguna coincidencia";
    }
    echo $mensaje;
}
?>