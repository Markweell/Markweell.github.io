{

    /**
    * Mediante ejemplos, indica valores y utilidad de index y lastIndex en una expresión regular. ¿Funciona en todos los navegadores?
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
            regex6 = /hola/y;
            regex6.lastIndex = 5;
            regex7 = /hola/y;
            regex7.lastIndex = 4;
            array = [
                { texto: "regex1 = /hola/g", contenido: regex1.test(str), lastIndex: regex1.lastIndex },
                { texto: "regex2 = /hola/i", contenido: regex2.test(str), lastIndex: regex2.lastIndex },
                { texto: "regex3 = /hola/gi", contenido: regex3.test(str), lastIndex: regex3.lastIndex },
                { texto: "regex4 = /hola/m", contenido: regex4.test(str), lastIndex: regex4.lastIndex },
                { texto: "regex5 = /hola/mgi", contenido: regex5.test(str), lastIndex: regex5.lastIndex },
                { texto: "regex6 = /hola/y  con regex6.lastIndex=5", contenido: regex6.test(str), lastIndex: regex6.lastIndex },
                { texto: "regex7 = /hola/y  con regex7.lastIndex=4", contenido: regex7.test(str), lastIndex: regex7.lastIndex }
            ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: \"Hola hola hoLa Soy soi Marcos marcos <br>holaHola\"";
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado:&nbsp&nbsp&nbsp<u>" + array[i].contenido
                    + "</u>&nbsp Lo que nos devuelve .lastIndex es el último indice del primer elemento que ha encontrado:"
                " &nbsp&nbsp&nbsp<u>" + array[i].lastIndex + "</u>.";
                switch (i) {
                    case 0:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex1.lastIndex + "</u>.";
                        break;
                    case 1:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex2.lastIndex + "</u>.";
                        break;
                    case 2:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex3.lastIndex + "</u>.";
                        break;
                    case 3:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex4.lastIndex + "</u>.";
                        break;
                    case 4:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex5.lastIndex + "</u>.";
                        break;
                    case 5:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex6.lastIndex + "</u>.";
                        break;
                    case 6:
                        li.innerHTML += " &nbsp&nbsp&nbsp<u>" + regex7.lastIndex + "</u>.";
                        break;
                }
                listaMadre.appendChild(li);
            }
            definicion();
        }
        function definicion() {
            parrafo = lista.appendChild(document.createElement("p"));
            parrafo.appendChild(document.createElement("h3")).innerHTML = "Teoría: ";
            listaDefinicion = parrafo.appendChild(document.createElement("ol"));
            li1 = document.createElement("li");
            li1.innerHTML = ".lastIndex establece solo si la instancia de expresión regular usó la \"g\" para indicar una búsqueda global, o la bandera \"y\" para indicar una búsqueda pegajosa. "
            listaDefinicion.appendChild(li1);
            li2 = document.createElement("li");
            li2.innerHTML = ".lastIndex solo te devuelve el indice si previamente se ha aplicado  regex1.test(str), con str.mach(regex1) no funciona"
            listaDefinicion.appendChild(li2);
            li3 = document.createElement("li");
            li3.innerHTML = "-y: devuelve true en el caso en el que la coincidencia empiece justo en el .lastIndex que le has marcado";
            listaDefinicion.appendChild(li3);
            li4 = document.createElement("li");
            li4.innerHTML = ".index parece no funcionar en ningún navegador";
            listaDefinicion.appendChild(li4);
        }
        window.addEventListener("DOMContentLoaded", init);

    }
}