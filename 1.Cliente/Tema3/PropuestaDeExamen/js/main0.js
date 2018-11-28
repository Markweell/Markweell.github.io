{
    /**
     * @author Marcos Gallardo Pérez
     */
   
    
    function init(){
        document.getElementsByTagName('a')[0].addEventListener("click",enlaza)
    }
    function enlaza(event){
        event.preventDefault();
        window.open("solucion.html","_self");
    }

    document.addEventListener('DOMContentLoaded',init);

}