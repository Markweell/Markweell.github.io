{

    /**
    * Indica las distintas formas de crear expresiones regulares.
    * @author Marcos Gallardo Pérez
    */
    {

        let lista;
        let arrayElementosLista;
        let listaMadre;

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            lista = document.getElementById("contenido");
            listaMadre = lista.appendChild(document.createElement("ul"));
            regex1 = new RegExp('hola');
            regex2 = /hola/;
            array = [
                { texto: "regex1 = new RegExp('hola')", contenido: regex1.toSource()  },
                { texto: "regex2 = /hola/", contenido: regex2.toSource() },
               ];
            let li;
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado:&nbsp&nbsp&nbsp" + array[i].contenido;
                listaMadre.appendChild(li);
            }
        }
        window.addEventListener("DOMContentLoaded", init);

    }
}