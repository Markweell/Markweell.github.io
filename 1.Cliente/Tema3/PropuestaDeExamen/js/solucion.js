{
    /**
     * Ejercicio sobre el login de usuarios sin base de datos. 
     * @author Marcos Gallardo Pérez
     */
    {
        let regexNombre;
        var usuarios;
        let DOMNombreUsuario;
        let DOMContaseniaUsuario;
        let DOMEstado;

        /**
         * Funcion inicial al cargar el DOM
         */
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
        /**
         * Crea el esqueleto básico de la página
         */
        function crearEsqueletoBasico() {
            document.getElementsByTagName('h1')[0].innerHTML = "Marcos Gallardo Pérez. Propuesta de examen";
            asignarComportamientoALosInput();
        }
        /**
         * Asigna el comportamiento al formulario
         */
        function asignarComportamientoALosInput() {
            DOMNombreUsuario.addEventListener('blur', comprobarNombre);
            DOMNombreUsuario.addEventListener('focus', letraNegra);
            document.getElementById('entar').addEventListener('click', entrar);
            document.getElementById('registarse').addEventListener('click', registarse);
            //document.getElementById('clearDataBase').addEventListener('click', clearDataBase);
        }
        /**
         * Vuelve la letra el input del Nombre a su estado por defecto.
         */
        function letraNegra() {
            DOMNombreUsuario.style.color = 'black';
            DOMEstado.innerHTML = "";
        }
        /**
         * Comprueba que el nombre cumple el patrón, si no lo cumple, cambia su color a rojo
         */
        function comprobarNombre() {
            if (!regexNombre.test(DOMNombreUsuario.value))
                DOMNombreUsuario.style.color = 'red';
                
        }
        /**
         * Comportamiento del botón entrar
         */
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
        /**
         * Comportamiento del botón registrarse
         */
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
        /**
         * Comprueba si el usuario ya existe, en caso de que no exista lanza una excepción
         */
        function comprobarUsuarioExistente() {
            if (!usuarios.has(DOMNombreUsuario.value))
                throw new Error('Ese usuario no está!!');
            return true;
        }
        /**
         * Comprueba que el nombre de usuario o la contraseña no esten vacíos ni esten en rojo. 
         */
        function comprobacionInicial() {
            if (DOMNombreUsuario.value == "" || DOMContaseniaUsuario.value == "" || DOMNombreUsuario.style.color == 'red'){
                if(DOMNombreUsuario.style.color == 'red')
                    DOMEstado.innerHTML = "El nombre no es válido";
                return false;
            }
            return true;
        }
        /**
         * Inicia la funcion init solo cuando el DOM esté cargado. 
         */
        document.addEventListener('DOMContentLoaded', init);
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