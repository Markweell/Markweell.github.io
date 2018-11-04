{

    /**
    * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
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
            pDescripcion.innerHTML += "El operador in devuelve true si la propiedad especificada está en el objeto especificado o su prototipo.";
            pDescripcion.innerHTML += "<br><tb>Teniendo el array: arboles = ['secoya', 'pino', 'cedro', 'roble', 'arce']";
            arboles = ['secoya', 'pino', 'cedro', 'roble', 'arce'];
            pDescripcion.innerHTML += "<br> 0 in arboles: ";
            pDescripcion.innerHTML += 0 in arboles;       // devuelve true
            pDescripcion.innerHTML += "<br> 3 in arboles: ";
            pDescripcion.innerHTML += 3 in arboles;       // devuelve true
            pDescripcion.innerHTML += "<br> 6 in arboles: ";
            pDescripcion.innerHTML += 6 in arboles;       // devuelve false
            pDescripcion.innerHTML += "<br> 'pino' in arboles: ";
            pDescripcion.innerHTML += "pino" in arboles;  // devuelve false (debe especificar el número de índice,no el valor del índice)
            pDescripcion.innerHTML += "<br> length in arboles: ";
            pDescripcion.innerHTML += "length" in arboles;

            // Objetos predefinidos
            "PI" in Math        // devuelve true

            // Objetos personalizados
            var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
            "marca" in micoche  // devuelve true
            "modelo" in micoche // devuelve true

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}