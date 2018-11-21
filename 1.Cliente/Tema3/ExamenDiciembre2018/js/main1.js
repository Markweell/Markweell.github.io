{
    /**
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener("DOMContentLoaded", init);
        let dOMMensaje;
        function init() {
            document.getElementById("boton").addEventListener("click", resetea);
           
            document.getElementById('atras').addEventListener("click", relogea);
            dOMMensaje = document.getElementById("mensaje");
            if (LeerClaveLocal() == null) {
                GrabarClaveLocal(1);
            } else {
                nuevoValor = parseInt(LeerClaveLocal()) + 1;
                GrabarClaveLocal(nuevoValor);
            }
            agregaTexto();
        }
        function agregaTexto() {
            switch (parseInt(LeerClaveLocal())) {
                case 1:
                    dOMMensaje.innerHTML = `<p>Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas<p>`;
                    break;
                case 2:
                    dOMMensaje.innerHTML = `<p>Hola de nuevo.Ya estás aqui por segunda vez.¿Volveremos a vernos?.<p>`;
                    break;
                default:
                    dOMMensaje.innerHTML = `<p>Ya empiezas a ser pesado. Esta es la vez numero ${LeerClaveLocal()} que entras. Sigue con tus cosas<p>`;
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
            dOMMensaje.innerHTML = `<p>RESETEADO</p>`;
        }
        function relogea(ev){
            //ev.preventDefault;
            history.back();
        }
    }
}
