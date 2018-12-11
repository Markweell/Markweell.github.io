{
    /**
     * 
     * @author Marcos Gallardo Pérez
     */

    let matriz;
    let body;

    /**
     * Carga de los elementos y funciones básicas para el comportamiento de la página.
     */
    function init() {
        body = document.getElementsByTagName('body')[0];

        document.getElementById('facilButton').addEventListener('click', function () {
            creacionTablero(1);
        });
        document.getElementById('medioButton').addEventListener('click', function () {
            creacionTablero(2);
        });
        document.getElementById('dificilButton').addEventListener('click', function () {
            creacionTablero(3);
        });
        
        document.addEventListener('contextmenu',inhabilitarMContextual) ;
    }

    function inhabilitarMContextual(ev) {
        ev.preventDefault();
    }

    function creacionTablero(dificultad) {
        buscaminas.Buscaminas(dificultad);
        matriz = buscaminas.matriz;
        limpiaDOM();
        creaTableroArbolDOM(dificultad);
    }

    function creaTableroArbolDOM(dificultad) {
        contenedor = body.appendChild(document.createElement('div'));

        switch (dificultad) {
            case 1:
                contenedor.id = "contenedorFacil"
                break;
            case 2:
                contenedor.id = "contenedorMedio"
                break;
            case 3:
                contenedor.id = "contenedorDificil"
                break;
        }

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                input = contenedor.appendChild(document.createElement('input'))
                input.type = 'submit';
                input.value = "";
                input.valor = matriz[i][j];
                input.bandera = false;
                input.style.backgroundImage = "url(img/inicial.png)";
                input.addEventListener("mousedown", function (e) {
                    switch (e.buttons) {
                        case 1:
                            if (!matriz[i][j].bandera)
                                compruebaBomba(i, j);
                            break;
                        case 2:
                            ponerbandera(i, j);
                            break;
                        default:
                            break;
                    }
                });
                matriz[i][j] = input;
            }
        }
    }

    function compruebaBomba(i, j) {
        if (i < 0 || j >= matriz.length) {
            return;
        }

        if (matriz[i][j].valor == 9) {
            for (let i = 0; i < matriz.length; i++) {
                for (let j = 0; j < matriz[1].length; j++) {
                    matriz[i][j].disabled = 'true';
                    if (matriz[i][j].valor == 9) {
                        matriz[i][j].style.backgroundImage = "url(img/mina.png)";
                        matriz[i][j].style.backgroundSize = "cover";
                        matriz[i][j].value = "";
                    }
                }
            }
        } else {
            matriz[i][j].value = matriz[i][j].valor;
            matriz[i][j].style.backgroundImage = "url(img/final.png)";
            matriz[i][j].style.backgroundSize = "cover";
            matriz[i][j].disabled = 'true';
        }

        if (matriz[i][j].valor == 0) {
            matriz[i][j].value == "";
            if (i != 0)
                if (matriz[i - 1][j].value == "")
                    compruebaBomba(i - 1, j);
            if (i != matriz.length - 1)
                if (matriz[i + 1][j].value == "")
                    compruebaBomba(i + 1, j);
            if (j != matriz[1].length - 1)
                if (matriz[i][j + 1].value == "")
                    compruebaBomba(i, j + 1);
            if (j != 0)
                if (matriz[i][j - 1].value == "")
                    compruebaBomba(i, j - 1);
            if (j !== 0 && i !== matriz.length - 1)
                if (matriz[i + 1][j - 1].value == "")
                    compruebaBomba(i + 1, j - 1);
            if (i != 0 && j != 0)
                if (matriz[i - 1][j - 1].value == "")
                    compruebaBomba(i - 1, j - 1);
            if (i != matriz.length - 1 && j != matriz[1].length - 1)
                if (matriz[i + 1][j + 1].value == "")
                    compruebaBomba(i + 1, j + 1);
            if (i != 0 && j != matriz[1].length - 1)
                if (matriz[i - 1][j + 1].value == "")
                    compruebaBomba(i - 1, j + 1);
        }
    }

    function ponerbandera(i, j) {
        if (matriz[i][j].bandera) {
            matriz[i][j].style.backgroundImage = "url(img/inicial.png)";
            matriz[i][j].style.backgroundSize = "cover";
            matriz[i][j].bandera = false;
        } else {
            matriz[i][j].style.backgroundImage = "url(img/bandera.jpg)";
            matriz[i][j].style.backgroundSize = "cover";
            matriz[i][j].bandera = true;
        }
    }

    function limpiaDOM() {
        body.removeChild(body.childNodes[body.childNodes.length - 1])
    }

    document.addEventListener('DOMContentLoaded', init);
}