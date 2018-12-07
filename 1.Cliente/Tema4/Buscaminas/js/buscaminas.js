// buscaminas = (function()
// {
//     numMinas=10;
//     return {
//         numMinas:numMinas
//     }
// })
// ();

buscaminas = {
    matriz:[],
    Buscaminas: function (dificultad) {
        switch (dificultad) {
            case 1:
                buscaminas.crearTablero(8, 8, 10);
                break;
            case 2:
                buscaminas.crearTablero(16, 16, 40);
                break;
            case 3:
                buscaminas.crearTablero(30, 30, 99);
                break;
        }
    },
    crearTablero: function (x, y, numMinas) {
        buscaminas.generaMatrizVacia(x, y);
        buscaminas.insertarMinas(numMinas);
    },

    generaMatrizVacia: function (x, y) {
        matriz = [];
        for (let i = 0; i < x; i++) {
            matriz[i] = []
            for (let j = 0; j < y; j++) {
                matriz[i][j] = 0;
            }
        }
        buscaminas.matriz = matriz;
    },

    insertarMinas: function (numMinas) {
        let num1;
        let num2;
        for (let i = 0; i < numMinas; i++) {
            do {
                num1 = buscaminas.generaNumeroAleatorio(0, buscaminas.matriz.length - 1);
                num2 = buscaminas.generaNumeroAleatorio(0, buscaminas.matriz[1].length - 1);
            } while (buscaminas.matriz[num1][num2] == 9)
            buscaminas.matriz[num1][num2] = 9;
        }
        buscaminas.actualizaTablero();
    },
    actualizaTablero: function () {
        for (let i = 0; i < buscaminas.matriz.length; i++) {
            for (let j = 0; j < buscaminas.matriz[1].length; j++) {
                if (buscaminas.matriz[i][j] == 9) {
                    if (i != 0)
                        if (buscaminas.matriz[i - 1][j] !== 9)
                            buscaminas.matriz[i - 1][j]++;
                    if (i != buscaminas.matriz.length - 1)
                        if (buscaminas.matriz[i + 1][j] !== 9)
                            buscaminas.matriz[i + 1][j]++;
                    if (j != buscaminas.matriz[1].length - 1)
                        if (buscaminas.matriz[i][j + 1] !== 9)
                            buscaminas.matriz[i][j + 1]++;
                    if (j != 0)
                        if (buscaminas.matriz[i][j - 1] !== 9)
                            buscaminas.matriz[i][j - 1]++;
                    if (j !== 0 && i !== buscaminas.matriz.length - 1)
                        if (buscaminas.matriz[i + 1][j - 1] !== 9)
                            buscaminas.matriz[i + 1][j - 1]++;
                    if (i != 0 && j != 0)
                        if (buscaminas.matriz[i - 1][j - 1] !== 9)
                            buscaminas.matriz[i - 1][j - 1]++;
                    if (i != buscaminas.matriz.length - 1 && j != buscaminas.matriz[1].length - 1)
                        if (buscaminas.matriz[i + 1][j + 1] !== 9)
                            buscaminas.matriz[i + 1][j + 1]++;
                    if (i != 0 && j != buscaminas.matriz[1].length - 1)
                        if (buscaminas.matriz[i - 1][j + 1] !== 9)
                            buscaminas.matriz[i - 1][j + 1]++;
                }
            }
        }

    },
    generaNumeroAleatorio : function(min,max){
        return Math.round(Math.random()*(max-min)+min);
    }

} 
