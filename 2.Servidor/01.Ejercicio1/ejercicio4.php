

<?php
 $diaAC=date("j");
 $mesAC=date("n");
 $estacionAC;

  echo"<html>";
if ($mesAC>=3 && $mesAC<6){
  if($diaAC>=21){
    $estacionAC = "primavera";
  }
  $estacionAC = "invierno";
}
if ($mesAC>=6 && $mesAC<9){
  if($diaAC>=21){
    $estacionAC = "verano";
  }
  $estacionAC = "primavera";
}
if ($mesAC>=9 && $mesAC<12){
  if($diaAC>=23){
    $estacionAC = "otonio";
    
  }
  $estacionAC = "verano";
  echo"1";
}
if ($mesAC=12 || ($mesAC>=1 && $mesAC<3)){
  if($diaAC>=22){
    $estacionAC = "invierno";
  }
  $estacionAC = "otonio";
}
switch($estacionAC){
  case "primavera":
  echo "<img src='img/prim.jpg' />";
  break;
  case "verano":
  echo "<img src='img/vera.jpg' />";
  break;
  case "otonio":
  echo "<img src='img/oto.jpg' />";
  break;
  case "invierno":
  echo "<img src='img/invi.jpg' />";
  break;
}
echo"</html>";

?>
