{

    /**
    * En una expresión regular, indica la utilidad del campo .global. Indica otros métodos relacionados,
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
            str= "Hola hola hoLa Soy soi Marcos marcos<br>holaHola";
            regex1 = /hola/g;
            regex2 = /hola/i;
            regex3 = /hola/gi;
            regex4 = /hola/m;
            regex5 = /hola/mgi;
            array = [
                { texto: "regex1 = /hola/g", contenido: str.match(regex1)  },
                { texto: "regex2 = /hola/i", contenido: str.match(regex2)  },
                { texto: "regex3 = /hola/gi", contenido: str.match(regex3) },
                { texto: "regex4 = /hola/m", contenido: str.match(regex4) },
                { texto: "regex5 = /hola/mgi", contenido: str.match(regex5) }
               ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: \"Hola hola hoLa Soy soi Marcos marcos <br>holaHola\"";
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado:&nbsp&nbsp&nbsp" + array[i].contenido;
                listaMadre.appendChild(li);
            }
            definicion();
           
        }

        function definicion(){
            parrafo = lista.appendChild(document.createElement("p"));
            parrafo.appendChild(document.createElement("h3")).innerHTML="Definición de los modificadores: ";
            listaDefinicion = parrafo.appendChild(document.createElement("ol"));
            li1=document.createElement("li");
            li1.innerHTML = "-i: especifica que la búsqueda se realiza sin diferenciar entre mayúsculas y minúsculas."
            listaDefinicion.appendChild(li1);
            li2=document.createElement("li");
            li2.innerHTML = "-g: indica que los caracteres a buscar pueden ser encontrados varias veces en la cadena de caracteres."
            listaDefinicion.appendChild(li2);
            li3=document.createElement("li");
            li3.innerHTML = "-m: el modificador m realiza coincidencia de patrones en el modo multilínea. En este modo, si la cadena"
            +" a buscar contiene varias líneas, el metacaracter ^ y $ deben coincidir con el inicio y final de una línea, además de que "
            +" coincida con el comienzo y el final de una cadena.";
            listaDefinicion.appendChild(li3);
        }
        window.addEventListener("DOMContentLoaded", init);

    }
}