{
    /**
     * @author Marcos Gallardo Pérez
     */

    let domImg;
    let domNombre;
    let domFechaNacimiento;
    let domRaza;
    let domPeso;
    let gato;
    document.addEventListener('DOMContentLoaded',init)
    function init(){
        domImg = document.getElementsByTagName('img')[0];
        domNombre = document.getElementsByTagName('li')[0];
        domFechaNacimiento = document.getElementsByTagName('li')[1];
        domRaza = document.getElementsByTagName('li')[2];
        domPeso = document.getElementsByTagName('li')[3];

        // domNombre.innerHTML ="Nombre: Paco" 
        // domFechaNacimiento.innerHTML='Fecha de Nacimiento: eo'
        // domRaza.innerHTML = 'Raza: Siames'
        // domPeso.innerHTML = "Peso: 3 kg";

        //domImg.src = "img/gato2.jpg";
        //domImg.style.width = '400px';
        crearGato();
        actualizarDOM();
    }
    function crearGato() {
        gato = new Gato('Paco',new Date(),"Siames",3);
        //console.log(gato.nombre)
        return gato;
    };

    function actualizarDOM(){
        domNombre.innerHTML ="<b>Nombre:</b>  "+ gato.nombre;
        domFechaNacimiento.innerHTML='<b>Fecha de Nacimiento:</b> ' + gato.fechaDeNacimiento;
        domRaza.innerHTML = '<b>Raza:</b> '+ gato.raza;
        domPeso.innerHTML = "<b>Peso:</b> "+gato.peso+" kg";
    }

}