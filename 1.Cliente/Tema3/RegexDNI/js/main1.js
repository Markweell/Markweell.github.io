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

        let valor = this.value,
            grupos = regex.exec(valor);

        if (grupos === null) {
            if (valor === "")
                mensaje.innerHTML = "Campo Vacio";
            else
                mensaje.innerHTML = "Formato incorrecto";
            mensaje.style.color = "red";
            return;
        }
        //Destructuring
        [, numero, letra] = grupos;

        if (letra.toUpperCase() !== letras[parseInt(numero % 23)]){
            mensaje.innerHTML = "Letra incorrecta";
            mensaje.style.color = "red";
        }else {
            mensaje.innerHTML = "DNI correcto";
            mensaje.style.color = "green";
        }

    }

    function init() {
        document.getElementById("dni").addEventListener("blur", compruebaDni);
    }
    document.addEventListener("DOMContentLoaded", init);
}