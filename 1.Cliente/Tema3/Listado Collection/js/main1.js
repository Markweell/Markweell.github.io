{
    /**
     * Tanto los objetos javaScript como los Maps permiten almacenar pares clave/valor. 
     * Indica la diferencia entre ambos.
     * @author Marcos Gallardo Pérez
     */
    {
        document.addEventListener("DOMContentLoaded", init);

        function init() {
            crearEsqueleto();
        }

        function crearEsqueleto() {
            let parrafoPadre = document.getElementById("Contenido");
            let parrafo1 = parrafoPadre.appendChild(document.createElement("p"));
            map1 = new Map();
            map1.set('foo', true);
            o = { 'foo': true };
            let template = `
    <p>El parecido más evidente entre map y los objetos javascript es que 
    map es un objeto de javascript.</p>
    <p>Ambos permiten almacenar objetos clave/valor, pero lo hacen de manera distinta.
    Map debe invocarse mediante el constructor: new Map(). Con el método set podemos 
    asignar una Key a una valor.<br>
    Por ejemplo hacemos:<br>
    map1=new Map();<br>
    map1.set('foo',true)<br>
    map1.get('foo') nos muestra: ${map1.get('foo')}<br>
    map1['foo'] nos muestra: ${map1['foo']}<br>
    map1.foo nos muestra: ${map1.foo}<br>
    </p>
    <p>
    Ahora vamos a hacer lo mismo con un objeto. Creamos el objeto<br>
     o={'foo':true}<br> 
     o['foo'] nos muestra: ${o['foo']}<br>
     o.foo nos muestra: ${o.foo}<br>
     Por lo que podemos deducir que a la hora de contener objetos clave/valor, podemos usar el
     que prefiramos o que nos resulte más accesible. En los ejemplos hemos visto que los objetos
     javascript parecen más cómodos. </p>

    `;
            parrafo1.innerHTML = template;
        }
    }
}