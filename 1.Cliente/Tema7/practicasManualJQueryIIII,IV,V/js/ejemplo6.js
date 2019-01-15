/**
 * @author Marcos Gallardo Pérez
 */
$(init);

function init() {
    $(document).click(function (e) {
        alert("X: " + e.pageX + " - Y: " + e.pageY)
    });
}