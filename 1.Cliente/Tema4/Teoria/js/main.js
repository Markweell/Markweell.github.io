{
    /**
     * 
     * @author
     */

    function init() {
        // Creación de un objeto
        let elObjeto = new Object();
        elObjeto.nombre = "Marcos";
        elObjeto['clase'] = "2DAW";
        console.log(elObjeto);
        let elObjeto2 = {}
        console.log(elObjeto2);


        /*
        Técnicamente, un objeto de JavaScript es un array asociativo formado por las propiedades 
        y los métodos del objeto. Así, la forma más directa para definir las propiedades y métodos
         de un objeto es mediante la notación de puntos de los arrays asociativos.

        Un array asociativo es aquel en el que cada elemento no está asociado a su posición numérica 
        dentro del array, sino que está asociado a otro valor específico. Los valores de los arrays 
        normales se asocian a índices que siempre son numéricos. Los valores de los arrays asociativos 
        se asocian a claves que siempre son cadenas de texto.
        */
        var elArray = new Array();
        elArray['primero'] = 1;
        elArray.segundo = 2;
        console.log("Visualizando el primer array : " + elArray.primero);
        console.log("Visualizando el segundo array : " + elArray['segundo']);
        console.log("Visualizando el elemento 0 del array array : " + elArray[0]);
        elArray.push(1);
        console.log("Visualizando el elemento 0 del array array : " + elArray[0]);

        // Notacion json para crear objetos 
        // En vez de :
        /*
            var modulos = new Array();
            modulos.titulos = new Array();
            modulos.titulos.rss = "Lector RSS";
            modulos.titulos.email = "Gestor de email";
            modulos.titulos.agenda = "Agenda";
         */
        modulos.titulos = {
            rss: "Lector RSS",
            email: "Gestor de email",
            agenda: "Agenda"
        };
        //var objeto = { clave1: valor1, clave2: valor2, clave3: valor3, ..., claveN: valorN };
        /*
        var objeto = {
            "propiedad1": valor_simple_1,
            "propiedad2": valor_simple_2,
            "propiedad3": [array1_valor1, array1_valor2],
            "propiedad4": { "propiedad anidada": valor },
            "metodo1": nombre_funcion_externa,
            "metodo2": function() { ... },
            "metodo3": function() { ... },
            "metodo4": function() { ... }
        };
        */
  
  



    }
    window.addEventListener('load', init);
}