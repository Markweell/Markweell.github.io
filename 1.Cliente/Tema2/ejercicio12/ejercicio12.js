{
    window.addEventListener("load",init);

    function muestra() {
        document.getElementById("texto").className = "visible";  
        document.getElementById("mensaje").className = "oculto";
        
    }

    function init() {
        document.getElementById("mensaje").addEventListener("click", muestra);
    }
}