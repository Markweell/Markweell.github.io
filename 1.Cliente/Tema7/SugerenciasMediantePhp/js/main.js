{
    /**
     * @author Marcos Gallardo Pérez
     */

    let inputDom;

    function init() {
        inputDom = $('input[type=text]');
        let mensaje = "";
        inputDom.keyup(() => {
            $.ajax({
                url: 'php/codigoPHP.php',
                data: {
                    'textoInput': inputDom.val()
                },
                success: function success(result) {
                    $('#sugerencia').html("");
                    mensaje = "";
                    $.each(JSON.parse(result), function (key, value) {
                        if (value === "No hay coincidencias" || inputDom.val() === "") {
                            $('#sugerencia').html("<div>No hay ninguna coincidencia</div>");
                            return;
                        }
                        mensaje += "<li class='elementos'>" + value + "</li>";
                        $('#sugerencia').html(mensaje);

                    });
                },
                dataType: "text",
                complete: () => {
                    $('#sugerencia').html(mensaje);
                    $('.elementos').click(function asignarElementoEncontrado() {
                        inputDom.val(this.innerText);
                        inputDom.keyup();
                    })
                }
            });
            // $.get('php/codigoPHP.php', {
            //         'textoInput': inputDom.val()
            //     },
            //     (result) => {
            //         $.each(JSON.parse(result), function (key, value) {
            //             if (value === "No hay coincidencias" || inputDom.val() === "") {
            //                 $('#sugerencia').html("<div>No hay ninguna coincidencia</div>");
            //                 return;
            //             }
            //             console.log(mensaje)
            //             mensaje += "<li class='elementos'>" + value + "</li>";
            //             $('#sugerencia').html(mensaje);
            //             $('.elementos').click(function asignarElementoEncontrado() {
            //                 inputDom.val(this.innerText);
            //                 inputDom.keyup();
            //             })
            //         });
            //     }).fail(function () {
            //     $('#sugerencia').text("La conexión por get con el servidor no se pudo realizar.");
            // })
        })
    }
    $(init);

}