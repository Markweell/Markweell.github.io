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

        function multiWindowOpen() {
            let ventana;
            for (let i = 0; i < 5; i++) {
                let top = (200 + (i * 10));
                let left = 300 + (i * 10);
                ventana = window.open('', '', 'height=200,width=300,top=' + top + ',left=' + left);
                ventana.document.write(
                    "<html>" +
                    "<head><title>Ventana " + i + "</title><script type=\"text/javascript\" src=\"js/window.js\" ></script></head>" +
                    "<body>" +
                    "<samp>Ventana" + i + "</samp>" +
                    "<input type='button' id=\"cerrar\" value='Cerrar'>" +
                    "</body>" +
                    "</html>"
                );
                ventana.document.close();
            }
            
        }
        function init() {
            let button = document.getElementById("boton");
            button.addEventListener('click', multiWindowOpen);
        }
    }
}