/**
 * @author Marcos Gallardo Pérez
 */
function init() {
    $("#ocultar").click(function (event) {
        event.preventDefault();
        $("#capaefectos").hide("slow");
    });
    $("#mostrar").click(function (event) {
        event.preventDefault();
        $("#capaefectos").show(3000);
    });
}
$(init);