{
    /**
     *  @author Marcos Gallardo Pérez
     */
    {

        let regex;
        let cajaTexto;
        let valor;
        let set;
        function init() {
            regex = /([a-zA-Zñáéíóú]{3,}\s?[a-zA-Zñáéíóú]{3,}),\s?([a-zA-Zñáéíóú]{3,})/g;
            cajaTexto = document.getElementById("Nombre");
            cajaTexto.addEventListener("blur", cargaMensaje);
            set = new Set();
        }

        function cargaMensaje() {
            document.getElementById("mensaje").innerHTML = "";
            valor = cajaTexto.value;
            grupos = regex.exec(valor);
            try {
                if (grupos != null) {
                    [, apellidos, nombre] = grupos;
                    try {
                        if (!set.has(nombre + apellidos)) {
                            document.getElementById("nombre").innerHTML = nombre;
                            document.getElementById("apellidos").innerHTML = apellidos;
                            set.add(nombre + apellidos);
                        } else {
                            throw "Repetido"
                        }
                    } catch (e) {
                        document.getElementById("nombre").innerHTML = "";
                        document.getElementById("apellidos").innerHTML = "";
                        document.getElementById("mensaje").innerHTML = "Repetido";
                    }
                } else {
                    throw "ERROR en el formato";
                }
            } catch (e) {
                document.getElementById("nombre").innerHTML = "";
                document.getElementById("apellidos").innerHTML = "";
                document.getElementById("mensaje").innerHTML = "Error. Formato correcto: Cuadrado Perfecto, Anacleto";
            }
        }

        document.addEventListener("DOMContentLoaded", init);
    }
}
