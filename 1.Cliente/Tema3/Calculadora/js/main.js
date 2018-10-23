{
    {
        /**
         * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora mediante los métodos del
         * objeto predefinido document.
         * @author Marcos Gallardo Pérez
         */

        let calculadora;
        let container;

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
            let botones = ['CE', 'Borrar', 'Porcentaje', '+', '7', '8', '9', '-', '4', '5', '6', 'x', '1', '2', '3', '÷', '0', '±', ',', '='];
            let auxiliar;

            divInput = agrega(calculadora, 'div');
            divInput.style.padding = "5px";
            divInput.style.width = "290px";
            divInput.style.height = "50px";

            let input = agrega(divInput, 'input');

            input.style.width = "264px";
            input.style.height = "22px";
            input.style.margin = "11px 10px 11px 10px"

            divBotones = agrega(calculadora, 'div');
            divBotones.style.padding = "5px";
            divBotones.style.width = "290px";
            divBotones.style.height = "230px";
            for (let i = 0; i < botones.length; i++) {
                auxiliar = agrega(divBotones, 'input');
                auxiliar.id = botones[i];
                auxiliar.setAttribute("type", "button");
                auxiliar.setAttribute("value", botones[i]);
                auxiliar.style.height = "20%";
                auxiliar.style.width = "25%";
                auxiliar.style.padding = "1px";
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