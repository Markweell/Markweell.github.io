{
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        
        document.getElementsByTagName('body')[0].addEventListener('click', boton);
        document.getElementsByTagName('body')[0].addEventListener('contextmenu', desactivaEventos);
        
        
    }
    //Le he puesto el evento a todo el body, pero solo ejecuto la acción si he presionado el input tipo button que compruebo 
    //mediante expresiones regulares.
    function boton(ev) {
        console.log(document.forms[0][3].value);
        if (/button/.test(ev.target.type)) {
            //Recorro todos los imputs, si es de tipo /radio/ y esta seleccionado lo recojo. 
            Array.from(document.getElementsByTagName('input')).forEach(element => {
                if (/radio/.test(element.type) && element.checked) {
                    //console.log(element);
                }
                if (/range/.test(element.type)) {
                    //console.log(element.value);
                }
                if (/fecha/.test(element.id)) {
                    [,dia,,mes,anio]=/(\d\d)([- ]?)(\d\d)\2(\d\d\d\d)/.exec(element.value);
                    //console.log('El dia es : '+dia+ ', el mes es: '+mes+ " y el año es : "+ anio);
                }

            });;
            function validaFecha() {
                var dia = document.getElementById("dia").value;
                var mes = document.getElementById("mes").value;
                var ano = document.getElementById("ano").value;
                fecha = new Date(ano, mes, dia);
                if( !isNaN(fecha) ) {
                return false;
                }
                return true;
                }
            //console.log(document.getElementsByTagName('select')[0].value);
            //select.options[select.selectedIndex].value
        }
    }
    function desactivaEventos(ev){
        ev.preventDefault();
    }
}