const patrones = {
    nombre: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    apellidos: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    correo: /^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/
}

jQuery.fn.examen = function (opciones = {}) {
    
    //#region  -Acciones iniciales-
    let $inputs = $("input[type='text']", $(this)),
        $textArea = $('textarea', $(this)),
        $elementoAFocusear = "",
        focusedo,
        nombre,
        apellido,
        correo;

    $textArea.prop("disabled", true);
    focusedo = false;

    let opcionesPorDefecto = $.extend({
        css: {
            "color": "#ff0000",
            "background-color": "#ffDEDE",
            "border": "2px solid #ffD3D7"
        },
        patrones: patrones,
    }, opciones);

    let cssInicial = {
        'border': '1px solid black', //esta variable no podemos ponerla initial porque falla
        'background': 'initial',
        'color': 'initial'
    }
    //#endregion

    //#region Eventos
    $(this).submit((e) => {
        e.preventDefault();

        focusedo = false;
        $elementoAFocusear = "";

        $inputs.blur();

        if ($elementoAFocusear != "") {
            $elementoAFocusear.focus();
            $textArea.text("");
        } else
            $.post("php/servidor.php", {
                nombre: nombre,
                apellido: apellido,
                correo: correo
            }, function (respuesta) {
                $textArea.text(respuesta);
            }).fail(function () {
                $textArea.text("La conexión por post con el servidor no se pudo realizar.");
            })

    });


    //Eventos a los inputs al perder el foco
    $inputs.blur((e) => {
        //No cumple con el patrón definido:
        if (!opcionesPorDefecto.patrones[$(e.delegateTarget).attr("tipo")].test($(e.delegateTarget).val())) {
            $(e.delegateTarget).css(opcionesPorDefecto.css);

            if (!focusedo) {
                $elementoAFocusear = e.delegateTarget;
                focusedo = true;
            }

        } else {
            nombre = $(e.delegateTarget).attr("tipo") == 'nombre' ? $(e.delegateTarget).val() : nombre;
            apellido = $(e.delegateTarget).attr("tipo") == 'apellidos' ? $(e.delegateTarget).val() : apellido;
            correo = $(e.delegateTarget).attr("tipo") == 'correo' ? $(e.delegateTarget).val() : correo;
            
            $(e.delegateTarget).css(cssInicial);
        }
    });

    //Eventos a los inputs al ganar el foco
    $inputs.focus((e) => {
        $(e.target).css(cssInicial);
    });
    //#endregion Eventos
    return this;
}