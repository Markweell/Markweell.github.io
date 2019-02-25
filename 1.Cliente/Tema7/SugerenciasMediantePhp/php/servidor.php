<?php
$companieros = ['nombre'=>'Angelo Barbara',
'nombre2'=>'Francisco Ramirez Ruiz', 'nombre3'=>'Guillermo Boquizo ',
 'Suso Mejías', 'Rafael Zurita', 'Jose Manuel Bravo',
 'Jose Rafael Alvarez', 'Mario Navarro', 'Samuel',
 'Javier ', 'Rafael Sojo', 'Chema','Marcos Gallardo Pérez'];
json_encode($companieros, JSON_FORCE_OBJECT);
// if (isset($_GET['textoInput'])) {
//     $mensaje = "";
//     if ($_GET['textoInput']==="") {
//         echo "No hay ninguna coincidencia";
//         return;
//     }
//     foreach ($companieros as $companiero) {
//         if (stristr($companiero,$_GET['textoInput'])) {
//             $mensaje .= $companiero.",";
//         }

//     }
//     if ($mensaje === "") {
//         $mensaje = "No hay ninguna coincidencia";
//     }
    
// }
?>