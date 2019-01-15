/**
 * @author Marcos Gallardo Pérez
 */
function init() {
    $("#mitexto").keypress(function (e) {
        e.preventDefault();
        $("#loescrito").html(e.which + ": " + String.fromCharCode(e.which))
    });
}
$(init);