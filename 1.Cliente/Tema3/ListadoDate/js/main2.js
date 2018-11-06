{

    /**
    * Indica la utilidad de Date.now();
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
            date= Date.now();
            let li;
           
                li = document.createElement("li");
                li.innerHTML = "<b> Uso de Date.now()</b>   Resultado:  "+date+"<br>";
                listaMadre.appendChild(li);

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}