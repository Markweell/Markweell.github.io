{

    /**
    * Implementa el método fecha() que devuelva una fecha válida. Lanzará una excepción en caso contrario.
    * @author Marcos Gallardo Pérez
    */
    {
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
            try {
                texto = prompt("Dame un formato de fecha");
                var array = [
                    { texto: "1000", resultado: fecha("1000") },
                    { texto: "Jun 10 2015", resultado: fecha("Jun 10 2015") },
                    { texto: texto, resultado: fecha(texto) }
                ];

                var li;
                for (let i = 0; i < array.length; i++) {
                    li = document.createElement("li");
                    li.innerHTML = "<b>" + array[i].texto + "</b>   Resultado:  " + array[i].resultado + "<br>";
                    listaMadre.appendChild(li);
                }
            } catch (e) {
                li = document.createElement("li");
                li.style.color = "red";
                li.innerHTML = "No es una fecha válida";
                listaMadre.appendChild(li);
            }
            
            function fecha(fecha) {
                if (isNaN(Date.parse(fecha))) {
                    throw "No es una fecha válida";  
                }
                return new Date(fecha);
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}