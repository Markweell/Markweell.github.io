/**
 * Comportamiento del html
 * @author Marcos Gallardo Pérez
 */
{
    document.addEventListener('DOMContentLoaded', init);
    let inputs;
    let checkboxs;
    let domDate;
    let domEdad;
    let focuseado;

    function init() {
        inputs = document.querySelectorAll('input[type="text"]');
        checkboxs = document.querySelectorAll('input[type="checkbox"]');
        domDate = document.getElementById('sfecha');
        domEdad = document.getElementById('edad');
        focuseado = false;
        asignacionEventos();
    }

    function asignacionEventos() {
        for (let element of inputs) {
            element.addEventListener('blur', compruebaCampo.bind(null, element));
        }
        document.getElementById('button').addEventListener('click', comprobarFormulario)
    }

    function compruebaCampo(element) {
        let span = document.getElementById("s" + element.id);
        if (!patrones[element.id][0].test(element.value)) {
            span.innerHTML = " " + patrones[element.id][1];
            if (!focuseado) {
                document.getElementById(element.id).focus();
                focuseado = true;
            }
        } else
            span.innerHTML = "";
    }

    function comprobarFormulario() {
        let servicioRes = "",
            edadCliente = "";
        domEdad.style.border = '1px Solid black';
        for(let element of checkboxs){
            if (element.checked)
                servicioRes+=element.id;
        }
        try{
            let edad = document.querySelectorAll('input[type="radio"]:checked')[0].className;
            edad<20?edadCliente="Menor de 20": edadCliente="Entre 20 y 40";
            edad>40?edadCliente="Mayor de 40":"";
        }catch(e){}
        focuseado = false;
        for (let element of inputs) {
            compruebaCampo(element);
        }

        try {
            new Reserva(inputs[0].value, inputs[1].value, inputs[2].value,inputs[3].value, inputs[4].value, inputs[5].value, servicioRes, edadCliente);
        } catch (e) {
            if (e.message === 'Fecha invalida' || e.message === 'La fecha de reserva debe ser superior o igual al día actual' ) {
                domDate.innerHTML = e.message;
                document.getElementById("fecha").focus();
            } else if (e.message === 'Debe seleccionar una edad') {
                domEdad.style.border = '6px Solid red';
            }
        }
    }
}