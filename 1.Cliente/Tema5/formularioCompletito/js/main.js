{
    document.addEventListener('DOMContentLoaded', init);


    let button;
    var inputs;
    var chet;

    function init() {
        button = buscaPorId("button");
        inputs = document.getElementsByTagName("input");
        button.addEventListener('click', checkearCampos);
        for (element of inputs) {
            element.addEventListener('blur', checkearCampo);
        }
    }

    function checkearCampos() {
        for (element of inputs) {
            check(element);
        }
        irAlPrimerFallo();
    }

    function checkearCampo(ev) {
    
        check(ev.target);
    }

    function check(element) {
        if (element.id == "sexoH" || element.id == "sexoM" || element.id == "TermUso" || element.id == "button") {
            if (element.id == "TermUso") {
                (element.checked) ? buscaPorId("sTermUso").innerHTML = "": buscaPorId("sTermUso").innerHTML = "Se requiere aceptar los terminos";
            }
        } else if (element.id == "dni") {
            comprobarDni(element);
        } else {
            asignaRegexYMensaje(element);
            comprobarCampo(element);
        }
    }

    function asignaRegexYMensaje(input) {
        [input.regex, input.mensajeError] = patrones[input.id];
    }

    function comprobarCampo(input) {
        valor = input.value;
        id = 's' + input.id;
        let span = buscaPorId(id);
        if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
            span.innerHTML = " Este campo es obligatorio"

        } else if (!input.regex.test(valor)) {
            span.innerHTML = " " + input.mensajeError;
        } else {
            span.innerHTML = "";
        }
    }

    function comprobarDni(element) {
        element.regex = patrones[element.id][0][0];
        element.letras = patrones[element.id][0][1];
        element.mensajeError = patrones[element.id][1];

        comprobarCampo(element);

        grupos = element.regex.exec(element.value);

        if (grupos == null)
            return;
        [, numero, letra] = element.regex.exec(element.value);

        if (letra.toUpperCase() !== element.letras[parseInt(numero % 23)]) {
            buscaPorId("sdni").innerHTML = " Esa letra es incompatible con ese numero."
        }
    }

    function irAlPrimerFallo() {
        try {
            Array.from(document.getElementsByTagName("span")).forEach(element => {
                if (element.textContent != "") {
                    //element.scrollIntoView();
                    buscaPorId(element.id.replace('s', '')).focus();
                    throw new FormularioException('Error!');
                }
                window.scrollTo(0, 0);
            });
        } catch (e) {}
    }

    function buscaPorId(id) {
        return document.getElementById(id);
    }

}