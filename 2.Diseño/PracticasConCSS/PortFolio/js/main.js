{
    $(init);

    let pestaniapresentacion,
        pestaniaJavascript,
        pestaniaDisenio,
        pestaniaPhp,
        cuerpoPresentacion,
        cuerpoJavascript,
        cuerpoDisenio,
        cuerpoPhp,
        cuerpoAndroid;

    let fondoPantallaDom,
        posicion;

    function init() {
        [pestaniapresentacion, pestaniaJavascript, pestaniaDisenio, pestaniaPhp] = [$("#Eyelash1"), $("#Eyelash2"), $("#Eyelash3"), $("#Eyelash4")];
        [cuerpoPresentacion, cuerpoJavascript, cuerpoDisenio, cuerpoPhp] = [$("#presentacion"), $("#tecnologias"), $("#proyectos"), $("#contacto")]
        posicion = 1;
        console.log($("#perfil"));
        fondoPantallaDom = $("#fondoPantalla");

        let tamanioMaximo = ""
        $(".cuerpoProyectos > section > div").each((index, value) => {
            $(value).css("height") > tamanioMaximo ? tamanioMaximo = $(value).css("height") : "";
        })
        $(".cuerpoProyectos > section > div").each((index, value) => {
            $(value).css({
                "height": tamanioMaximo
            });
        })
        $(".cuerpoProyecto").each((index, value) => {
            $(value).css({
                "height": tamanioMaximo
            });
        })
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
        elemento==cuerpoPresentacion?pestaniapresentacion.css({
            "background": "grey",
            "box-shadow" : "0px 0px 15px 1px yellow"
        }):pestaniapresentacion.css({
            "background": "rgb(221,16,198)",
            "box-shadow" : "3px 3px 30px 2px black"
        });
        elemento==cuerpoJavascript?pestaniaJavascript.css({
            "background": "grey",
            "box-shadow" : "0px 0px 15px 1px yellow"
        }):pestaniaJavascript.css({
            "background": "rgb(231,96,51)",
            "box-shadow" : "3px 3px 30px 2px black"
        });
        elemento==cuerpoDisenio?pestaniaDisenio.css({
            "background": "grey",
            "box-shadow" : "0px 0px 15px 1px yellow"
        }):pestaniaDisenio.css({
            "background": "rgb(38,197,206)",
            "box-shadow" : "3px 3px 30px 2px black"
        });
        elemento==cuerpoPhp?pestaniaPhp.css({
            "background": "grey",
            "box-shadow" : "0px 0px 15px 1px yellow"
        }):pestaniaPhp.css({
            "background": "rgb(16,73,190)",
            "box-shadow" : "3px 3px 30px 2px black"
        });
        elemento.css("z-index", "11");
    }
}