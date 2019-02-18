{
    /**
     * @author Marcos Gallardo Pérez
     */


    function init() {
        $('input[type=button]').click(function clickButton() {

            let divContenedor = $('<div></div>');
            $.getJSON("json/" + $(this).attr("name") + ".json", function callback(resultado) {
                let i = 0;
                if (resultado["identificador"] === "1" || resultado["identificador"] === "2"){
                    $.each(resultado["Contenido"], (key, value) => {
                        divContenedor.append("<div class='container' id='container_" + i + "'>" +
                            "<h1 id='titulo_" + i + "'><span >" + key + "</span></h1></div>" +
                            "<p id='parrafo_" + i + "'>" + value + "</p>");
                        i++;
                    })
                } else{
                    $.each(resultado["Contenido"], (key, value) => {
                        let mensaje = "<div class='container' id='container_" + i + "'>" +
                            "<h1 id='titulo_" + i + "'><span >" + key + "</span></h1></div>" +
                            "<ul id='parrafo_" + i + "'>";
                        $.each(value, (keyInterna, valueInterno) => {
                            mensaje += "<li><input type='checkbox' name='habilidades'>" +
                             valueInterno + "</li>"
                        });
                        mensaje += "</ul></div>";
                        divContenedor.append(mensaje);
                        i++;
                    })
                }

                $('.container').click(function muestraContenido() {
                    // $("p").css({
                    //     "display": "none"
                    // });
                    $("p").hide(1000);                    
                    separador = this.id.split("_");
                    $("#parrafo_" + separador[1]).toggle(1000);
                    // if ($("#parrafo_" + separador[1]).css("display") === "none"){
                    //     // $("#parrafo_" + separador[1]).css({
                    //     //     "display": "flex"
                    //     // });
                    //     $("#parrafo_" + separador[1]).show(1000);
                    // }else
                    //     // $("#parrafo_" + separador[1]).css({
                    //     //     "display": "none"
                    //     // });
                    //     $("#parrafo_" + separador[1]).hide(1000);
                })
            })
            $('article').html(divContenedor);
        })
    }
    $(init);
}

// "Back-end": "ASP.NET, PHP, Ruby, Python, Node.js y Java",
// "Full stack": "Lenguajes de Front-end y Back-end, además de administrar sistemas"