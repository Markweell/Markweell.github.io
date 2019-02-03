{
    $(init);

    let pestaniapresentacion,
        pestaniaJavascript,
        pestaniaDisenio,
        pestaniaPhp,
        pestaniaAndroid,
        cuerpoPresentacion,
        cuerpoJavascript,
        cuerpoDisenio,
        cuerpoPhp,
        cuerpoAndroid;

    let fondoPantallaDom,
        posicion;

    function init() {
        [pestaniapresentacion, pestaniaJavascript, pestaniaDisenio, pestaniaPhp, pestaniaAndroid] = [$("#Eyelash1"), $("#Eyelash2"), $("#Eyelash3"), $("#Eyelash4"), $("#Eyelash5")];
        [cuerpoPresentacion, cuerpoJavascript, cuerpoDisenio, cuerpoPhp] = [$("#presentacion"), $("#javascript"), $("#disenio"), $("#php")]
        posicion = 1;

        fondoPantallaDom = $("#fondoPantalla");

        pestaniapresentacion.click(() => {
            subirElemento(cuerpoPresentacion);
            posicion = 1;
            $("#presentacion section").focus();
        })
        pestaniaJavascript.click(() => {
            subirElemento(cuerpoJavascript);
            posicion = 2;
        })
        pestaniaDisenio.click(() => {
            subirElemento(cuerpoDisenio);
            posicion = 3;
        })
        pestaniaPhp.click(() => {
            subirElemento(cuerpoPhp);
            posicion = 4;
        })
        pestaniaAndroid.click(() => {
            subirElemento(cuerpoAndroid);
            posicion = 5;
        })
        $("#buscaminas").click(() => {
            location.href = "https://github.com/Markweell/Markweell.github.io/tree/master/1.Cliente/Tema7/BuscaminasConJQuery";
        })
        $("#casasRurales").click(() => {
            location.href = "https://github.com/Markweell/Markweell.github.io/tree/master/2.Dise%C3%B1o/PracticasConCSS/CasasRurales";
        })
        $("#JuegoJava").click(() => {
            location.href = "https://github.com/Markweell/ProyectoJuegoJava/tree/master/proyecto_final_2018";
        })
        $("#container").mouseover((ev) => {
            x = ev.offsetX / 80
            y = ev.offsetY / 80
            if (screen.width > 1270)
                fondoPantallaDom.css({
                    "background-position": (x * 4 - 100) + "px " + (y * 4 - 100) + "px"
                })
        })
        $(window).keydown((ev) => {
            if (ev.key === "ArrowRight") {
                if (posicion != 4)
                    posicion++;
            }
            if (ev.key == "ArrowLeft") {
                if (posicion != 1)
                    posicion--;
            }
            switch (posicion) {
                case 1:
                    subirElemento(cuerpoPresentacion);
                    break;
                case 2:
                    subirElemento(cuerpoJavascript);
                    break;
                case 3:
                    subirElemento(cuerpoDisenio);
                    break;
                case 4:
                    subirElemento(cuerpoPhp);
                    break;
            }
        })
    }

    function subirElemento(elemento) {
        cuerpoPresentacion.css("z-index", "10");
        cuerpoJavascript.css("z-index", "9");
        cuerpoDisenio.css("z-index", "8");
        cuerpoPhp.css("z-index", "7");
        elemento.css("z-index", "11");
    }
}