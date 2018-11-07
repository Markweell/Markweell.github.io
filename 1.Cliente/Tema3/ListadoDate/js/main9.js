{

    /**
    * Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.
    * En caso de tener menos de un año, indicar días y meses transcurridos. Indicar errores.
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
            nacimiento = prompt("Dame tu fecha de nacimiento");
            var array = [
                { texto: "Tu fecha de nacimiento: " + nacimiento, resultado: compruebaExcepcion(nacimiento) }
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
                    return calculaEdad(...arg);
                } catch (e) {
                    li = document.createElement("li");
                    li.innerHTML = e;
                    listaMadre.appendChild(li);
                }
            }
            function calculaEdad(...arg) {
                if (isNaN(Date.parse(...arg))) {
                    throw "La fecha <b>" + arg + "</b> no es una fecha válida";
                }
                date = new Date(...arg);
                diferenciaDias = today.getDate() - date.getDate();
                diferenciaMeses = today.getMonth() - date.getMonth();
                diferenciaAños = today.getFullYear() - date.getFullYear();
                let dias = 0;
                let meses = 0;
                let años = 0;
                if (diferenciaAños < 0) {
                    throw "Todavía no has nacido";
                } else if (diferenciaAños == 0) {
                    if (diferenciaMeses < 0) {
                        throw "Todavía no has nacido";
                    } else if (diferenciaMeses == 0) {
                        if (diferenciaDias < 0)
                            throw "Todavía no has nacido";
                        dias = diferenciaDias;
                    } else {
                        meses = diferenciaMeses;
                        if (diferenciaDias < 0) {
                            dias = 30 + diferenciaDias;
                            meses--;
                        } else {
                            dias = diferenciaDias;
                        }
                    }
                }
                años = diferenciaAños;
                if (diferenciaDias < 0) {
                    diferenciaMeses--;
                }
                if (diferenciaMeses < 0) {
                    años--;
                }
                if (años == 0)
                    return "Tienes una edad de " + meses + " meses y " + dias + " dias.";
                else {
                    return "Tienes una edad de " + años + " años.";
                }
            }

        }
        window.addEventListener("DOMContentLoaded", init);
    }
}