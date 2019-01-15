/**
 * @author Marcos Gallardo Pérez
 */
function init() {
    //selecciono todos los elementos de la clase "mitexto"
    var ElementosMitexto = $(".mitexto");
    //muestro el número de los párrafos encontrados
    alert("Hay " + ElementosMitexto.length + " elementos de la clase mitexto");
}
$(init);