{

    /**
    * Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. Explica en cada uno la diferencia con respecto a los demás.
    * window.outerHeight
    * window.innerHeight
    * window.screen.availHeight
    * window.screen.height
    * window.document.clientHeight
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
            lista = document.getElementById("lista");
            listaMadre = lista.appendChild(document.createElement("ul"));
            arrayElementosLista = [
                { id: "outerHeight", texto: "window.outerHeight", comando: window.outerHeight, title: "Altura externa de toda la ventana en pixeles " },
                { id: "innerHeight", texto: "window.innerHeight", comando: window.innerHeight, title: "Altura interna de la ventana del navegador." },
                { id: "availHeight", texto: "window.screen.availHeight", comando: window.screen.availHeight, title: "Devuelve el espacio total vertical disponible en la pantalla" },
                { id: "screen.height", texto: "window.screen.height", comando: window.screen.height, title: "Devuelve la altura en pixeles de la pantalla" },
                { id: "clientHeight", texto: "window.document.clientHeight", comando: "Esta funcionalidad es obsoleta", title: "Devuelve la altura del objeto document . En la mayoría de los casos, esto equivale al elemento <body>  del documento actual. Esta funcionalidad está obsoleta" }
            ];
            let li;
            for (let i = 0; i < arrayElementosLista.length; i++) {
                li = document.createElement("li");
                li.title = arrayElementosLista[i].title;
                li.id = arrayElementosLista[i].id;
                li.innerHTML = "<b>" + arrayElementosLista[i].texto + "</b>: " + arrayElementosLista[i].comando;
                listaMadre.appendChild(li);
            }
        }
        window.addEventListener("DOMContentLoaded", init);

    }
}