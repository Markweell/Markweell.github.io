{

    /**
    * Crea  una función que devuelva un array con cada uno de los argumentos.
    * @author Marcos Gallardo Pérez
    */
    {

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            array = crearArray('hola', 'a', 'todos', 1, 2, 3, "hola", 9.8);
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            array.forEach(element => {
                pDescripcion.innerHTML += element + ", ";
            });
        }
        function crearArray(...arg) {
            array = [];
            arg.forEach(element => {
                array.push(element);
            });
            return array;
        }
        window.addEventListener("DOMContentLoaded", init);
    }
}