{
    /**
     * @author Marcos Gallardo Pérez
     */
    $(init)
    let campoMinas;
    let tableroArrayDom;
    let arrayDestapadas;
    let tableroDom;
    let reiniciaDom;

    function init() {
        tableroDom = $(".Tablero");
        reiniciaDom = $(".Reinicia")
        reiniciaDom.click(function () {
            iniciarPartida();
            alternaReinicia('none');
        })

        $("#dificultad").change(iniciarPartida).change();

        asignacionEventosDom();
    }

    function iniciarPartida() {
        switch ($("select option:selected").text()) {
            case "Facil":
                campoMinas = buscaminas.init();
                break;
            case "Medio":
                campoMinas = buscaminas.init(2);
                break;
            case "Dificil":
                campoMinas = buscaminas.init(3);
                break;
            default:
                buscaminas.init();
        }
        creacionTablero();
        alternaReinicia('none');
    }

    function asignacionEventosDom() {
        //Quitar el menu contextual
        tableroDom.contextmenu(function (e) {
            e.preventDefault();
        })

        //Añadimos los eventos del teclado
        tableroDom.mousedown(function (e) {
            [i, j] = e.target.id.split("_");
            try {
                //Click Doble
                if (e.button == 2 && e.buttons == 3) {
                    arrayDestapadas = buscaminas.despejar(parseInt(i), parseInt(j));
                    actualizaTableroPicar();
                }
                //Click Derecho
                if (e.button == 2 && e.buttons == 2) {
                    if (tableroArrayDom[i][j].hasClass("casillaDescubierta")) {
                        return;
                    }
                    buscaminas.marcar(parseInt(i), parseInt(j));
                    marcaCasilla(i, j);
                }
                //Click Izquierdo
                if (e.button == 0 && e.buttons == 1) {
                    if (!tableroArrayDom[i][j].hasClass("casillaDescubierta")) {
                        arrayDestapadas = buscaminas.picar(parseInt(i), parseInt(j));
                        actualizaTableroPicar();
                    }
                }
            } catch (e) {
                if (e.message == "BOMM!!") {
                    perder();
                }
                if (e.message == "Enhorabuena, has ganado.") {
                    ganar();
                }
                console.log(e.message);
            }
        })
    }

    function creacionTablero() {
        tableroArrayDom = [campoMinas.length];
        let divContenedor = $('<div></div>');
        for (let i = 0; i < campoMinas.length; i++) {
            tableroArrayDom[i] = [campoMinas.length];
            for (let j = 0; j < campoMinas[1].length; j++) {
                tableroArrayDom[i][j] = $('<div class="casillaBuscamina"><span><span></div>');
                tableroArrayDom[i][j].attr('id', i + "_" + j);
                divContenedor.append(tableroArrayDom[i][j]);
            }
        }
        tableroDom.html(divContenedor);
        $('.Tablero>div').css("grid-template-columns", "repeat(" + campoMinas.length + ",1fr)");
        $('.casillaBuscamina').css("height", tableroArrayDom[1][2].css('width'));
    }

    function actualizaTableroPicar() {
        $.each(arrayDestapadas, function (index, value) {
            setTimeout(function () {
                descubreCasilla(value.i, value.j)
            }, index * 10 + 100);
        });
    }

    function perder() {
        $.each(campoMinas, function (index) {
            $.each(campoMinas[index], function (index2, value) {
                if (value.valor == 9) {
                    tableroArrayDom[index][index2].css({
                        background: "yellow"
                    })
                }
            })
        });

        alternaReinicia("inline");
    }

    function ganar() {
        tableroDom.append("<p class='mensajeVictoria'>Enhorabuena, has ganado.</p>");
        $.each(campoMinas, function (index) {
            $.each(campoMinas[index], function (index2, value) {
                if (value.valor != 9) {
                    descubreCasilla(index, index2);
                }
                if (value.valor == 9) {
                    tableroArrayDom[index][index2].css({
                        background: "green"
                    })
                }
            })
        });
        alternaReinicia("inline");
    }

    function alternaReinicia(tipoDisplay) {
        reiniciaDom.css({
            display: tipoDisplay
        });

    }

    function descubreCasilla(i, j) {
        if (!tableroArrayDom[i][j].hasClass("casillaDescubierta")) {
            tableroArrayDom[i][j].removeClass("casillaBuscamina");
            tableroArrayDom[i][j].addClass("casillaDescubierta");
            if (campoMinas[i][j].valor !== 0) {
                tableroArrayDom[i][j].html(campoMinas[i][j].valor);
            }
        }
    }

    function marcaCasilla(i, j) {
        if (tableroArrayDom[i][j].hasClass("casillaBuscamina")) {
            tableroArrayDom[i][j].addClass("casillaMarcada");
            tableroArrayDom[i][j].removeClass("casillaBuscamina");
        } else {
            tableroArrayDom[i][j].addClass("casillaBuscamina");
            tableroArrayDom[i][j].removeClass("casillaMarcada");
        }
    }

}