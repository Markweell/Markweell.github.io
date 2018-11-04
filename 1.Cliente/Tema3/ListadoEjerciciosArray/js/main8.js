{

    /**
    * Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
    * @author Marcos Gallardo Pérez
    */
    {
        /*
        El método forEach() ejecuta la función indicada una vez por cada elemento del array.
        El método every() devuelve un booleano, true si todos los elementos en el arreglo pasan la condición implementada por la función dada y false si alguno no la cumple.
        El método some() retorna un valor booleano, true si algún elemento del array cumple con la condición implementada por la función brindada, y false en caso de que ningún elemento cumpla con dicha condición.
        El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
        */

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            descripcion = document.getElementById("descripcion");
            pDescripcion = descripcion.appendChild(document.createElement("p"));
            words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

            pDescripcion.innerHTML = "En primer caso lo recorremos con foreach y lo mostramos<br>";

            words.forEach(element => {
                pDescripcion.innerHTML += element + " ";
            });
            //every
            pDescripcion.innerHTML += "<br> Ahora con every comprobamos si todos los elementos del array son palabras";
            pDescripcion.innerHTML += "<br> " + words.every(compruebaSiEsPalabra);
            //some
            pDescripcion.innerHTML += "<br> Ahora con some comprobamos si alguna palabra tiene más de 6 letras:";
            pDescripcion.innerHTML += "<br> " + words.some(compruebaSiEsMayorASeis);
            //filter
            arrayFilter = words.filter(word => word.length > 6);
            pDescripcion.innerHTML += "<br> Con filter solo mostramos las palabras que tienen más de 6 letras<br>";

            arrayFilter.forEach(element => {
                pDescripcion.innerHTML += element + " ";
            });
        }
        function compruebaSiEsPalabra(currentValue) {
            return isNaN(currentValue);
        }
        function compruebaSiEsMayorASeis(currentValue) {
            return currentValue.length > 6;
        }
        window.addEventListener("DOMContentLoaded", init);
    }
}