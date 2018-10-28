{
  /**
    * Usando la Api Canvas, carga un imagen, recortala y redimensionala en un canvas. En el archivo debe
    * aparecer también la imagen original. Se valorará la original.
    * @author Marcos Gallardo Pérez
    */
  {
    let contexto;
    img = new Image();
    img.src = 'img/imagen2.jpeg';
    function cargarContexto(idCanvas) {
      let elemento = document.getElementById(idCanvas);
      if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
          return contexto;
      }
      return false;
    }

    window.onload = function () {
      contexto = cargarContexto("micanvas");
      if (contexto) {
        contexto.drawImage(img, 0, 0);
        contexto.drawImage(img, 0, 750, 500, 240);
        contexto.drawImage(img, 800, 100, 200, 250, 600, 750, 300, 350);
      }
    }
  }
}