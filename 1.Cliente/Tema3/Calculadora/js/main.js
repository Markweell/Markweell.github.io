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
        let coma = false;

        function init() {
            creaCabezera();
            creaContainer();
            creaCalculadora();
        }

        function creaCabezera() {
            let cabezera = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
            let titulo = agrega(cabezera, 'h1');
            titulo.innerHTML = "Calculadora (Sin Funcionalidad) Marcos Gallardo Pérez";
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
                [{ id: 'CE', value: 'CE', funcion: () => { inputMensaje = ""; input.setAttribute("value", inputMensaje) } },
                { id: 'Borrar', value: 'Borrar' },
                { id: 'porcentaje', value: '%' },
                { id: 'oSuma', value: '+' },
                { id: 'siete', value: '7', funcion: () => { refrescaMensaje(7); } },
                { id: 'ocho', value: '8', funcion: () => { refrescaMensaje(8); } },
                { id: 'nueve', value: '9', funcion: () => { refrescaMensaje(9); } },
                { id: 'oResta', value: '-' },
                { id: 'cuatro', value: '4', funcion: () => { refrescaMensaje(4); } },
                { id: 'cinco', value: '5', funcion: () => { refrescaMensaje(5); } },
                { id: 'seis', value: '6', funcion: () => { refrescaMensaje(6); } },
                { id: 'oMultiplicacion', value: 'x' },
                { id: 'uno', value: '1', funcion: () => { refrescaMensaje(1); } },
                { id: 'dos', value: '2', funcion: () => { refrescaMensaje(2); } },
                { id: 'tres', value: '3', funcion: () => { refrescaMensaje(3); } },
                { id: 'oDivision', value: '÷' },
                { id: 'cero', value: '0', funcion: () => { refrescaMensaje(0); } },
                { id: 'masMenos', value: '±', funcion: () => { inputMensaje = input.value * -1; input.setAttribute("value", inputMensaje) } },
                { id: 'coma', value: ',', funcion: () => { if(inputMensaje.indexOf(".")==-1){coma = true;}  } },
                { id: 'igual', value: '=' }];
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
            if (coma) {
                coma=false;
                inputMensaje += "."+number;
            } else {
                inputMensaje += number;
            }
            input.setAttribute("value", parseFloat(inputMensaje));
        }

        function agrega(padre, hijo) {
            return padre.appendChild(crea(hijo));
        }

        function crea(elemento) {
            return document.createElement(elemento);
        }

        document.addEventListener('DOMContentLoaded', init);

    }
}