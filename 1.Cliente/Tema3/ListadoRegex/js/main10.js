{

    /**
    * Mediante un ejemplo real, indica la utilidad del método test();
    * @author Marcos Gallardo Pérez
    */
    {

        let lista;
        let listaMadre;

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            lista = document.getElementById("contenido");
            listaMadre = lista.appendChild(document.createElement("ul"));
            str = "hola hola hoLa Soy soi Marcos marcos<br>holaHoLa";
            regex1 = /hola/g;
            regex2 = /hola/i;
            regex3 = /(h)(o)(l)(a)/gi;
            regex4 = /perro/gi;
            regex5 = /marcos/gi;
            array = [
                { texto: "regex1 = /hola/g", contenido: str.match(regex1) },
                { texto: "regex2 = /hola/i", contenido: str.match(regex2) },
                { texto: "regex3 = /(h)(o)(l)(a)/gi;", contenido: str.match(regex3) },
                { texto: "regex4 = /perro/gi", contenido: str.match(regex4) },
                { texto: "regex5 = /marcos/gi", contenido: str.match(regex5) }
            ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: " + str;
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado del string.match(regex):&nbsp&nbsp&nbsp<u>" + array[i].contenido;
                listaMadre.appendChild(li);
            }
            definicion();
        }
        function definicion() {
            parrafo = lista.appendChild(document.createElement("p"));
            parrafo.appendChild(document.createElement("h3")).innerHTML = "Teoría: ";
            listaDefinicion = parrafo.appendChild(document.createElement("ol"));
            li1 = document.createElement("li");
            li1.innerHTML = "str.match(regex) devuelve un array con las coincidencias en el str de los patrones compatibles con el regex que has definido."
            listaDefinicion.appendChild(li1);
        }


        window.addEventListener("DOMContentLoaded", init);

    }
}