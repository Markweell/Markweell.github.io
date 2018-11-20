{
    /**
     *  @author Marcos Gallardo Pérez
     */
    {

        let regex;
        let cajaTexto;
        let valor;
        let set;
        let nombre;
        let apellidos;
        let mensaje;
        function init() {
            
            cargarVariables();
            cajaTexto.addEventListener("blur", cargaMensaje);
            
        }

        function cargaMensaje() {
            mensaje.innerHTML = "";
            valor = cajaTexto.value;
            grupos = regex.exec(valor);
            try {
                if (grupos != null) {
                    [, apellidos, nombre] = grupos;
                    try {
                        if (!set.has(nombre + apellidos)) {
                            nombreTexto.innerHTML = nombre;
                            apellidosTexto.innerHTML = apellidos;
                            set.add(nombre + apellidos);
                        } else {
                            throw new Error ("Repetido");
                        }
                    } catch (e) {
                        nombreTexto.innerHTML = "";
                        apellidosTexto.innerHTML = "";
                        mensaje.innerHTML = "Repetido";
                    }
                } else {
                    throw new Error("ERROR en el formato");
                }
            } catch (e) {
                nombre.innerHTML = "";
                apellidos.innerHTML = "";
                mensaje.innerHTML = "Error. Formato correcto: Cuadrado Perfecto, Anacleto";
            }
        }
        function cargarVariables(){
            regex = /([a-zA-Zñáéíóú]{3,}\s?[a-zA-Zñáéíóú]{3,}),\s?([a-zA-Zñáéíóú]{3,})/g;
            cajaTexto = document.getElementById("Nombre");
            nombreTexto = document.getElementById("nombre");
            apellidosTexto = document.getElementById("apellidos");
            mensaje = document.getElementById("mensaje");
            set = new Set();
        }
        document.addEventListener("DOMContentLoaded", init);
    }
}
