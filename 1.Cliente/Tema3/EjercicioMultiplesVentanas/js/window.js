{

  /**
     * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
     * Métodos a utilizar:
     * miVentana = window.open('','','width=200,height=200');
     * miVentana.document.open();
     * miVentana.document.write() 
     * Añade el esqueleto básico: html, head, title, body, ul...
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener('DOMContentLoaded', init);

        function init() {
            let boton = document.getElementById("cerrar");
            boton.addEventListener('click', cerrar);
        }

        function cerrar() {
            window.close();
        }
    }
}