<?php
    $year = 2020;
    $month = "febrero";
    $day=0;
    if (((fmod($year,4)==0) and (fmod($year,100)!=0)) or (fmod($year,400)==0)) {
        $dias_febrero = 29;
    } else {
        $dias_febrero = 28;
    }
    switch($month){
        case 1:
        case "enero":
        case 3:
        case "marzo":
        case 5:
        case "mayo":
        case 7:
        case "julio":
        case 8:
        case "agosto":
        case 10:
        case "octubre":
        case 12:
        case "diciembre":
            $day = 31;
            break;
        case 2:
        case "febrero":
            $day = $dias_febrero;
            break;         
        case 4:
        case "abril":          
        case 6:
        case "junio":         
        case 9:
        case "septiembre":
        case 11: 
        case "noviembre":
            $day=30;
            break;
    }
    echo "Los días del mes " .$month ." del año " .$year ." son " .$day ;
?>