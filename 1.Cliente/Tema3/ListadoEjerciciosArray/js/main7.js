{

    /**
    * Crea una función que elimine todos los undefined de un array.
    * @author Marcos Gallardo Pérez
    */
    {

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            array = [undefined, "hola", 1, 2, undefined, 7];
            array = eliminaUndefined(array);
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            array.forEach(element => {
                pDescripcion.innerHTML += element + ", ";
            });
        }
        function eliminaUndefined(array) {
            if (Array.isArray(array)) {
                array.forEach(function (element, index, array) {
                    if (typeof element === 'undefined') {
                        array.splice(index, 1);
                    }
                });
            }
            return array;
        }
        window.addEventListener("DOMContentLoaded", init);
    }
}