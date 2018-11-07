{

    /**
    * Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no. 
    * En caso de que el argumento no sea una fecha, que salte una excepción. 
    * Admitirá tantos parámetros como el constructor Date(). Pruébalo con varias invocaciones fallidas (y capturadas) 
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));

            var array = [
                { texto: "Today", resultado: compruebaExcepcion(Date()) },
                { texto: "10000", resultado: compruebaExcepcion(10000) },
                { texto: "10 Jan 2012", resultado: compruebaExcepcion("10 Jan 2012") },
                { texto: "Jun 11 2015", resultado: compruebaExcepcion("Jun 11 2015") },
                { texto: "21 Jun 2018", resultado: compruebaExcepcion("21 Jun 2018") },
                { texto: "6 Nov 2016", resultado: compruebaExcepcion("6 Nov 2016") },
                { texto: "asd", resultado: compruebaExcepcion("asd") },
                { texto: "FechaInvalida", resultado: compruebaExcepcion("FechaInvalida") },
                { texto: "21 Junio 2016", resultado: compruebaExcepcion("21 Junio 2016") },
                { texto: "10 Enero 6", resultado: compruebaExcepcion("10 Enero 6") },
                { texto: "2018,12,1,1,1,1", resultado: compruebaExcepcion(2018, 12, 1, 1, 1, 1) },
            ];

            var li;
            for (let i = 0; i < array.length; i++) {
                if (array[i].resultado != undefined) {
                    li = document.createElement("li");
                    li.innerHTML = "<b>" + array[i].texto + "</b>   ¿Es bisiesto?:  " + array[i].resultado + "<br>";
                    listaMadre.appendChild(li);
                }
            }
            function compruebaExcepcion(...arg) {
                try {
                    return esBisiesto(...arg);
                } catch (e) {
                    li = document.createElement("li");
                    li.innerHTML = "La fecha <b>" + arg + "</b> no es una fecha válida";
                    listaMadre.appendChild(li);
                }
            }
            function esBisiesto(...arg) {
                if (isNaN(Date.parse(...arg))) {
                    throw "No es una fecha válida";
                }
                date = new Date(...arg);
                date1 = new Date(date.getFullYear(), 01, 29, 12);
                if (date1.getMonth() == 1) {
                    return true;
                }
                return false;
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}