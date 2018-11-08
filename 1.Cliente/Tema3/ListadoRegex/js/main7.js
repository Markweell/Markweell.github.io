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
            regex3 = /hola/gi;
            regex4 = /perro/gi;
            regex5 = /marcos/gi;
            array = [
                { texto: "regex1 = /hola/g", contenido: regex1.test(str) },
                { texto: "regex2 = /hola/i", contenido: regex2.test(str) },
                { texto: "regex3 = /hola/gi", contenido: regex3.test(str) },
                { texto: "regex4 = /perro/gi", contenido: regex4.test(str) },
                { texto: "regex5 = /marcos/gi", contenido: regex5.test(str) }
            ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: " + str;
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado del regex.test(string):&nbsp&nbsp&nbsp<u>" + array[i].contenido;
                listaMadre.appendChild(li);
            }
           
        }


        window.addEventListener("DOMContentLoaded", init);

    }
}