/**
 * @author Marcos Gallardo Pérez
 */

$(init);

function init() {
    $("#enlace").mouseover(function (event) {
        $("#capa").addClass("clasecss");
    });
    $("#enlace").mouseout(function (event) {
        $("#capa").removeClass("clasecss");
    });
}