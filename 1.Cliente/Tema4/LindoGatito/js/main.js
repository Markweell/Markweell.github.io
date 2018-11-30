{
    /** 
     * @author Marcos Gallardo Pérez
     */
    
    document.addEventListener('DOMContentLoaded',init);
    function init(){
        input=document.getElementsByTagName("input")[0];
        input.addEventListener("click",abrirLindoGatito);
    }
    function abrirLindoGatito(){
        window.open("lindoGatito.html","_SELF")
    }
}