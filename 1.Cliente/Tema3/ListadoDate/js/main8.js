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
                compruebaExcepcion(10000);
                compruebaExcepcion("21 Jun 2018");
                compruebaExcepcion("6 Nov 2018");
                compruebaExcepcion(2018,12,1,1,1,1);
                
                var array = [
                    { texto: "1000", resultado: compruebaExcepcion(Date()) },
                    { texto: "Jun 11 2015", resultado: compruebaExcepcion("Jun 11 2015") },
                ];

                var li;
                for (let i = 0; i < array.length; i++) {
                    li = document.createElement("li");
                    li.innerHTML = "<b>" + array[i].texto + "</b>   Resultado:  " + array[i].resultado + "<br>";
                    listaMadre.appendChild(li);
                }
            function compruebaExcepcion(...arg){
                try{
                    diaDeLaSemana(...arg);
                }catch(e){
                    console.log(e)
                }
            }
            function diaDeLaSemana(...arg) {
                if (isNaN(Date.parse(...arg))) {
                    throw "No es una fecha válida"+arg;
                }
                date = new Date(...arg);
                console.log(date)
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}