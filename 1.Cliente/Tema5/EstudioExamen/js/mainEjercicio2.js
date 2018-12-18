{
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        document.getElementById("ejercicio2").addEventListener('click', abrirEjercicio2.bind(null, 1, 2), false);
        document.getElementById("ejercicio1").addEventListener('click', () => abrirEjercicio1(600));
        document.getElementsByTagName("body")[0].addEventListener('click', clickea, true);
    }
}