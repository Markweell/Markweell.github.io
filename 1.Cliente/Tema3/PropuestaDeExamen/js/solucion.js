{
    /**
     * 
     * @author Marcos Gallardo Pérez
     */
    {
        let regexNombre;
        var usuarios;
        let DOMNombreUsuario;
        let DOMContaseniaUsuario;
        let DOMEstado;

        document.addEventListener('DOMContentLoaded', init);

        function init() {
            DOMNombreUsuario = document.getElementById('nombreUsuario');
            DOMContaseniaUsuario = document.getElementById('contraseniaUsuario');
            DOMEstado = document.getElementById('estado');
            regexNombre = /^[a-z]{3,10}$/i;
            //if (leerClaveLocal() == null)
            usuarios = new Map();
            //else
            //usuarios = leerClaveLocal();
            crearEsqueletoBasico();
        }
        function crearEsqueletoBasico() {
            document.getElementsByTagName('h1')[0].innerHTML = "Marcos Gallardo Pérez. Propuesta de examen";
            asignarComportamientoALosInput();
        }
        function asignarComportamientoALosInput() {
            DOMNombreUsuario.addEventListener('blur', comprobarNombre);
            DOMNombreUsuario.addEventListener('focus', letraNegra);
            document.getElementById('entar').addEventListener('click', entrar);
            document.getElementById('registarse').addEventListener('click', registarse);
            //document.getElementById('clearDataBase').addEventListener('click', clearDataBase);
        }
        function letraNegra() {
            DOMNombreUsuario.style.color = 'black';
            DOMEstado.innerHTML = "";
        }
        function comprobarNombre() {
            if (!regexNombre.test(DOMNombreUsuario.value))
                DOMNombreUsuario.style.color = 'red';
                
        }
        function entrar() {
            if (!comprobacionInicial()) {
                return;
            }
            try {
                comprobarUsuarioExistente();
                (usuarios.get(DOMNombreUsuario.value) == DOMContaseniaUsuario.value) ? DOMEstado.innerHTML = "Bienvenido" : DOMEstado.innerHTML = "Contaseña invalida";
            } catch (e) {
                DOMEstado.innerHTML = e.message;
            }
        }
        function registarse() {
            if (!comprobacionInicial()) {
                return;
            }
            try {
                comprobarUsuarioExistente();
                DOMEstado.innerHTML = "Se está intentando registar, estando ya en la base de datos";
            } catch (e) {
                usuarios.set(DOMNombreUsuario.value, DOMContaseniaUsuario.value);
                //grabarClaveLocal(usuarios);
                DOMEstado.innerHTML = "";
            }
        }
        function comprobarUsuarioExistente() {
            if (!usuarios.has(DOMNombreUsuario.value))
                throw new Error('Ese usuario no está!!');
            return true;
        }
        function comprobacionInicial() {
            if (DOMNombreUsuario.value == "" || DOMContaseniaUsuario.value == "" || DOMNombreUsuario.style.color == 'red'){
                if(DOMNombreUsuario.style.color == 'red')
                    DOMEstado.innerHTML = "El nombre no es válido";
                return false;
            }
            return true;
        }
        /*
        function grabarClaveLocal(valor) {
            window.localStorage.setItem("usuarios", valor);
        }
        function leerClaveLocal() {
            return window.localStorage.getItem("usuarios");
        }
        function clearDataBase() {
            window.localStorage.clear();
            usuarios = new Map();
        }
        */
    }
}