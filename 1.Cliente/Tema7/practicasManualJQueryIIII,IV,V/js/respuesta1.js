function init() {
    let strSelected = "";
    console.log($("form").attr("id"))
    $("#texto").change(function () {
        // Para input, :selected no funciona.
        strSelected = "InputTexto" + $("#texto:selected").text();
        $("#selected").text(strSelected);
        //El método .prop() no funciona para los input que no tienen la propiedad checked
        strProp = "InputTexto: " + $("#texto").prop("checked");
        $("#prop").text(strProp);
    })

    $(".checkBox").change(function () {
        // Para checkBox :selected no funciona.
        strSelected = "CheckBox: " + $(".checkBox:selected").attr("id");
        $("#selected").text(strSelected);
        // El método .prop () obtiene el valor de propiedad solo para el primer elemento del conjunto coincidente.
        strProp = "CheckBox: " + $(".checkBox").prop("checked");
        $("#prop").text(strProp);
    })

    $(".opciones").change(function () {
        // Para Radio Buttons :selected no funciona.
        strSelected = "RadioInput: " + $(".opciones:selected").attr("id");
        $("#selected").text(strSelected);
        // El método .prop () obtiene el valor de propiedad solo para el primer elemento del conjunto coincidente.
        strProp = "RadioInput: " + $(".opciones").prop("checked");
        $("#prop").text(strProp);
        strAttr = "RadioInput: " + $(".opciones").attr("checked");
        $("#attr").text(strAttr);
        
    })
    $("#selecciones").change(function () {
        strSelected = "Select:" + $("select option:selected").text();
        $("#selected").text(strSelected);
        //Estas intentando acceder a una propiedad que no tiene select
        strProp = "Select: " + $("option").prop("checked");
        $("#prop").text(strProp);
    })

}
$(init);