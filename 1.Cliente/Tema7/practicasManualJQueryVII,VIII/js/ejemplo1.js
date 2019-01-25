/**
 * @author Marcos Gallardo Pérez
 */


function init() {
    //añado un evento clic para un botón, para que al pulsarlo parpadeen los elementos de clase parpadear
    $("#botonparpadear").click(function () {
        //parpadean los elementos de class CSS "parpadear"
        $(".parpadear").parpadea();
    }).click();
}
$(init);