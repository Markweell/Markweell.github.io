{
    /**
     * @author Marcos Gallardo Pérez
     */

    let inputDom;

    function init() {
        inputDom=$('input[type=text]');
        let mensaje="";
        inputDom.keyup(()=>{
            mensaje="";
            $.get('php/servidor.php',{'textoInput': inputDom.val()},(result)=>{
                $.each(result.split(","),(key,value)=>{
                    if(value==="No hay ninguna coincidencia"){
                        mensaje +="<div>"+value+"</div>";
                        return;
                    }else if(value!="")
                        mensaje += "<li class='elementos'>"+value+"</li>";
                })
                $('#sugerencia').html(mensaje);
                $('.elementos').click(function asignarElementoEncontrado(){
                    inputDom.val(this.innerText);
                    inputDom.keyup();
                })
            }).fail(function () {
                $('#sugerencia').text("La conexión por get con el servidor no se pudo realizar.");
            })   
        })
    }
    $(init);
 
}