{
    document.addEventListener('DOMContentLoaded', init);

    let inputDni;
    let spanDni;
    let inputEmail;
    let spanEmail;
    let inputNumber;
    let spanNumber;
    let inputDate;
    let spanDate;
    let inputTelefono;
    let spanTelefono;
    let inputURL;
    let spanURL;
    let inputNumCorriente;
    let spanNumCorriente;
    let button;

    function init() {
        inputDni = buscaPorId("dni");
        spanDni = buscaPorId("sdni");
        inputEmail = buscaPorId("email");
        spanEmail = buscaPorId("semail");
        inputNumber = buscaPorId("number");
        spanNumber = buscaPorId("snumber");
        inputDate = buscaPorId("date");
        spanDate = buscaPorId("sdate");
        inputTelefono = buscaPorId("telefono");
        spanTelefono = buscaPorId("stelefono");
        inputURL = buscaPorId("url");
        spanURL = buscaPorId("surl");
        inputNumCorriente = buscaPorId("numCuCorriente");
        spanNumCorriente = buscaPorId("snumCuCorriente");
        button = buscaPorId("button");

        asignaRegexYMensaje(inputDni);
        asignaRegexYMensaje(inputEmail);
        asignaRegexYMensaje(inputNumber);

        button.addEventListener('click', checkearCampos);
    }

    function campoObligatorio(input) {
        valor = input.value;
        if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
            throw new CampoVacioException('Este campo es obligatorio')
        }
    }

    function asignaRegexYMensaje(input) {
        [input.regex, input.mensajeError] = patrones[input.id];
    }

    function checkearCampos() {
        try {
            campoObligatorio(inputDni);
        } catch (e) {
            console.log(e.message)
        }
    }

    function buscaPorId(id) {
        return document.getElementById(id);
    }

}