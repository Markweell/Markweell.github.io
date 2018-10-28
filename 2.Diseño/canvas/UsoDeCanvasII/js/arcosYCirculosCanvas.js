{
  /**
    *  Usando la Api Canvas, combina arcos y/o circulos con cualquier elemento visto en canvas. Se
    *  valorará la original.
    *  @author Marcos Gallardo Pérez
    */
  {
    let contexto;

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
        function espiralLogaritmica(n) {
          //centro
          let x = 750;
          let y = 750;
          contexto.beginPath();
          for (let i = 0; i < (10 * 360); i++) {
            a = i * 0.017;
            r = n * a;
            x += r * Math.cos(a);
            y += r * Math.sin(a);
            contexto.lineTo(x, y);
          }
          contexto.stroke();
        }
        espiralLogaritmica(0.4);
      }
    }
  }
}