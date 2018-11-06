{

    /**
    * Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual 
    * o de la fecha indicada (similar al constructor)
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
                var array = [
                    { texto: "1000", resultado: diaDeLaSemana(Date()) },
                    { texto: "Jun 11 2015", resultado: diaDeLaSemana("Jun 11 2015") },
                    { texto: texto , resultado: diaDeLaSemana(texto) }
                ];

                var li;
                for (let i = 0; i < array.length; i++) {
                    li = document.createElement("li");
                    li.innerHTML = "<b>" + array[i].texto + "</b>   Resultado:  " + array[i].resultado + "<br>";
                    listaMadre.appendChild(li);
                }
            function diaDeLaSemana(fecha) {
                if (isNaN(Date.parse(fecha))) {
                    throw "No es una fecha válida";
                }
                date = new Date(fecha);
                switch(date.getDay()){
                    case 1:
                    return "Lunes";
                    case 2:
                    return "Martes";
                    case 3:
                    return "Miercoles";
                    case 4:
                    return "Jueves";
                    case 5:
                    return "Viernes";
                    case 6:
                    return "Sábado";
                    case 0:
                    return "Domingo";
                    
                }
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}