{
    {
        /**
         * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora mediante los métodos del
         * objeto predefinido document.
         * @author Marcos Gallardo Pérez
         */

        let calculadora;
        let container;
        let input;
        let inputMensaje = "";
        let numGuardado = undefined;
        let coma = false;
        let operadorBol = false;
        let operador = "";

        function init() {
            creaCabezera();
            creaContainer();
            creaCalculadora();
        }

        function creaCabezera() {
            let cabezera = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
            let titulo = agrega(cabezera, 'h1');
            titulo.innerHTML = "Calculadora Marcos Gallardo Pérez";
            titulo.style.textAlign = "center";
            titulo.style.width = "300px";
            titulo.style.height = "150px";
            titulo.style.margin = "0px 100px"
        }

        function creaContainer() {
            container = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
            container.id = "Container";
        }

        function creaCalculadora() {
            calculadora = agrega(container, 'div');
            calculadora.id = "calculadora";
            calculadora.style.width = "300px";
            calculadora.style.height = "300px";
            calculadora.style.margin = "25px 100px 50px 100px";
            calculadora.style.backgroundColor = "#eeeeee";
            calculadora.style.border = "2px solid #CCCCCC";
            anadeBotones();
        }

        function anadeBotones() {
            let botones =
                [
                    {
                        id: 'CE', value: 'CE', funcion: () => {
                            inputMensaje = "";
                            numGuardado = undefined;
                            input.setAttribute("value", inputMensaje)
                            coma = false;
                            operadorBol = false;
                            operador = "";
                        }
                    },
                    {
                        id: 'Borrar', value: 'Borrar', funcion: () => {
                            inputMensaje = inputMensaje.substring(0, inputMensaje.length - 1);
                            if (inputMensaje[inputMensaje.length - 1] == ".") {
                                inputMensaje = inputMensaje.substring(0, inputMensaje.length - 1);
                            } else if ((inputMensaje.length == 1 && inputMensaje[0] == '-') || inputMensaje.length == 0) {
                                inputMensaje = '0';
                            }
                            input.setAttribute("value", parseFloat(inputMensaje));
                        }
                    },
                    { id: 'porcentaje', value: '%' },
                    { id: 'oSuma', value: '+', funcion: () => { realizaOperacion("+"); } },
                    { id: 'siete', value: '7', funcion: () => { refrescaMensaje(7); } },
                    { id: 'ocho', value: '8', funcion: () => { refrescaMensaje(8); } },
                    { id: 'nueve', value: '9', funcion: () => { refrescaMensaje(9); } },
                    { id: 'oResta', value: '-', funcion: () => { realizaOperacion("-"); } },
                    { id: 'cuatro', value: '4', funcion: () => { refrescaMensaje(4); } },
                    { id: 'cinco', value: '5', funcion: () => { refrescaMensaje(5); } },
                    { id: 'seis', value: '6', funcion: () => { refrescaMensaje(6); } },
                    { id: 'oMultiplicacion', value: 'x', funcion: () => { realizaOperacion("x"); } },
                    { id: 'uno', value: '1', funcion: () => { refrescaMensaje(1); } },
                    { id: 'dos', value: '2', funcion: () => { refrescaMensaje(2); } },
                    { id: 'tres', value: '3', funcion: () => { refrescaMensaje(3); } },
                    { id: 'oDivision', value: '÷', funcion: () => { realizaOperacion("÷"); } },
                    { id: 'cero', value: '0', funcion: () => { refrescaMensaje(0); } },
                    {
                        id: 'masMenos', value: '±', funcion: () => {
                            operador = "";
                            coma=false;
                            if (input.value.indexOf("-") == -1) {
                                inputMensaje = '-' + input.value;
                            } else {
                                inputMensaje = input.value.substring(1, input.value.length);
                            }
                            input.setAttribute("value", parseFloat(inputMensaje));
                        }
                    },
                    { id: 'coma', value: ',', funcion: () => { if (inputMensaje.indexOf(".") == -1) { coma = true; } } },
                    { id: 'igual', value: '=', funcion: () => { realizaOperacion(""); } }];
            let auxiliar;

            divInput = agrega(calculadora, 'div');
            divInput.style.padding = "5px";
            divInput.style.width = "290px";
            divInput.style.height = "50px";

            input = agrega(divInput, 'input');
            input.style.textAlign = 'right';
            input.style.width = "264px";
            input.style.height = "22px";
            input.style.margin = "11px 10px 11px 10px"
            input.innerHTML = "hola";
            divBotones = agrega(calculadora, 'div');
            divBotones.style.padding = "5px";
            divBotones.style.width = "290px";
            divBotones.style.height = "230px";

            for (let i = 0; i < botones.length; i++) {
                auxiliar = agrega(divBotones, 'input');
                auxiliar.id = botones[i].id;
                auxiliar.setAttribute("type", "button");
                auxiliar.setAttribute("value", botones[i].value);
                auxiliar.style.height = "20%";
                auxiliar.style.width = "25%";
                auxiliar.style.padding = "1px";
                auxiliar.addEventListener('click', botones[i].funcion);
            }
        }

        function refrescaMensaje(number) {
            if (!coma) {
                if (operadorBol) {
                    inputMensaje = "";
                    operadorBol = false;
                }
                inputMensaje += number;
            } else {
                coma = false;
                inputMensaje += "." + number;
            }
            input.setAttribute("value", parseFloat(inputMensaje));
        }
        function realizaOperacion(operacion) {
            operadorBol = true;
            if (operador != "" && numGuardado!=undefined) {
                switch (operador) {
                    case "+":
                        input.setAttribute("value", parseFloat(parseFloat(input.value) + parseFloat(numGuardado)));
                        break;
                    case "-":
                        input.setAttribute("value", parseFloat(parseFloat(numGuardado)-parseFloat(input.value) ));
                        break;
                    case "x":
                        input.setAttribute("value", parseFloat(parseFloat(input.value) * parseFloat(numGuardado)));
                        break;
                    case "÷":
                        input.setAttribute("value", parseFloat(parseFloat(numGuardado)/parseFloat(input.value)));
                        break;
                }
            }
            numGuardado = parseFloat(input.value);
            console.log(numGuardado)
            operador = operacion;
        }
        /*
        function realizaOperacion(operacion) {
            operadorBol = true;
            if (operador != "") {
                switch (operador) {
                    case "+":
                        input.setAttribute("value", parseFloat(parseFloat(input.value) + parseFloat(numGuardado)));
                        numGuardado = parseFloat(input.value) + parseFloat(numGuardado);
                        break;
                    case "-":
                        input.setAttribute("value", parseFloat(parseFloat(input.value) - parseFloat(numGuardado)));
                        numGuardado = parseFloat(input.value) - parseFloat(numGuardado);
                        break;
                    case "x":
                        input.setAttribute("value", parseFloat(parseFloat(input.value) * parseFloat(numGuardado)));
                        numGuardado = parseFloat(input.value) * parseFloat(numGuardado);
                        break;
                    case "÷":
                        input.setAttribute("value", parseFloat(parseFloat(input.value) / parseFloat(numGuardado)));
                        numGuardado = parseFloat(input.value) / parseFloat(numGuardado);
                        break;
                }
            }
            console.log(numGuardado);
            operador = operacion;
        }
        */

        function agrega(padre, hijo) {
            return padre.appendChild(crea(hijo));
        }

        function crea(elemento) {
            return document.createElement(elemento);
        }

        document.addEventListener('DOMContentLoaded', init);


    }
}