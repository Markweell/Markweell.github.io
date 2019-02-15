{
    /**
     * @author Marcos Gallardo Pérez
     */

    let inputDom;

    function init() {
        inputDom=$('input[type=text]')
        inputDom.keyup(()=>{
            $.get('php/servidor.php',{'textoInput': inputDom.val()},(result)=>{
                $('#sugerencia').text(result);
            }).fail(function () {
                $('#sugerencia').text("La conexión por get con el servidor no se pudo realizar.");
            })
        })
    }
    $(init);
 
}