{
    /**
     * Tanto los arrays javaScript como los Sets permiten almacenar elementos. 
     * Indica la diferencia entre ambos.
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener("DOMContentLoaded", init);

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            let parrafoPadre = document.getElementById("Contenido");
            let parrafo1 = parrafoPadre.appendChild(document.createElement("p"));
            myArray = [];
            mySet = new Set();
            let o = {Author:"Marcos"};
            let template = `
            <h1>Map</h1>
            <ol>
                <li>Conjunto de elementos de tipo: </li>
                <p> Objeto iterable cuyos elementos son pares clave-valor.</p>
                <li>Constructor admite como parámetros: </li>
                <p> Un objeto iterable cuyos elementos son pares clave-valor.</p>
                <li>Métodos para añadir: </li>
                <p> Map.prototype.set(key, value) </p>
                <li>Métodos para eliminar: </li>
                <p>Map.prototype.delete(key), Map.prototype.clear()</p>
                <li>Métodos para buscar: </li>
                <p>Map.prototype.entries(), Map.prototype.has(key), Map.prototype.values()</p>
                <li>Número de elementos:</li>
                <p>Map.prototype.size</p>
                <li>Si dos elementos son iguales: </li>
                <p>Se sobrescriben</p>
                <li>Se recorren mediante: </li>
                <p>Map.prototype.forEach(callbackFn[, thisArg]), o for...of</p>
            </ol>

                `;
            parrafo1.innerHTML = template;
        }
        function pasarSetArray(mySet) {
            arraySet = [];
            for (var item of mySet.keys())
                arraySet.push(item);
            return arraySet
        }
        function annadeElementosArray(elemento,array){
            array.push(elemento);
            return array;
        }
        function annadeElementosSet(elemento,mySet){
            mySet.add(elemento);
            return pasarSetArray(mySet);
        }
    }
}