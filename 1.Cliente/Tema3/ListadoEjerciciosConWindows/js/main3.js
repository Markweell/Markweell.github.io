{

    /**
    * Crea una página web con el siguiente comportamiento:
    * Un botón "bajar línea" para bajar una línea.
    * Un botón "subir línea" para subir una línea
    * Un botón "bajar" para bajar una página.
    * Un botón "subir" para subir una página.
    * Un botón "inicio" para ir al inicio del documento
    * Un botón "fin" para ir al final del documento.
    * Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
    * 
    * @author Marcos Gallardo Pérez
    */
    {

        let cajaTexto;

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            configurarLorem();
            configurarCajaTexto();
        }
        function configurarLorem() {
            lorem = document.getElementById("lorem");
            anadirAnchoYAlto(1000, 3000, lorem);
            lorem.style.margin = "0px 0px 0px 200px"
        }
        function configurarCajaTexto() {
            //Creamos una div que va a servir de contenedor para los botones
            cajaTexto = document.createElement('div');
            let body = document.getElementsByTagName('body')[0];
            body.insertBefore(cajaTexto, body.childNodes[0]);//Lo insertamos al comienzo del body
            cajaTexto.style.position = "fixed";
            cajaTexto.style.backgroundColor = "rgba(255,255,255,0.7)";
            anadirAnchoYAlto(200, 200, cajaTexto);
            //Creamos un array con el comportamiento de los botones
            arrayElementosLista = [
                { id: "bajLin", value: "Baja una linea", funcion: () => { scrollByLines(1) } },
                { id: "subLin", value: "Sube una linea", funcion: () => { scrollByLines(-1) } },
                { id: "bajPag", value: "Baja una página", funcion: () => { window.scroll(0, window.scrollY + window.innerHeight) } },
                { id: "subPag", value: "Sube una página", funcion: () => { window.scroll(0, window.scrollY - window.innerHeight) } },
                { id: "inicio", value: "Inicio", funcion: () => { window.scrollTo(0, 0) } },
                { id: "fin", value: "Fin", funcion: () => { window.scrollTo(0, document.body.clientHeight) } },
            ];
            //Creamos la lista de botones
            let listaMadre = cajaTexto.appendChild(document.createElement('ul'));

            for (let i = 0; i < arrayElementosLista.length; i++) {
                let li = listaMadre.appendChild(document.createElement('li'));
                let bot =li.appendChild(document.createElement('input')); 
                bot.id = arrayElementosLista[i].id;
                bot.type = "button";
                bot.value = arrayElementosLista[i].value;
                //Añadimos comportamiento
                bot.addEventListener("click", arrayElementosLista[i].funcion);
            }
        }

        function anadirAnchoYAlto(ancho, alto, elemento) {
            elemento.style.height = alto + "px";
            elemento.style.width = ancho + "px";

        }
        window.addEventListener("DOMContentLoaded", init);

    }
}