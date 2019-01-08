let buscamina = (function (dificultad = 2) {
        let campoMinas;
        init(dificultad);
        function init(dificultad) {
            switch (dificultad) {
                case 2:
                    crearTablero(16, 16, 40);
                    break;
                case 3:
                    crearTablero(30, 30, 99);
                    break;
                case 1:
                default:
                    crearTablero(8, 8, 10);
                    break;
            }
        }

        function crearTablero(x, y, numMinas) {
            generaMatrizVacia(x, y);
            insertarMinas(numMinas);
        }

        function generaMatrizVacia(x, y) {
            let matriz = [];
            for (let i = 0; i < x; i++) {
                matriz[i] = []
                for (let j = 0; j < y; j++) {
                    matriz[i][j] = 0;
                }
            }
            campoMinas = matriz;
        }

        function insertarMinas(numMinas) {
            let num1;
            let num2;
            for (let i = 0; i < numMinas; i++) {
                do {
                    num1 = generaNumeroAleatorio(0, campoMinas.length - 1);
                    num2 = generaNumeroAleatorio(0, campoMinas[1].length - 1);
                } while (campoMinas[num1][num2] == 9)
                campoMinas[num1][num2] = 9;
            }
            actualizaTablero();
        }

        function actualizaTablero() {
            for (let i = 0; i < campoMinas.length; i++) {
                for (let j = 0; j < campoMinas[1].length; j++) {
                    if (campoMinas[i][j] == 9) {
                        if (i != 0)
                            if (campoMinas[i - 1][j] !== 9)
                                campoMinas[i - 1][j]++;
                        if (i != campoMinas.length - 1)
                            if (campoMinas[i + 1][j] !== 9)
                                campoMinas[i + 1][j]++;
                        if (j != campoMinas[1].length - 1)
                            if (campoMinas[i][j + 1] !== 9)
                                campoMinas[i][j + 1]++;
                        if (j != 0)
                            if (campoMinas[i][j - 1] !== 9)
                                campoMinas[i][j - 1]++;
                        if (j !== 0 && i !== campoMinas.length - 1)
                            if (campoMinas[i + 1][j - 1] !== 9)
                                campoMinas[i + 1][j - 1]++;
                        if (i != 0 && j != 0)
                            if (campoMinas[i - 1][j - 1] !== 9)
                                campoMinas[i - 1][j - 1]++;
                        if (i != campoMinas.length - 1 && j != campoMinas[1].length - 1)
                            if (campoMinas[i + 1][j + 1] !== 9)
                                campoMinas[i + 1][j + 1]++;
                        if (i != 0 && j != campoMinas[1].length - 1)
                            if (campoMinas[i - 1][j + 1] !== 9)
                                campoMinas[i - 1][j + 1]++;
                    }
                }
            }

        }

        function generaNumeroAleatorio(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
        return {
            init:init,
            campoMinas: campoMinas
        }
    })();