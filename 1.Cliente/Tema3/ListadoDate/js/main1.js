{

    /**
    * ¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
    * @author Marcos Gallardo Pérez
    */
    {

        
        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            contenido = document.getElementById("Contenido");
            listaMadre = contenido.appendChild(document.createElement("ul"));
            date1= new Date();
            date2= new Date(100000);
            date3= new Date("10 Jun 2018");
            date4= new Date(2018,1,1,1,1,1);
            array = [{texto:"new Date()",resultado:date1},
            {texto:"new Date(100000)",resultado:date2},
            {texto:"new Date(\"10 Jun 2018\")",resultado:date3},
            {texto:"new Date(2018,1,1,1,1,1)",resultado:date4}];
            let li;
            for (let i = 0; i < array.length; i++) {
                li = document.createElement("li");
                li.innerHTML = "<b>" + array[i].texto+ "</b>   Resultado:  "+array[i].resultado+"<br>";
                listaMadre.appendChild(li);
            }
        }
        window.addEventListener("DOMContentLoaded", init);

    }
}