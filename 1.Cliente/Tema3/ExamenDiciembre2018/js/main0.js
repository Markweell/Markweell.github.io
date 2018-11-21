{
    /**
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener("DOMContentLoaded", init);
        function init() {
            dOMEjercicio1=document.getElementById('Ejercicio1').addEventListener('click',enlace1);
            dOMEjercicio2=document.getElementById('Ejercicio2').addEventListener('click',enlace2);
        }
        function enlace1(){
            window.open("ejercicio1.html","_self");
        }
        function enlace2(){
            window.open("ejercicio2.html","_self");
        }
    }
}
