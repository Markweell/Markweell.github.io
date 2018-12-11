{
    /**
     * Primer ejercicio de uso de los eventos del ratón. 
     * @author Marcos Gallardo Pérez
     */

    let arrayColores;

    function init() {
        arrayColores = ["black", "yellow", "blue", "orange", "forestgreen", "pink", "brown"];
        let canvas = document.getElementsByTagName("canvas");

        for (let element of canvas) {
            element.addEventListener(element.getAttribute("id"), eventoCanvas);
            element.addEventListener("contextmenu", quitarMenuContextual);
            pintaCanvas(element);
        }
    }

    function eventoCanvas(ev) {
        pintaCanvas(ev.target, generaAleatorio(arrayColores.length - 1), ev.offsetX, ev.offsetY, ev.button, ev.buttons);
    }

    function quitarMenuContextual(ev) {
        ev.preventDefault();
    }

    let pintaCanvas = function (canvas, aleatorio, x, y, button, buttons) {
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d', {
                alpha: false
            });
            if (arguments.length === 1) {
                ctx.fillStyle = "red";
            } else {
                ctx.fillStyle = arrayColores[aleatorio];
            }
            ctx.fillRect(0, 0, 400, 400);

            ctx.font = "1.3em Lato";
            ctx.fillStyle = "white";

            ctx.fillText(canvas.getAttribute("id"), 50, 30);

            if (arguments.length > 1) {;
                ctx.fillText("x = " + x, 210, 40);
                ctx.fillText("y = " + y, 210, 70);
                ctx.fillText("button = " + button, 190, 100);
                ctx.fillText("buttons = " + buttons, 190, 130);
            }

        }
    }

    function generaAleatorio(max, min = 1) {
        //console.log(min);
        //console.log(max);
        return Math.round(Math.random() * (max - min)) + min;
    }

    document.addEventListener("DOMContentLoaded", init);

}