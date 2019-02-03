{
    /**
     * @author Marcos Gallardo Pérez
     */

    let inputs,
        textArea;

    function init() {
        inputs = $('input[type="text"]');
        textArea = $('textarea');
        textArea.prop("disabled", true);
        
        $('input[type="submit"]').click((e) => {
            e.preventDefault();
            let correctos = true;
            let mensaje = "";
            inputs.revisaFormulario();
            inputs.each(function (indice, elemento) {
                elemento = $(elemento);
                mensaje += elemento.attr("tipo") + ": " + elemento.val() + "\n";
                if (elemento.css('background-color') != 'rgb(255, 255, 255)' || elemento.val()=="")
                    correctos=false  
            });
            correctos?textArea.text(mensaje):textArea.text(""); 
        });

        inputs.blur((e) => {
            $(e.delegateTarget).revisaFormulario();
        });
        inputs.focus((e) => {
            $(e.delegateTarget).css({
                'transition':'0.1s',
                'transition-delay':'0.1s',
                'border': '1px solid black',
                'background': '#f0f0f0',
                'color': 'black'
            });
        });
        console.log(tester.init('nombre', 'nombre'))
    }
    $(init);
    /**
     * Clousure
     */
    let tester = (function () {
        let mensaje;

        function init(texto, tipo) {
            mensaje = "Incorrecto";
            if (patrones[tipo].test(texto)) {
                mensaje = "Correcto"
            }
            return mensaje;
        }
        return {
            init
        }
    })();
}