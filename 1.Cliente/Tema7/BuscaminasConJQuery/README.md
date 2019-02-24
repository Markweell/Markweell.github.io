# [![Ver Buscaminas en funcionamiento.](https://github.com/Markweell/Markweell.github.io/tree/master/1.Cliente/Tema7/BuscaminasConJQuery#buscaminas-con-jquery)](https://markweell.github.io/1.Cliente/Tema7/BuscaminasConJQuery/buscaminas.html)

# BUSCAMINAS CON JQUERY

Se trata del clásico juego del buscaminas. Con las opciones de : 
Picar: (Botón izquiero ratón)muestra el contenido de una casilla. Si picas sobre una casilla que contiene una mina perderías. 
Marcar: (Botón derecho ratón)Marca una casilla con una bandera. La utilidad de esto es marcar casillas que creamos que contengan minas. 
Descubrir: (Ambos botones del ratón). Cuando tengas marcadas las minas de alrededor de una casilla, se puede usar para descubrir las casillas adyacentes. Si estan mal marcadas las minasl, perderías.

Descripción del código: 
Al iniciar la partida se creará un tablero dependiendo de la dificultad seleccionada[`Iniciar buscaminas`](https://github.com/Markweell/Markweell.github.io/blob/master/1.Cliente/Tema7/BuscaminasConJQuery/js/buscaminas.js#L58) [`Iniciar ArbolDom`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L67)

Al arbol dom le asignamos los eventos de ratón [`Asignación eventos Dom`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L106) que van a:

* Picar: [`Picar Casilla`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L191)
		
* Marcar: [`Marcar Casilla`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L355)

* Descubrir: [`Descubrir Casilla`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L206)


Cada uno de estos eventos van a llamar a la capa de negocio. En el caso de la capa de negocio:

* Picar: [`Picar Casilla Capa Negocio`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/buscaminas.js#L184)
		
* Marcar: [`Marcar Casilla Capa Negocio`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/buscaminas.js#L216)

* Descubrir: [`Descubrir Casilla Capa Negocio`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/buscaminas.js#L229)

Respecto a la animaciones Jquery aplicadas.
* Picar y descubrir: En la función [`actualizaTableroPicar`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L223) dejo comentada como sería una posible manera de animar con setTimeout, pero el efecto que aplico es dandole un delay que le paso a la función [`descubreCasilla`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L294) que se ejecuta al ponerle un [`fadeOut`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L298).
* Marcar: En este caso [`Quito una clase`](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L376) y le añado otra que le pone el css, pero para hacerlo uso los efectos propios de jQuery UI
* [`Perder: `](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L234) En este caso como podemos ver, uso un hide y un show con el efecto 'pulsate' lo que hace la bomba tenga un efecto de pre-detonación. Para que se aplique con un retarso entre unas bombas y otras se le aplica un setTimeout
*[`Ganar: `](https://github.com/Markweell/Markweell.github.io/blob/0e78d67d809b505dfc6084db1423b1200a26072d/1.Cliente/Tema7/BuscaminasConJQuery/js/main.js#L262) Por último a ganar se le aplica un fondo verde al tablero y las minas se cambian por otro fondo. 
