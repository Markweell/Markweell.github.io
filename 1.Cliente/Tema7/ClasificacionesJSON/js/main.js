{
    /**
     * @author Marcos Gallardo Pérez
     */


    function init() {
       $('input[type=button]').click(function clickButton(){
        
        let divContenedor = $('<div></div>');
        $.getJSON("json/"+$(this).attr("name")+".json",function callback(resultado){
            let i = 0;
            $.each(resultado, (key,value)=>{
                divContenedor.append("<div class='container' id='container_"+i+"'>"+
                "<h1 id='titulo_"+i+"'><span >"+key+"</span></h1>"+
                "<p id='parrafo_"+i+"'>"+value+"</p></div>");
                i++;
            })
            $('.container').click(function muestraContenido(){
                separador = this.id.split("_");
                if($("#parrafo_"+separador[1]).css("display")==="none")
                    $("#parrafo_"+separador[1]).css({"display":"inline"});
                else
                    $("#parrafo_"+separador[1]).css({"display":"none"});
               
            })
        })
        $('article').html(divContenedor);
       }) 
    }
    $(init);
}
    
