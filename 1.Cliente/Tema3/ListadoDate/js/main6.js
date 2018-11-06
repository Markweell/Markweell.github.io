{

    /**
    * Crea el método incrementaDias() que incremente/decremente los días indicados.
    * Admitirá como primer argumento un entero positivo/negativo que reperesente el número de días. 
    * El resto de argumentos representarán una fecha, similar a los argumentos del constructor Date(). 
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
                texto = prompt("Dame un formato de fecha");
                texto1 = prompt("¿Cuantos días le agrego?");
                var array = [
                    { texto: "1000 con +10días", resultado: incrementaDias("1000",10) },
                    { texto: "Jun 11 2015 con -10 días", resultado: incrementaDias("Jun 11 2015",-10) },
                    { texto: texto + " Le agrego: "+texto1+" dias.", resultado: incrementaDias(texto,texto1) }
                ];

                var li;
                for (let i = 0; i < array.length; i++) {
                    li = document.createElement("li");
                    li.innerHTML = "<b>" + array[i].texto + "</b>   Resultado:  " + array[i].resultado + "<br>";
                    listaMadre.appendChild(li);
                }
            function incrementaDias(fecha,numDias) {
                if (isNaN(Date.parse(fecha))) {
                    throw "No es una fecha válida";
                }
                date = new Date(fecha);
                date.setDate(date.getDate()+numDias);
                return date;
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}