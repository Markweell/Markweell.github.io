{

    /**
    * Mediante ejemplos, indica valores y utilidad de lastMatch en una expresión regular. ¿Funciona en todos los navegadores?
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
        regex4 = /hola/m;
        regex5 = /hola/mgi;
        array = [
            { texto: "regex1 = /hola/g", contenido: str.match(regex1), lastMatch: RegExp.lastMatch },
            { texto: "regex2 = /hola/i", contenido: str.match(regex2), lastMatch: RegExp.lastMatch },
            { texto: "regex3 = /hola/gi", contenido: str.match(regex3), lastMatch: RegExp.lastMatch },
            { texto: "regex4 = /hola/m", contenido: str.match(regex4), lastMatch: RegExp.lastMatch },
            { texto: "regex5 = /hola/mgi", contenido: str.match(regex5), lastMatch: RegExp.lastMatch}
        ];
        let li;
        li = document.createElement("li");
        li.innerHTML = "Buscando coincidencias en: "+str;
        listaMadre.appendChild(li);
        for (let i = 0; i < array.length; i++) {
            li = document.createElement("li");
            li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado:&nbsp&nbsp&nbsp<u>" + array[i].contenido
                + "</u>&nbsp Primero vemos lo que nos devuelve .lastMatch &nbsp&nbsp&nbsp<u>" + array[i].lastMatch+ "</u>.";
            listaMadre.appendChild(li);
        }
        definicion();
    }
    function definicion() {
        parrafo = lista.appendChild(document.createElement("p"));
        parrafo.appendChild(document.createElement("h3")).innerHTML = "Teoría: ";
        listaDefinicion = parrafo.appendChild(document.createElement("ol"));
        li1 = document.createElement("li");
        li1.innerHTML = ".lastMach devuelve la última coincidencia que encuentra. "
        listaDefinicion.appendChild(li1);
    }

    window.addEventListener("DOMContentLoaded", init);

}
}