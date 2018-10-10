<form method="post" action="ejercicio3.php" />
  <input type="number" name="dia" placeholder="dia" required />
  <input type="number" name="mes" placeholder="mes" required />
  <input type="number" name="anio" placeholder="año" required />
  <input type="submit" value="Mostrar" />
</form>

<?php

 if(isset($_POST['mes'])){//Comprobamos si está disponible la variable mes
 
  //fecha de nacimiento
  $dia = $_POST['dia'];
  $mes = $_POST['mes']; //almacenamos en variables
  $anio = $_POST['anio'];
  
  //hoy
  $diaAC=date("j");
  $mesAC=date("n");
  $anoAC=date("Y");
  
 
 
  //si el mes es el mismo pero el día inferior aun no ha cumplido años, le quitaremos un año al actual
   
  if (($mes == $mesAC) && ($dia > $diaAC)) {
  $anoAC=($anoAC-1); }
   
  //si el mes es superior al actual tampoco habrá cumplido años, por eso le quitamos un año al actual
   
  if ($mes > $mesAC) {
  $anoAC=($anoAC-1);}
   
  //ya no habría mas condiciones, ahora simplemente restamos los años y mostramos el resultado como su edad
   
  $edad=($anoAC-$anio);
  
  echo "Tiene ".$edad." años";
 }
 ?>
