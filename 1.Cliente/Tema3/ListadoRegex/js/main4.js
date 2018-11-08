{

    /**
    * En una expresión regular, indica la utilidad del campo .source. Diferencia con toString()
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
            str = "Hola hola hoLa Soy soi Marcos marcos<br>holaHola";
            regex1 = /hola/g;
            regex2 = /hola/i;
            regex3 = /hola/gi;
            regex4 = /hola/m;
            regex5 = /hola/mgi;
            array = [
                { texto: "regex1 = /hola/g", contenido: str.match(regex1), source: regex1.source, string: regex1.toString() },
                { texto: "regex2 = /hola/i", contenido: str.match(regex2), source: regex1.source, string: regex1.toString() },
                { texto: "regex3 = /hola/gi", contenido: str.match(regex3), source: regex1.source, string: regex1.toString() },
                { texto: "regex4 = /hola/m", contenido: str.match(regex4), source: regex1.source, string: regex1.toString() },
                { texto: "regex5 = /hola/mgi", contenido: str.match(regex5), source: regex1.source, string: regex1.toString() }
            ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: \"Hola hola hoLa Soy soi Marcos marcos <br>holaHola\"";
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado:&nbsp&nbsp&nbsp<u>" + array[i].contenido
                    + "</u>&nbsp Primero vemos lo que nos devuelve .source: &nbsp&nbsp&nbsp<u>" + array[i].source + "</u>&nbsp&nbsp&nbsp "
                    + "y a continuacion toString(): &nbsp&nbsp&nbsp<u>" + array[i].string + "</u>.";
                listaMadre.appendChild(li);
            }
        }

        window.addEventListener("DOMContentLoaded", init);

    }
}