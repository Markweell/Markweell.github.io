{
  /**
   *  Usando la Api Canvas para dibujar rectángulos, crea una animación desarrollada por ti. Se valorará la original.
   *  @author Marcos Gallardo Pérez
   */
  {
    let contexto;
    let avance = 0,
      translat = 345,
      translat2 = 200,
      velocidad = 10,
      img = new Image(),
      avance2 = 0;
      img.src = 'img/imagen2.jpg';

    function cargarContexto(idCanvas) {
      let elemento = document.getElementById(idCanvas);
      if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
          return contexto;
      }
      return false;
    }



    function cajaTranslate() {
      //Caja que se translada
      contexto.fillStyle = '#FF0';
      contexto.fillRect(345, 100, 200, 50);
    }

    function cuerda() {
      //Cuerda
      contexto.fillStyle = '#000';
      contexto.fillRect(900, -50, 1, 250);
    }

    function cuerdaRota() {
      //Cuerda
      contexto.fillStyle = '#000';
      contexto.beginPath();
      contexto.moveTo(900, -50);
      contexto.quadraticCurveTo(850, 100, 970, 100);
      contexto.stroke();

    }


    function cajaCae() {
      //Caja que cae
      contexto.fillStyle = '#000';
      contexto.fillRect(875, 200, 50, 50);
    }

    function objetosInamovibles() {
      //base
      contexto.fillStyle = '#009';
      contexto.fillRect(850, 500, 100, 50);
      //boton
      contexto.fillStyle = 'rgb(255,0,0)';
      contexto.fillRect(890, 490, 20, 10);
      contexto.font = "bold 1.2em sans-serif";
      contexto.fillText("No pulsar", 855, 530);
      //pared
      contexto.fillStyle = '#FF0';
      contexto.fillRect(1200, -50, 50, 250);
    }

    function dibujoBasico() {
      cajaTranslate();
      cuerda();
      cajaCae();
      objetosInamovibles();
    }

    function animacionRotale() {
      contexto.beginPath();
      if (avance <= 3 * Math.PI / 2) {
        contexto.clearRect(0, 0, 1500, 1500);
        contexto.save();
        contexto.fillStyle = "rgb(255,0,0)";
        contexto.translate(300, 300);
        contexto.rotate(avance);
        contexto.fillRect(0, 0, 200, 50);
        contexto.restore();
        avance += 0.05;
        dibujoBasico();
        if (avance >= 3 * Math.PI / 2)
          setInterval("animacionTranslate()", velocidad);
      }
    }

    function animacionTranslate() {
      if (translat <= 700) {
        contexto.beginPath();
        contexto.save();
        contexto.clearRect(345, 0, 1500, 1500);
        contexto.fillStyle = '#FF2440';
        contexto.translate(translat, 100);
        contexto.fillRect(0, 0, 200, 50);
        contexto.restore();
        translat += 5;
        objetosInamovibles();
        if (translat < 700) {
          cuerda();
          cajaCae();
        } else if (translat == 700) {
          setInterval("animacionCaida()", velocidad);
          cuerdaRota();
        }
      }
    }

    function animacionCaida() {
      if (translat2 < 450) {
        contexto.beginPath();
        contexto.save();
        contexto.clearRect(345, 0, 1500, 1500);
        contexto.fillStyle = '#000';
        contexto.translate(875, translat2);
        contexto.fillRect(0, 0, 50, 50);
        contexto.restore();
        translat2 += 2;
        objetosInamovibles();
        cuerdaRota();
        if (translat <= 1000) {
          contexto.beginPath();
          contexto.save();
          contexto.fillStyle = '#FF2440';
          contexto.translate(translat, 100);
          contexto.fillRect(0, 0, 200, 50);
          contexto.restore();
          translat += 5;
        }
        if (translat >= 1000) {
          contexto.fillStyle = '#FF2440';
          contexto.fillRect(1000, 100, 200, 50);
        }
        if (translat2 > 440) {
          contexto.fillStyle = '#000';
          contexto.fillRect(890, 490, 20, 10);
          contexto.fillStyle = 'rgb(255,0,0)';
          contexto.fillRect(890, translat2 + 50, 20, 450 - translat2);
          if (translat2 == 450) {
            setInterval("animacionImg()", 50);
          }
        }
      }
    }

    function animacionImg() {
      contexto.clearRect(0, 0, 1500, 1500);
      contexto.save();
      contexto.translate(700, 300);
      contexto.rotate(avance2);
      contexto.drawImage(img, -100, -250);
      contexto.restore();
      avance2 += 0.05;
    }

    window.onload = function () {
      contexto = cargarContexto("micanvas");
      if (contexto) {
        dibujoBasico();
        setInterval("animacionRotale()", velocidad);
      }
    }
  }
}