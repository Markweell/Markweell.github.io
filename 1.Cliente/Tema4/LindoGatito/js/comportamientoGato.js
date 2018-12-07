{
    /**
     * @author Marcos Gallardo Pérez
     */

    let domImg;
    let domNombre;
    let domFechaNacimiento;
    let domRaza;
    let domPeso;
    let domEstado;
    let gato;
    document.addEventListener('DOMContentLoaded', init)

    function init() {
        domImg = document.getElementsByTagName('img')[0];
        domNombre = document.getElementsByTagName('li')[0];
        domFechaNacimiento = document.getElementsByTagName('li')[1];
        domRaza = document.getElementsByTagName('li')[2];
        domPeso = document.getElementsByTagName('li')[3];
        domEstado = document.getElementsByTagName('li')[4];


        document.getElementById("jugar").addEventListener('click', jugar);
        document.getElementById("comer").addEventListener('click', comer);
        document.getElementById("dormir").addEventListener('click', dormir);


        // domImg.src = "img/gato2.jpg";
        // domImg.style.width = '400px';
        crearGato();
        actualizarDOM();
    }

    function crearGato() {
        gato = new Gato(generaNombreAleatorio(),generaFechaAleatoria(), generaRazaAleatoria(), generaPesoAleatorio());
    };

    function actualizarDOM() {
        domNombre.innerHTML = "<b>Nombre:</b>  " + gato.getNombre();
        domFechaNacimiento.innerHTML = '<b>Fecha de Nacimiento:</b> ' + gato.getFecha();
        domRaza.innerHTML = '<b>Raza:</b> ' + gato.getRaza();
        domPeso.innerHTML = "<b>Peso:</b> " + gato.getPeso() + " kg";
        domImg.title = gato.edad + " años";
    }

    function jugar() {
        gato.jugar();
        actualizarDOM();
        domImg.src = "img/gatoJugar.jpg";
        domImg.style.width="300px";
        comprobarVida();
    }

    function comer() {
        gato.comer();
        actualizarDOM();
        domImg.src = "img/gatoComer.png";
        domImg.style.width="400px";
        comprobarVida();
    }

    function dormir() {
        (gato.getMuerto()) ? "" : domImg.src = "img/gatoDormir.jpg";
        domImg.style.width="300px";
    }

    function comprobarVida() {
        if (gato.getMuerto()) {
            domImg.src = "img/gatoMuerto.jpg"
            domImg.style.width="250px";
            domNombre.innerHTML = "<b>Nombre:</b>  ???"
            domFechaNacimiento.innerHTML = '<b>Fecha de Nacimiento:</b> ???'
            domRaza.innerHTML = '<b>Raza:</b> ???'
            domPeso.innerHTML = "<b>Peso:</b> ??? kg";
            domEstado.innerHTML = "<h3>" + gato.getNombre() + " ha muerto!! =(</h3>"
            inputNuevoGato = domEstado.appendChild(document.createElement('input'));
            inputNuevoGato.type="button";
            inputNuevoGato.value="Adopta otro gato";
            inputNuevoGato.style.fontSize="30px";
            inputNuevoGato.addEventListener('click',()=>(window.open("lindoGatito.html","_SELF")));
        }
    }

    function generaNombreAleatorio() {
        let nombresPosibles = ['Nala', 'Teo', 'Rodolfo', 'Paco', 'Simba', 'Ares'];
        return nombresPosibles[generaAleatorio(0, nombresPosibles.length - 1)]
    }

    function generaFechaAleatoria() {
        date = new Date(generaAleatorio(2005,2017), generaAleatorio(1,12),generaAleatorio(1,28));
        return date.toLocaleDateString();
    }

    function generaPesoAleatorio() {
        return generaAleatorio(1, 15);
    }

    function generaRazaAleatoria() {
        let razasPosibles = ['Siames', 'Sphynx', 'Maine Coon', 'Bosque de Noruega', 'Gato persa'];
        return razasPosibles[generaAleatorio(0, razasPosibles.length - 1)]
    }

    function generaAleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

}