
    /**
     * Ejercicio sobre el login de usuarios sin base de datos. 
     * @author Marcos Gallardo Pérez
     */
    {
        let regexNombre;
        var usuarios;
        let domNombreUsuario;
        let domContaseniaUsuario;
        let domEstado;

        /**
         * Funcion inicial al cargar el DOM
         */
        function init() {
            domNombreUsuario = document.getElementById('nombreUsuario');
            domContaseniaUsuario = document.getElementById('contraseniaUsuario');
            domEstado = document.getElementById('estado');
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
            domNombreUsuario.addEventListener('blur', comprobarNombre);
            domNombreUsuario.addEventListener('focus', letraNegra);
            document.getElementById('entar').addEventListener('click', entrar);
            document.getElementById('registarse').addEventListener('click', registarse);
            //document.getElementById('clearDataBase').addEventListener('click', clearDataBase);
        }
        /**
         * Vuelve la letra el input del Nombre a su estado por defecto.
         */
        function letraNegra() {
            domNombreUsuario.style.color = 'black';
            domEstado.innerHTML = "";
        }
        /**
         * Comprueba que el nombre cumple el patrón, si no lo cumple, cambia su color a rojo
         */
        function comprobarNombre() {
            if (!regexNombre.test(domNombreUsuario.value))
                domNombreUsuario.style.color = 'red';
                
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
                (usuarios.get(domNombreUsuario.value) == domContaseniaUsuario.value) ? domEstado.innerHTML = "Bienvenido" : domEstado.innerHTML = "Contaseña invalida";
            } catch (e) {
                domEstado.innerHTML = e.message;
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
                domEstado.innerHTML = "Se está intentando registar, estando ya en la base de datos";
            } catch (e) {
                usuarios.set(domNombreUsuario.value, domContaseniaUsuario.value);
                //grabarClaveLocal(usuarios);
                domEstado.innerHTML = "";
            }
        }
        /**
         * Comprueba si el usuario ya existe, en caso de que no exista lanza una excepción
         */
        function comprobarUsuarioExistente() {
            if (!usuarios.has(domNombreUsuario.value))
                throw new Error('Ese usuario no está!!');
            return true;
        }
        /**
         * Comprueba que el nombre de usuario o la contraseña no esten vacíos ni esten en rojo. 
         */
        function comprobacionInicial() {
            if (domNombreUsuario.value == "" || domContaseniaUsuario.value == "" || domNombreUsuario.style.color == 'red'){
                if(domNombreUsuario.style.color == 'red')
                    domEstado.innerHTML = "El nombre no es válido";
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
