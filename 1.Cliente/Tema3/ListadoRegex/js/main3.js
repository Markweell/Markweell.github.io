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
                { texto: "regex1 = /hola/g", contenido: str.match(regex1) , flags: regex1.flags },
                { texto: "regex2 = /hola/i", contenido: str.match(regex2) ,  flags: regex2.flags},
                { texto: "regex3 = /hola/gi", contenido: str.match(regex3),  flags: regex3.flags },
                { texto: "regex4 = /hola/m", contenido: str.match(regex4) ,  flags: regex4.flags},
                { texto: "regex5 = /hola/mgi", contenido: str.match(regex5) ,  flags: regex5.flags}
               ];
            let li;
            li = document.createElement("li");
            li.innerHTML = "Buscando coincidencias en: \"Hola hola hoLa Soy soi Marcos marcos <br>holaHola\"";
            listaMadre.appendChild(li);
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto + "</b>&nbsp&nbsp&nbspResultado:&nbsp&nbsp&nbsp<u>" + array[i].contenido+
                "</u>&nbsp y vemos los modificadores que tiene con regex.flags: "+array[i].flags;
                listaMadre.appendChild(li);
            }
            definicion();
           
        }
        function definicion(){
            parrafo = lista.appendChild(document.createElement("p"));
            listaDefinicion = parrafo.appendChild(document.createElement("ol"));
            li1=document.createElement("li");
            li1.innerHTML = ".option parece no funcionar en ningún navegador"
            listaDefinicion.appendChild(li1);
        }
        window.addEventListener("DOMContentLoaded", init);

    }
}