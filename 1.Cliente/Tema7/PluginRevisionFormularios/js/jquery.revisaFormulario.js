const patrones = {
    nombre: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    apellidos: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    correo: /^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/
}
jQuery.fn.revisaFormulario = function () {

    let $inputs = $("input[type='text']", $(this)),
        $textArea = $('textarea', $(this)),
        $elementoAFocusear = "",
        nombre,
        apellido,
        correo;

    $textArea.prop("disabled", true);
    focusedo = false;

    $(this).submit((e) => {
        e.preventDefault();
        focusedo = false;
        $elementoAFocusear = "";
        $inputs.blur();
        if ($elementoAFocusear != "")
            $elementoAFocusear.focus();
        
        $.post("php/servidor.php", {
            nombre: nombre,
            apellido: apellido,
            correo: correo
        }, function (respuesta) {
            $textArea.text(respuesta);
        }).done(function(){
            console.log("Éxito");
        }).fail(function () {
            $textArea.text("La conexión por post con el servidor no se pudo realizar.");
        }).always(function () {
            console.log("Esto se va a ejecutar siempre");
        })
    });

    $inputs.blur((e) => {
        if (!patrones[$(e.delegateTarget).attr("tipo")].test($(e.delegateTarget).val())) {
            $(e.delegateTarget).css({
                'border': '1px solid #ffD3D7',
                'background': '#ffDEDE',
                'color': '#ff0000'
            })
            if (!focusedo) {
                $elementoAFocusear = e.delegateTarget;
                focusedo = true;
            }
        } else{
            $(e.delegateTarget).attr("tipo") == 'nombre'?nombre=$(e.delegateTarget).val():"";
            $(e.delegateTarget).attr("tipo")== 'apellidos'?apellido=$(e.delegateTarget).val():"";
            $(e.delegateTarget).attr("tipo") == 'correo'?correo=$(e.delegateTarget).val():"";
            $(e.delegateTarget).css({
                'border': '1px solid black',
                'background': 'white',
                'color': 'black'
            });
        }
    });

    $inputs.focus((e) => {
        $(e.target).css({
            'border': '1px solid black',
            'background': '#f0f0f0',
            'color': 'black'
        });
    });

    return this;
}