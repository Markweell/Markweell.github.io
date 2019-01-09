<?php
	session_start();


	const NFILAS=9;
	const NCOLUMNAS=9;
	const NMINAS=1;

	if(!isset($_SESSION['tablero'])){
		$_SESSION['tablero']=array();
		$_SESSION['visible']=array();
		$_SESSION['hasPerdido']=false;
		$_SESSION['hasGanado']=false;

		crearTablero();
	}

	function crearTablero(){
		for ($i=0;$i<NFILAS;$i++){
			for($j=0;$j<NCOLUMNAS;$j++){
				$_SESSION['tablero'][$i][$j]=0;
				$_SESSION['visible'][$i][$j]=0;

			}
		}
		for($n=0;$n<NMINAS;$n++){
			do{
				$fila=mt_rand(0,NFILAS-1);
				$columnas=mt_rand(0,NCOLUMNAS-1);
			}while($_SESSION['tablero'][$fila][$columnas]==9);
			$_SESSION['tablero'][$fila][$columnas]=9;
			for($x=max($fila-1,0);$x<=min($fila+1,NFILAS-1) ;$x++){
				for($y=max($columnas-1,0);$y<=min($columnas+1,NCOLUMNAS-1) ;$y++ ){
					if($_SESSION['tablero'][$x][$y]!=9)
						$_SESSION['tablero'][$x][$y]++;
				}
			}
		}

	}

	function mostrarTablero(){
		for($i=0;$i<NFILAS;$i++){
			echo "</br>";
			for($j=0;$j<NCOLUMNAS;$j++){
				echo "<img src='img/".$_SESSION['tablero'][$i][$j].".png' width='40' height='40'/>";			}
		}
	}

	function mostrarVisible(){
		echo "</br></br>";
		$cuentaOcultos=0;
		for ($i=0;$i<NFILAS;$i++){
			for($j=0;$j<NCOLUMNAS;$j++){
				if($_SESSION['visible'][$i][$j]==0){
					echo "<a href='index.php?fila=".$i."&columna=".$j."'><img src='img/cuadrado.png' width='40' height='40'/></a>";
					$cuentaOcultos++;
				}

				else if($_SESSION['visible'][$i][$j]!=0){
					echo "<img src='img/".$_SESSION['tablero'][$i][$j].".png' width='40' height='40'/>";
				}
			}
			echo "</br>";
		}
		if($cuentaOcultos==NMINAS){
			$_SESSION['hasGanado']=true;
			echo "Has ganado";
		}
	}

	function clickCasilla($fila,$columna){
		if($_SESSION['hasGanado']!=true){
			if($_SESSION['visible'][$fila][$columna]==0){
				$_SESSION['visible'][$fila][$columna]=1;
		
				if($_SESSION['tablero'][$fila][$columna]==9){
					$_SESSION['hasPerdido']=true;
				}
				elseif($_SESSION['tablero'][$fila][$columna]==0){
					for($x=max($fila-1,0);$x<=min($fila+1,NFILAS-1) ;$x++){
						for($y=max($columna-1,0);$y<=min($columna+1,NCOLUMNAS-1) ;$y++ ){
							clickCasilla($x,$y);
						}
					}
				}
			}
		}	
	}

	if(isset($_GET['fila'])){
		clickCasilla($_GET['fila'],$_GET['columna']);
	}
	?>
	<form method="post" action="cerrarSesion.php">
		<input type="submit" name="cerrar" value="Reiniciar">
	</form>
	<?php

	if($_SESSION['hasPerdido']==true){
		mostrarTablero();
		echo "</br>Has perdido";
		
	}else{
		echo " </br></br>";
		mostrarVisible();
	}
?>