{
  /**
   *  Usando la Api Canvas para dibujar rectángulos, crea una animación desarrollada por ti. Se valorará la original.
   *  @author Marcos Gallardo Pérez
   */
  {
    let contexto;
    let velocidad = 50,
      img = new Image(),
      anch = 200;
    alt = 100;
    let bol = true;
    img.src = 'img/imagen2.jpeg';
    let animacion1,
    animacion2;

    function cargarContexto(idCanvas) {
      let elemento = document.getElementById(idCanvas);
      if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
          return contexto;
      }
      return false;
    }

    function animacionImg() {
      contexto.clearRect(0, 0, 1500, 1500);
      contexto.save();
      contexto.drawImage(img, 0, 0, anch, alt);
      contexto.restore();
      if (bol) {
        anch += 55;
        alt += 50;
      }
      if (anch > 1500) {
        animacion2;
        bol = false;
      }
    }
    function animacionImg2() {
      contexto.clearRect(0, 0, 1500, 1500);
      contexto.save();
      contexto.drawImage(img, 0, 0, anch, alt);
      contexto.restore();
      if (!bol) {
        anch -= 55;
        alt -= 50;
      }
      if (alt < 0) {
        animacion1;
        bol=true;
      }

    }
    window.onload = function () {
      contexto = cargarContexto("micanvas");
      if (contexto) {
        animacion2=setInterval("animacionImg2()", velocidad);
        animacion1=setInterval("animacionImg()", velocidad);
      }
    }
  }
}