{

    /**
    * Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
            esFecha(1000);
            esFecha("Jun 10 2015");
            esFecha("ase");
            texto = prompt("Dame un formato de fecha");
            array = [{texto:"1000",resultado:esFecha(1000)},
            {texto:"Jun 10 2015",resultado:esFecha("Jun 10 2015")},
            {texto:"asasde",resultado:esFecha("aseasasde")},
            {texto:texto,resultado:esFecha(texto)}];
            let li;
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto+ "</b>   Resultado:  "+array[i].resultado+"<br>";
                listaMadre.appendChild(li);
            }
            function esFecha(fecha){
                if(!isNaN(Date.parse(fecha))){
                    return true;
                }
                return false;
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}