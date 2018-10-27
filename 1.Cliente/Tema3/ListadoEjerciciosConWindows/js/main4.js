{

    /**
    * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
    * @author Marcos Gallardo Pérez
    */
   {

    let lista;
    let arrayElementosLista;
    let listaMadre;

    function init() {
        crearEsqueleto();
    }

    function crearEsqueleto() {
        lista = document.getElementById("lista");
        listaMadre = lista.appendChild(document.createElement("ul"));
        arrayElementosLista = [
            { texto: "Servidor", comando: location.host },
            { texto: "Protocolo", comando: location.protocol},
            { texto: "Ruta", comando: location.href},
           
        ];
        let li;
        for (let i = 0; i < arrayElementosLista.length; i++) {
            li = document.createElement("li");
            li.innerHTML = "<b>" + arrayElementosLista[i].texto + "</b>: " + arrayElementosLista[i].comando;
            listaMadre.appendChild(li);
        }
    }
    window.addEventListener("DOMContentLoaded", init);

}
}