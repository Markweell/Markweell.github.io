{
    /**
     * @author Marcos Gallardo Pérez
     */
    let numMinas;
    let matriz;
    /**
     * Carga de los elementos y funciones básicas para el comportamiento de la página.
     */
    function init() {
        document.getElementById('facilButton').addEventListener('click', function () { creacionTablero(8); });
        document.getElementById('medioButton').addEventListener('click', function () { creacionTablero(12); });
        document.getElementById('dificilButton').addEventListener('click', function () { creacionTablero(16); });
        //kk
        document.getElementById('test').addEventListener('click', function () { generaNumeroAleatorio(0, 10); });
    }
    /**
     * Genera el tablero del buscamimas
     * @param {Valor que va a determinar el numero de minas y lo grande que es el tablero} dificultad 
     */
    function creacionTablero(dificultad) {
        numMinas = dificultad;
        generarMatriz(dificultad, dificultad);
        insertarMinas(numMinas);
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
        console.log(matriz);
    }
    /**
     * Inserta las minas en la matriz;
     */
    function insertarMinas(numMinas) {
        for (let i = 0; i < numMinas; i++) {
            let num1 = generaNumeroAleatorio(0, numMinas);
            let num2 = generaNumeroAleatorio(0, numMinas);
            matriz[num1][num2] = 'O';
        }
        actualizaTablero();
        //kk
        //console.log(matriz);
    }

    /**
     * Actualiza los valores del tablero a las minas.
     */
    function actualizaTablero() {
        //kk
        //console.log(matriz.length);
        //console.log(matriz[1].length);
        
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j <matriz[1].length; j++) {
                if (matriz[i][j]=='O'){
                    //kk
                    //console.log(i+' '+j);
                }
            }
        }
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