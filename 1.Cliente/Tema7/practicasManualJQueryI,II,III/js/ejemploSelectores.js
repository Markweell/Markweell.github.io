/**
 * @author Marcos Gallardo Pérez
 */
$(init);

function init(){
    let selectorEtiqueta = $("p");
    let selectorId =$("#id");
    let selectorClase = $(".clase");
    let selectorMultiple = $(".clase1,#id,.clase2");
    let selectorAll= $("*");
    let selectorAntecesorDecendant = $("table.mitabla td");
    let selectorParentChild = $("table.mitabla>td");
    let selectorSiguienteElemento = $("p.parraforojo + p"); //Esto selecciona los párrafos que están después de cualquier párrafo que tenga la clase "parraforojo"
    let selectoMismoNivelDeJerarquia = $("#miparrafo ~ table");
}