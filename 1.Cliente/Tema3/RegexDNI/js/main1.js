{

    /**
    * Realiza la comprobación del dni.
    * Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
    * Al perder el foco de la caja de texto del DNI se realizará la comprobación. Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:
    * formato incorrecto
    * letra incorrecta
    * introduce dni (si está vacío)
    * Utiliza los grupos para capturar el número y la letra. La letra puede estar en mayúscula o minúscula, separado o no por espacio/guión
    * @author Marcos Gallardo Pérez
    */

    let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    let regex = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i;

    function compruebaDni() {
        let mensaje = document.getElementById("mensaje");
        mensaje.style.color = "red";
        if (this.value === "")
            mensaje.innerHTML = "Introduce dni";
        else {
            if (!regex.test(this.value))
                mensaje.innerHTML = "Formato incorrecto";
            else {
                if (this.value.match(regex)[2].toUpperCase() !== letras[parseInt(this.value.match(regex)[1] % 23)])
                    mensaje.innerHTML = "Letra incorrecta";
                else {
                    mensaje.innerHTML = "DNI correcto";
                    mensaje.style.color = "green";
                }
            }
        }
    }

    function init() {
        document.getElementById("dni").addEventListener("blur", compruebaDni);
    }
    document.addEventListener("DOMContentLoaded", init);
}