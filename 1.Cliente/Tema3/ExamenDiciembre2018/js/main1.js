{
    /**
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener("DOMContentLoaded", init);

        function init() {
            document.getElementById("boton").addEventListener("click", resetea)
            if (localStorage.getItem("Count") === null)
                localStorage.setItem("Count", 1);
            /**
            let contador = localStorage.getItem("Contador");
            if (contador >= 1)
                localStorage.setItem("Contador", localStorage.getItem("Contador")++);
            else { localStorage.setItem("Contador", 1); }
            document.getElementById("Mensaje").innerHTML="hola";
            
            */
            // tras muchas pruebas, no he tenido tiempo de detectar el error. Dejo el código comentado
            //por que me parece que es la forma de hacerlo. 

        }
        function agregaTexto(){
            
        }
        function resetea() {
            localStorage.clear();
        }
    }
}
