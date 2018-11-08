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
            array = [
                { texto: "str.includes(\"hola\")", contenido: str.includes("hola") },
                { texto: "str.includes(\"perro\")", contenido: str.includes("perro") },
                { texto: "str.includes(\"marcos\")", contenido:str.includes("marcos") }
            ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: " + str;
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado :&nbsp&nbsp&nbsp<u>" + array[i].contenido;
                listaMadre.appendChild(li);
            }
            definicion();
        }
        function definicion() {
            parrafo = lista.appendChild(document.createElement("p"));
            parrafo.appendChild(document.createElement("h3")).innerHTML = "Teoría: ";
            listaDefinicion = parrafo.appendChild(document.createElement("ol"));
            li1 = document.createElement("li");
            li1.innerHTML = "str.includes(\"hola\") devuelve true o false depuendiendo si \"hola\" se encuentra o no en str"
            listaDefinicion.appendChild(li1);
        }


        window.addEventListener("DOMContentLoaded", init);

    }
}