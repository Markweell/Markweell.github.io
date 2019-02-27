{
    /**
     * @author Marcos Gallardo Pérez
     */

    let opciones = {
        css:{ "border": "4px solid #ffD3D7"},
        patrones : {
            nombre: /^[a-zA-Zñúíóáé]{4,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
            apellidos: /^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,10}$/,
            correo: /^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/
        }
    }

    function init() {
        $('form').examen();
        
        tester.init('nombre', 'nombre');
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