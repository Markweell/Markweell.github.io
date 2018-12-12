{
    document.addEventListener('DOMContentLoaded', init);


    let button;
    var inputs;

    function init() {
        button = buscaPorId("button");
        inputs = document.getElementsByTagName("input");
        button.addEventListener('click', checkearCampos);
    }

    function checkearCampos(ev) {
        for (element of inputs) {
            if (element.id == "sexoH" || element.id == "sexoM" || element.id == "TermUso" || element.id == "button") {

            } else {
                //element.addEventListener('blur', comprobarCampo.bind(element));
                asignaRegexYMensaje(element);
                comprobarCampo(element);
            }
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
        } else if (!element.regex.test(valor)) {
            span.innerHTML = "" + input.mensajeError;
        } else {
            span.innerHTML = "";
        }
    }

    function buscaPorId(id) {
        return document.getElementById(id);
    }

}




// let inputDni;
// let spanDni;
// let inputEmail;
// let spanEmail;
// let inputNumber;
// let spanNumber;
// let inputDate;
// let spanDate;
// let inputTelefono;
// let spanTelefono;
// let inputURL;
// let spanURL;
// let inputNumCorriente;
// let spanNumCorriente;



// inputDni = buscaPorId("dni");
// spanDni = buscaPorId("sdni");
// inputEmail = buscaPorId("email");
// spanEmail = buscaPorId("semail");
// inputNumber = buscaPorId("number");
// spanNumber = buscaPorId("snumber");
// inputDate = buscaPorId("date");
// spanDate = buscaPorId("sdate");
// inputTelefono = buscaPorId("telefono");
// spanTelefono = buscaPorId("stelefono");
// inputURL = buscaPorId("url");
// spanURL = buscaPorId("surl");
// inputNumCorriente = buscaPorId("numCuCorriente");
// spanNumCorriente = buscaPorId("snumCuCorriente");


// asignaRegexYMensaje(inputDni);
// asignaRegexYMensaje(inputEmail);
// asignaRegexYMensaje(inputNumber);
// asignaRegexYMensaje(inputTelefono);
// asignaRegexYMensaje(inputURL);
// asignaRegexYMensaje(inputNumCorriente);