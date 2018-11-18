{
    /**
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener("DOMContentLoaded", init);

        function init() {
            document.getElementById("boton").addEventListener("click", resetea);
            if (LeerClaveLocal() == null) {
                GrabarClaveLocal(1);
            }else{
                nuevoValor=parseInt(LeerClaveLocal())+1;
                GrabarClaveLocal(nuevoValor);
            }
            agregaTexto();

            /**
            if (localStorage.getItem("Count") === null)
                localStorage.setItem("Count", 1);
            /**
            let contador = localStorage.getItem("Contador");
            if (contador >= 1)
                localStorage.setItem("Contador", localStorage.getItem("Contador")++);
            else { localStorage.setItem("Contador", 1); }
            document.getElementById("Mensaje").innerHTML="hola";
            /**
            */
            // tras muchas pruebas, no he tenido tiempo de detectar el error. Dejo el código comentado
            //por que me parece que es la forma de hacerlo. 

        }
        function agregaTexto() {
            switch (parseInt(LeerClaveLocal())) {
                case 1:
                    document.getElementById("mensaje").innerHTML =`<p>Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas<p>`;
                    break;
                case 2:
                    document.getElementById("mensaje").innerHTML = `<p>Hola de nuevo.Ya estás aqui por segunda vez.¿Volveremos a vernos?.<p>`;
                    break;
                default:
                    document.getElementById("mensaje").innerHTML = `<p>Ya empiezas a ser pesado. Esta es la vez numero ${LeerClaveLocal()} que entras. Sigue con tus cosas<p>`;
                    break;
            }
        }
        function GrabarClaveLocal(valor) {
            window.localStorage.setItem("ContadorVisitas", valor);
        }
        function LeerClaveLocal() {
            return window.localStorage.getItem("ContadorVisitas");
        }
        function resetea() {
            localStorage.clear();
            document.getElementById("mensaje").innerHTML = `<p>RESETEADO</p>`;
        }
    }
}
