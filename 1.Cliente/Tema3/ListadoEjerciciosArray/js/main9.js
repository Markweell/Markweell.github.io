{

    /**
    * Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
    * Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
    * Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
    * @author Marcos Gallardo Pérez
    */
    {

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));

            //Con push
            array = [];
            t0 = performance.now();
            for (let i = 0; i < 1000001; i++) {
                array.push(i);
            }
            t1 = performance.now();
            pDescripcion.innerHTML += "Push tardó " + (t1 - t0) + " milisegundos.<br>";
            //Pop
            t0 = performance.now();
            for (let i = 0; i < 1000001; i++) {
                array.pop();
            }
            t1 = performance.now();
            pDescripcion.innerHTML += "Pop tardó " + (t1 - t0) + " milisegundos.<br>";
            //Con unshift
            array = [];
            t0 = performance.now();
            for (let i = 0; i < 1000001; i++) {
                array.unshift(i);
            }
            t1 = performance.now();
            pDescripcion.innerHTML += "Unshift tardó " + (t1 - t0) + " milisegundos.<br>";
            //Shift
            t0 = performance.now();
            for (let i = 0; i < 1000001; i++) {
                array.shift();
            }
            t1 = performance.now();
            pDescripcion.innerHTML += "Shift tardó " + (t1 - t0) + " milisegundos.<br>";
            //directamente
            array = [];
            t0 = performance.now();
            for (let i = 0; i < 1000001; i++) {
                array[i] = i;
            }
            t1 = performance.now();
            pDescripcion.innerHTML += "Directamente tardó " + (t1 - t0) + " milisegundos.<br>";

            //Fijando tamaño
            t0 = performance.now();
            array = new Array(1000001);
            t1 = performance.now();
            pDescripcion.innerHTML += "Fijando tamaño tardó " + (t1 - t0) + " milisegundos.<br>";


        }
        window.addEventListener("DOMContentLoaded", init);
    }
}