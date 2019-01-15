/**
 * @author Marcos Gallardo Pérez
 */
$(init);

function init() {
    $("#mayoria_edad").click(function () {
        if ($("#mayoria_edad").prop("checked")) {
            $("#formulariomayores").css("display", "block");
        } else {
            console.log("Disable")
            $("#formulariomayores").css("display", "none");
        }
    });
}