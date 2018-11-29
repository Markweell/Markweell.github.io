{
    /**
     * @author Marcos Gallardo Pérez
     */
    let numMinas;
    let matriz;
    let body;
    /**
     * Carga de los elementos y funciones básicas para el comportamiento de la página.
     */
    function init() {
        body = document.getElementsByTagName('body')[0];
        document.getElementById('facilButton').addEventListener('click', function () { creacionTablero(8); });
        document.getElementById('medioButton').addEventListener('click', function () { creacionTablero(12); });
        document.getElementById('dificilButton').addEventListener('click', function () { creacionTablero(16); });
        //kk
        document.getElementById('test').addEventListener('click', function () { matrizToString() });

    }
    /**
     * Genera el tablero del buscamimas
     * @param {Valor que va a determinar el numero de minas y lo grande que es el tablero} dificultad 
     */
    function creacionTablero(dificultad) {
        numMinas = dificultad;
        generarMatriz(dificultad, dificultad);
        insertarMinas(dificultad);
        limpiaDOM();
        creaTableroArbolDOM();
    }
    /**
     * Genera una matriz bisimensional de ceros.
     * @param {Anchura de la matriz} x 
     * @param {Altura de la matriz} y 
     */
    function generarMatriz(x, y) {
        matriz = [];
        for (let i = 0; i < x; i++) {
            matriz[i] = []
            for (let j = 0; j < y; j++) {
                matriz[i][j] = 0;
            }
        }
        //kk
        //console.log(matriz);
    }
    /**
     * Inserta las minas en la matriz;
     */
    function insertarMinas(numMinas) {
        let num1;
        let num2;
        for (let i = 0; i < numMinas; i++) {
            do {
                num1 = generaNumeroAleatorio(0, matriz.length-1);
                num2 = generaNumeroAleatorio(0, matriz[1].length-1);
            } while (matriz[num1][num2] == 9)
            matriz[num1][num2] = 9;
        }
        actualizaTablero();
    }

    /**
     * Actualiza los valores del tablero a las minas.
     */
    function actualizaTablero() {
        //kk
        //console.log(matriz.length);
        //console.log(matriz[1].length);

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                if (matriz[i][j] == 9) {
                    if (i != 0)
                        if (matriz[i - 1][j] !== 9)
                            matriz[i - 1][j]++;
                    if (i != matriz.length - 1)
                        if (matriz[i + 1][j] !== 9)
                            matriz[i + 1][j]++;
                    if (j != matriz[1].length - 1)
                        if (matriz[i][j + 1] !== 9)
                            matriz[i][j + 1]++;
                    if (j != 0)
                        if (matriz[i][j - 1] !== 9)
                            matriz[i][j - 1]++;
                    if (j !== 0 && i !== matriz.length - 1)
                        if (matriz[i + 1][j - 1] !== 9)
                            matriz[i + 1][j - 1]++;
                    if (i != 0 && j != 0)
                        if (matriz[i - 1][j - 1] !== 9)
                            matriz[i - 1][j - 1]++;
                    if (i != matriz.length - 1 && j != matriz[1].length - 1)
                        if (matriz[i + 1][j + 1] !== 9)
                            matriz[i + 1][j + 1]++;
                    if (i != 0 && j != matriz[1].length - 1)
                        if (matriz[i - 1][j + 1] !== 9)
                            matriz[i - 1][j + 1]++;
                    //console.log('a');
                    //kk
                    //console.log(i+' '+j);
                }
            }
        }
    }
    function matrizToString() {
        let str = '';
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                //kk
                //console.log(i+' '+j);
                str += matriz[i][j] + "\t ";
                if (j == matriz[1].length - 1)
                    str += '\n'
            }
        }
        console.log(str);
        return str;
    }
    /**
     * Crea el tablero con div;
     */
    function creaTableroArbolDOM() {
        contenedor = body.appendChild(document.createElement('div'));
        contenedor.style.width = "60%";
        contenedor.style.margin = "0 auto";
        contenedor.style.border = "5px solid black";
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                input = contenedor.appendChild(document.createElement('input'))
                input.type = 'submit';
                input.value = "";
                input.valor = matriz[i][j];
                input.style.width = 100 / matriz.length + "%";
                input.style.height = 800 / matriz.length + 'px';
                input.style.backgroundImage = "url(img/inicial.png)";
                input.addEventListener('click', () => compruebaBomba(i, j))
                matriz[i][j] = input;
            }
        }
    }
    function compruebaBomba(i, j) {
        if (i < 0 || j >= matriz.length) {
            return;
        }
        if (matriz[i][j].valor == 9) {
            matriz[i][j].style.backgroundImage = "url(img/mina.png)";
            matriz[i][j].style.backgroundSize = "cover";
            matriz[i][j].value = "";
        } else {
            matriz[i][j].value = matriz[i][j].valor;
            matriz[i][j].style.backgroundImage = "url(img/final.png)";
            matriz[i][j].removeEventListener('click', () => compruebaBomba(i, j));
        }
        //matriz.style.display === "none";
        if (matriz[i][j].valor == 0) {
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
    function limpiaDOM() {
        body.removeChild(body.childNodes[body.childNodes.length - 1])
    }

    /**
     * Genera un numero aletorio entre un mínimo y un máximo.
     */
    function generaNumeroAleatorio(min, max) {
        //kk
        //console.log(Math.round(Math.random() * (max - min) + min));
        return Math.round(Math.random() * (max - min) + min);
    }

    document.addEventListener('DOMContentLoaded', init);
}