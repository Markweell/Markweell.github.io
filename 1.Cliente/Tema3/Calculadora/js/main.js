{
    {
        /**
         * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora mediante los métodos del
         * objeto predefinido document.
         * @author Marcos Gallardo Pérez
         */

        let calculadora;
        let container;
        let inputMensaje = "";

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
                { id: 'siete', value: '7', funcion: () => { inputMensaje += "7"; input.setAttribute("value", inputMensaje) } },
                { id: 'ocho', value: '8', funcion: () => { inputMensaje += "8"; input.setAttribute("value", inputMensaje) } },
                { id: 'nueve', value: '9', funcion: () => { inputMensaje += "9"; input.setAttribute("value", inputMensaje) } },
                { id: 'oResta', value: '-' },
                { id: 'cuatro', value: '4', funcion: () => { inputMensaje += "4"; input.setAttribute("value", inputMensaje) } },
                { id: 'cinco', value: '5', funcion: () => { inputMensaje += "5"; input.setAttribute("value", inputMensaje) } },
                { id: 'seis', value: '6', funcion: () => { inputMensaje += "6"; input.setAttribute("value", inputMensaje) } },
                { id: 'oMultiplicacion', value: 'x' },
                { id: 'uno', value: '1', funcion: () => { inputMensaje += "1"; input.setAttribute("value", inputMensaje) } },
                { id: 'dos', value: '2', funcion: () => { inputMensaje += "2"; input.setAttribute("value", inputMensaje) } },
                { id: 'tres', value: '3', funcion: () => { inputMensaje += "3"; input.setAttribute("value", inputMensaje) } },
                { id: 'oDivision', value: '÷' },
                { id: 'cero', value: '0', funcion: () => { inputMensaje += "0"; input.setAttribute("value", inputMensaje) } },
                { id: 'masMenos', value: '±',funcion: () => { inputMensaje =input.value*-1; input.setAttribute("value", inputMensaje) } },
                { id: 'coma', value: ',' },
                { id: 'igual', value: '=' }];
            let auxiliar;

            divInput = agrega(calculadora, 'div');
            divInput.style.padding = "5px";
            divInput.style.width = "290px";
            divInput.style.height = "50px";

            let input = agrega(divInput, 'input');
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


        function agrega(padre, hijo) {
            return padre.appendChild(crea(hijo));
        }

        function crea(elemento) {
            return document.createElement(elemento);
        }

        document.addEventListener('DOMContentLoaded', init);

    }
}