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
                { texto: "regex1 = /hola/g", contenido: regex1.exec(str) },
                { texto: "regex2 = /hola/i", contenido: regex2.exec(str) },
                { texto: "regex3 = /(h)(o)(l)(a)/gi;", contenido: regex3.exec(str) },
                { texto: "regex4 = /perro/gi", contenido: regex4.exec(str) },
                { texto: "regex5 = /marcos/gi", contenido: regex5.exec(str) }
            ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: " + str;
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado del regex.exec(string):&nbsp&nbsp&nbsp<u>" + array[i].contenido;
                listaMadre.appendChild(li);
            }
            definicion();
        }
        function definicion() {
            parrafo = lista.appendChild(document.createElement("p"));
            parrafo.appendChild(document.createElement("h3")).innerHTML = "Teoría: ";
            listaDefinicion = parrafo.appendChild(document.createElement("ol"));
            li1 = document.createElement("li");
            li1.innerHTML = "regex.exec(string) devuelve un array con el primer elemento que ha encontrado, y con todos los grupos que le hayas puesto.   "
            listaDefinicion.appendChild(li1);
        }


        window.addEventListener("DOMContentLoaded", init);

    }
}