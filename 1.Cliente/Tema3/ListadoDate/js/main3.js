{

    /**
    * Indica el formato del parámetro cadena del método Date.parse().
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
            date1 = Date.parse("Aug 9, 1995");
            date2 = Date.parse("Aug 9 1995");
            date3 = Date.parse(1000);
            date4 = Date.parse(2018,1,1,1,1,1);
            array = [{texto:"Date.parse(\"Aug 9, 1995\");",resultado:date1},
            {texto:"Date.parse(\"Aug 9 1995\");",resultado:date2},
            {texto:"Date.parse(1000);",resultado:date3},
            {texto:"Date.parse(2018,1,1,1,1,1);",resultado:date4}];
            let li;
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto+ "</b>   Resultado:  "+array[i].resultado+"<br>";
                listaMadre.appendChild(li);
            }
        

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}