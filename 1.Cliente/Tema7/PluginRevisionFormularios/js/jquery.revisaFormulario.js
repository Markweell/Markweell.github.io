const patrones = {
    nombre: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    apellidos: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
    correo: /^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/
}
jQuery.fn.revisaFormulario = function () {
    focusedo=false;
    this.each(function () {
        if (!patrones[$(this).attr("tipo")].test($(this).val())){
            $(this).css({
                'border': '2px solid #ffD3D7',
                'background': '#ffDEDE',
                'color': '#ff0000'
            })
            if(!focusedo){
                $(this).focus();
                focusedo=true;
            }
        }
        else
            $(this).css({
                'border': '1px solid black',
                'background': 'white',
                'color': 'black'
            })
    });
    return $(this);
}