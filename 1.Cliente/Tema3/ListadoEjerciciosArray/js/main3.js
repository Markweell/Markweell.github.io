{

    /**
    * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
    * @author Marcos Gallardo Pérez
    */
    {

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            // Arrays
            pDescripcion.innerHTML += "Con isArray Comprobamos si es una array o no ";
            pDescripcion.innerHTML += "<br><tb>Teniendo el array: arboles = ['secoya', 'pino', 'cedro', 'roble', 'arce']<br>¿Es arboles un array?:<br> Array.isArray(arboles):  ";
            arboles = ['secoya', 'pino', 'cedro', 'roble', 'arce'];
            pDescripcion.innerHTML += Array.isArray(arboles);

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}