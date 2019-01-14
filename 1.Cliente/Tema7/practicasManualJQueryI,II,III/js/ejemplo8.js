/**
 * @author Marcos Gallardo Pérez
 */
function init() {
    $(document).ready(function () {
        $("#enlaceajax").click(function (evento) {
            evento.preventDefault();
            $("#destino").load("contenido-ajax.html");
        });
    });
}
$(init);