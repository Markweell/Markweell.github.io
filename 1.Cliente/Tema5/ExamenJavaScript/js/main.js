/**
 * Comportamiento del html
 * @author Marcos Gallardo Pérez
 */

{
    let reserva
    document.addEventListener('DOMContentLoaded', init);
    let inputs;
    let spans;
    let domDate;
    let domEdad;

    function init() {
        document.getElementById('button').addEventListener('click', comprobarFormulario)
        inputs = document.getElementsByTagName("input");
        spans = document.getElementsByTagName('span');
        domDate = document.getElementById('sfecha');
        domEdad = document.getElementById('edad');
        Array.from(inputs).pop();
        Array.from(spans).pop();
        for (let element of inputs) {
            if (compruebaElementosExcentos(element)) {
                continue;
            }
            element.addEventListener('blur', compruebaCampo.bind(null, element));
        }
    }

    function compruebaCampo(element) {
        if (compruebaElementosExcentos(element)) {
            return;
        }

        let span = document.getElementById("s" + element.id);
 
        if (!patrones[element.id][0].test(element.value)) {
            span.innerHTML = " " + patrones[element.id][1];

        } else
            span.innerHTML = "";

    }

    function comprobarFormulario() {
        let nombre;
        let correo;
        let fecha;
        let hora;
        let numNoches;
        let numPersonas;
        let servicioRes = "";
        let edadCliente = '';
        domEdad.style.border = '1px Solid black';
        for (let element of inputs) {
            compruebaCampo(element);
            switch (element.id) {
                case "nombre":
                    nombre = element.value;
                    break;
                case "correo":
                    correo = element.value;
                    break;
                case "fecha":
                    fecha = element.value;
                    break;
                case "hora":
                    hora = element.value;
                    break;
                case "numNoches":
                    numNoches = element.value;
                    break;
                case "numPersonas":
                    numPersonas = element.value;
                case "servRestauranteD":
                    if (element.checked)
                        servicioRes += 'd';
                    break;
                case "servRestauranteA":
                    if (element.checked)
                        servicioRes += 'a';
                    break;
                case "servRestauranteC":
                    if (element.checked)
                        servicioRes += 'c';
                    break;
                case "edad20":
                    if (element.checked)
                        edadCliente = 'Menor que 20';
                    break;
                case "edad20y40":
                    if (element.checked)
                        edadCliente = 'Entre 20 y 40';
                    break;
                case "edad40":
                    if (element.checked)
                        edadCliente = 'Mayor de 40';
                    break;
            }
        }
        try {
            reserva = new Reserva(nombre, correo, fecha, hora, numNoches, numPersonas, servicioRes, edadCliente);
        } catch (e) {
            if (e.message === 'Fecha invalida') {
                domDate.innerHTML = ' Fecha invalida';
            } else if(e.message === 'La fecha de reserva debe ser superior o igual al día actual'){
                domDate.innerHTML = 'La fecha de reserva debe ser superior o igual al día actual';
            }else if (e.message === 'Debe seleccionar una edad') {
                domEdad.style.border = '3px Solid red';
            }
            //console.log(e.message);
            for (let element of spans) {
                if (element.textContent != "") {
                    document.getElementById(element.id.replace("s", "")).focus();
                    return;
                }
            }
        }
    }

    function compruebaElementosExcentos(element) {
        return /servRestaurante/.test(element.id) || /edad/.test(element.id) || /button/.test(element.id);
    }


}