{

    /**
    * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
    * Métodos a utilizar:
    * window.open()
    * document.write() 
    * Añade el esqueleto básico: html, head, title, body, ul...
    * @author Marcos Gallardo Pérez
    */
{
    document.addEventListener('DOMContentLoaded',init);
    function windowOpen () {
        let ventana = window.open('', '','height=200,width=300,top=0,left=0');
        ventana.document.write(
            "<html>"
            + "<head><title>Ventana de prueba</title></head>"
            + "<body>"
            + "<p>Se han utilizado las propiedades</p>"
            + "<ul>"
            + "<li>heigth=200</li>"
            + "<li>width=300</li>"
            + "</ul>"
            + "</body>"
            + "</html>"
            );
        ventana.document.close();
    }

    function init (){
        let button = document.getElementById("boton");
        button.addEventListener('click', windowOpen);
    }
}
}