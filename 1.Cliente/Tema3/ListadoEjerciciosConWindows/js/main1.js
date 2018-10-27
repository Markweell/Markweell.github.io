{

    /**
    * El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. Muéstralos reaccionando al evento scroll sobre window.
    * @author Marcos Gallardo Pérez
    */
    {

        let cajaTexto;
        
        function init() {
            crearEsqueleto();
            window.addEventListener("scroll", anadirTexto);
        }

        function crearEsqueleto() {
            configurarLorem();
            configurarCajaTexto();
            anadirTexto(cajaTexto);

        }
        function configurarLorem() {
            lorem = document.getElementById("lorem");
            anadirAnchoYAlto(3000, 3000, lorem);
        }
        function configurarCajaTexto() {
            cajaTexto = document.createElement('div');
            let body = document.getElementsByTagName('body')[0];
            body.insertBefore(cajaTexto, body.childNodes[0]);
            cajaTexto.style.position = "fixed";
            cajaTexto.style.backgroundColor = "rgba(255,255,255,0.7)";
            anadirAnchoYAlto(200, 200, cajaTexto);
            arrayElementosLista = [
                { id: "ScrollX" },
                { id: "ScrollY" },
                { id: "Scrollbars.visible" }
            ];
            let listaMadre = cajaTexto.appendChild(document.createElement('ul'));
            for (let i = 0; i < arrayElementosLista.length; i++) {
                listaMadre.appendChild(document.createElement('li')).id = arrayElementosLista[i].id;
            }
        }
        function anadirTexto() {
            document.getElementById('ScrollX').innerHTML = "<b>ScrollX: </b>" + window.scrollX;
            document.getElementById('ScrollY').innerHTML = "<b>ScrollY: </b>" + window.scrollY;
            document.getElementById('Scrollbars.visible').innerHTML = "<b>Scrollbars.visible: </b>" + window.scrollbars.visible;
        }
        function anadirAnchoYAlto(ancho, alto, elemento) {
            elemento.style.height = alto + "px";
            elemento.style.width = ancho + "px";

        }
        window.addEventListener("DOMContentLoaded", init);

    }
}