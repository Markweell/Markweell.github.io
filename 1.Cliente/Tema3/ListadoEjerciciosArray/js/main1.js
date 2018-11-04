{

    /**
    * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
    * @author Marcos Gallardo Pérez
    */
    {

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            pDescripcion.innerHTML = "La sintaxis del foreach es:<br>"
                + "arr.forEach(function callback(currentValue,index,array){<br> //su iterador<br>}[, thisArg]);"
                + " <br> Donde currentValue es el valor del elemento que esta iterando, index su indice y array es el vector en el que foreach se esta aplicando "
                + " <br> ejemplo: array = ['hola','a','todos']";
            array = ['hola', 'a', 'todos'];
            array.forEach(element => {
                pDescripcion.innerHTML += "<br>" + element;
            });
            pDescripcion.innerHTML += "<br><br>Otra manera:<br> ";
            array.forEach(function (elemento, index, array) {
                pDescripcion.innerHTML += "<br>" + elemento + " en el indice: " + index + " Del array " + array;

            });

        }
        window.addEventListener("DOMContentLoaded", init);

    }
}