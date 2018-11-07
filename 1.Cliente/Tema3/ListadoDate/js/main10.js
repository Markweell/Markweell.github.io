{

    /**
    * Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
            var today = new Date();
            nacimiento = prompt("Dame una fecha");
            var array = [
                { texto: "La fecha que ha proporcionado es : " + nacimiento, resultado: compruebaExcepcion(nacimiento) }
            ];

            var li;
            for (let i = 0; i < array.length; i++) {
                if (array[i].resultado != undefined) {
                    li = document.createElement("li");
                    li.innerHTML = "<b>" + array[i].texto + "</b>   " + array[i].resultado + "<br>";
                    listaMadre.appendChild(li);
                }
            }
            function compruebaExcepcion(...arg) {
                try {
                    return calcularHastaFinDeAnno(...arg);
                } catch (e) {
                    li = document.createElement("li");
                    li.innerHTML = e;
                    listaMadre.appendChild(li);
                }
            }
            function calcularHastaFinDeAnno(...arg) {
                if (isNaN(Date.parse(...arg))) {
                    throw "La fecha <b>" + arg + "</b> no es una fecha válida";
                }
                date = new Date(...arg);
                date1 = new Date("31 dec" + date.getFullYear())
                let dias = date1.getDate() - date.getDate();
                let meses = date1.getMonth() - date.getMonth();
                let años = date1.getFullYear() - date.getFullYear();

                return "Para final del año quedan " + meses + " meses y " + dias + " dias.";

            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}