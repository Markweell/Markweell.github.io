{

    /**
    * Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
    * @author Marcos Gallardo Pérez
    */
    {
        let tamanioArray = 15;
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            array = crearArray(tamanioArray);
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            array.forEach(element => {
                pDescripcion.innerHTML += element + ", ";
            });
        }
        function crearArray(tamanio) {
            let array = [], i = 0;
            while (array.length < tamanio) {
                array.push(i++);
            }
            return array;
        }
        window.addEventListener("DOMContentLoaded", init);
    }
}