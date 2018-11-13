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
                <p>Vamos a comparar set con arrays. Para ello creamos <br>
                myArray = [];<br>
                mySet = new Set();
                Para añadir elementos en el array podemos usar push y para set usamos add:<br>
                myArray.push(1) y mostramos lo que tiene ${annadeElementosArray(1,myArray)};<br>
                mySet.add(1);  y mostramos lo que tiene ${annadeElementosSet(1,mySet)}<br>
                La primera diferencia es la manera de insertar los elementos. Y para mostrarlo, 
                el Set lo tenemos que recorrer con un for... of.<br>
                La siguiente diferencia la ejemplifico ahora mismo: Añadamos de nuevo otro 1.<br>
                myArray.push(1) y mostramos lo que tiene ${annadeElementosArray(1,myArray)};<br>
                mySet.add(1);  y mostramos lo que tiene ${annadeElementosSet(1,mySet)};<br>
                Añadamos un "hola" y mostremoslo<br>
                myArray.push("hola") y mostramos lo que tiene ${annadeElementosArray("hola",myArray)};<br>
                mySet.add("hola");  y mostramos lo que tiene ${annadeElementosSet("hola",mySet)};<br>
                Añadamos otro "hola":<br>
                myArray.push("hola") y mostramos lo que tiene ${annadeElementosArray("hola",myArray)};<br>
                mySet.add("hola");  y mostramos lo que tiene ${annadeElementosSet("hola",mySet)};<br>
                Como podemos ver. Set no almacena elementos dobles. Solo el primero de ambos. Ahora a ver que pasa si guardamos un
                objeto. Creamos el objeto o={Author:"Marcos"};<br>
                myArray.push(o) y mostramos lo que tiene el objeto o.author dentro del array ${annadeElementosArray(o,myArray)[4].Author};<br>
                mySet.add(o);  y mostramos lo que tiene el objeto o.author dentro del set ${annadeElementosSet(o,mySet)[2].Author};<br>
                Tras todas estas comprobaciones, concluimos en que set esta más destinado a devolver iteradores y a iterarlo. 
                </p>

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