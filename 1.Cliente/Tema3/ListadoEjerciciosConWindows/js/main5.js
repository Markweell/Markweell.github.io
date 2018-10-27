{

    /**
    * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
    * @author Marcos Gallardo Pérez
    */
   {

    let lista;
    let arrayElementosLista;
    let listaMadre;

    function init() {
        crearEsqueleto();
    }

    function crearEsqueleto() {
        reloj = document.getElementById("reloj");
        setInterval(() => {
            
            let date = new Date();

            let hours = ("0" + date.getHours()).slice(-2);
            let minutes = ("0" + date.getMinutes()).slice(-2);
            let seconds = ("0" + date.getSeconds()).slice(-2);

            reloj.textContent = hours + ":" + minutes + ":" + seconds; 


        }, 1000);


    }
    window.addEventListener("DOMContentLoaded", init);

}
}