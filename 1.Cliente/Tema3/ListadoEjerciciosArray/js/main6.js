{

    /**
    * Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            array = crearArray('hola', 'a', 'todos', 1, 2, 3, "hola", 9.8, [5, 6, "hola"]);
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            array.forEach(element => {
                pDescripcion.innerHTML += element + ", ";
            });
        }
        function crearArray(...arg) {
            array = [];
            arg.forEach(element => {
                if (Array.isArray(element)) {
                    element.forEach(element1 => {
                        array.push(element1);
                    });
                } else { array.push(element); }

            });
            return array;
        }
        window.addEventListener("DOMContentLoaded", init);
    }
}