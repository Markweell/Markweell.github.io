{
  /**
   *  Usando la Api Canvas, combina el uso para dibujar rectángulos con caminos desarrollada por ti. Se valorará la original.
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
        //oreja1
        contexto.beginPath();
        contexto.moveTo(50, 5);
        contexto.lineTo(100, 5);
        contexto.lineTo(100, 55);
        contexto.lineTo(50, 55);
        contexto.lineTo(50, 5);
        contexto.stroke();
        //oreja2
        contexto.beginPath();
        contexto.moveTo(200, 5);
        contexto.lineTo(250, 5);
        contexto.lineTo(250, 55);
        contexto.lineTo(200, 55);
        contexto.lineTo(200, 5);
        contexto.stroke();
        //cabeza
        contexto.beginPath();
        contexto.moveTo(50, 55);
        contexto.lineTo(250, 55);
        contexto.lineTo(250, 200);
        contexto.lineTo(50,200);
        contexto.lineTo(50, 55);
        contexto.stroke();

        //OjoUno
        contexto.beginPath();
        contexto.moveTo(75, 75);
        contexto.lineTo(125, 75);
        contexto.lineTo(125, 100);
        contexto.lineTo(75,100);
        contexto.lineTo(75, 75);
        contexto.stroke();

        //OjoDos
        contexto.beginPath();
        contexto.moveTo(175, 75);
        contexto.lineTo(225, 75);
        contexto.lineTo(225, 100);
        contexto.lineTo(175,100);
        contexto.lineTo(175, 75);
        contexto.stroke();

        //Nariz
        contexto.beginPath();
        contexto.moveTo(145, 125);
        contexto.lineTo(155, 125);
        contexto.lineTo(155, 130);
        contexto.lineTo(145,130);
        contexto.lineTo(145, 125);
        contexto.stroke();

        //Boca
        contexto.beginPath();
        contexto.moveTo(75, 145);
        contexto.lineTo(225, 145);
        contexto.lineTo(225,190);
        contexto.lineTo(75,190);
        contexto.lineTo(75, 145);
        contexto.stroke();

        //Cuerpo
        contexto.beginPath();
        contexto.moveTo(150, 55);
        contexto.lineTo(150,0);
        contexto.lineTo(600,0);
        contexto.lineTo(600,250);
        contexto.lineTo(150,250);
        contexto.lineTo(150, 200);
        contexto.stroke();

        //pata1y2
        contexto.beginPath();
        contexto.moveTo(225, 250);
        contexto.lineTo(305, 250);
        contexto.lineTo(305,270);
        contexto.lineTo(225,270);
        contexto.lineTo(225, 250);
        contexto.stroke();
        /*
        contexto.moveTo(265, 250);
        contexto.lineTo(265,270);
        contexto.stroke();
        */

        //pata3y4
        contexto.beginPath();
        contexto.moveTo(475, 250);
        contexto.lineTo(555, 250);
        contexto.lineTo(555,270);
        contexto.lineTo(475,270);
        contexto.lineTo(475, 250);
        contexto.stroke();

        //rabo
        contexto.beginPath();
        contexto.moveTo(600, 150);
        contexto.lineTo(650, 150);
        contexto.lineTo(650,200);
        contexto.lineTo(600,200);
        contexto.lineTo(600, 150);
        contexto.stroke();
       
      }
    }
  }
}