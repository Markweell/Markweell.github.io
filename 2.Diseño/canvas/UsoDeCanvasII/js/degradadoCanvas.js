{
  /**
   *  Usando la Api Canvas, crea una figura con stroke, haz un degradado dentro de la figura. Dale un nombre
   *  y colócalo debajo de la figura. Se valorará la original.
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
        //Cuerpo
        contexto.beginPath();
        contexto.moveTo(150, 55);
        contexto.lineTo(150,0);
        contexto.lineTo(600,0);
        contexto.lineTo(600,250);
        contexto.lineTo(150,250);
        contexto.lineTo(150, 200);
        contexto.stroke();
        let lineGrad = contexto.createLinearGradient(300, 0, 300, 250);
          lineGrad.addColorStop(0, '#fff');
          lineGrad.addColorStop(0.05, ' #ff4f29');
          lineGrad.addColorStop(1, 'rgba(202, 147, 147, 0.6)');
        contexto.fillStyle = lineGrad;
        contexto.fill();

        //oreja1
        contexto.beginPath();
        contexto.moveTo(50, 5);
        contexto.lineTo(100, 5);
        contexto.lineTo(100, 55);
        contexto.lineTo(50, 55);
        contexto.lineTo(50, 5);
        contexto.stroke();
        lineGrad = contexto.createLinearGradient(300, 0, 300, 250);
          lineGrad.addColorStop(0, '#fff');
          lineGrad.addColorStop(0.05, ' #ff4f29');
          lineGrad.addColorStop(1, 'rgba(202, 147, 147, 0.6)');
        contexto.fillStyle = lineGrad;
        contexto.fill();
        //oreja2
        contexto.beginPath();
        contexto.moveTo(200, 5);
        contexto.lineTo(250, 5);
        contexto.lineTo(250, 55);
        contexto.lineTo(200, 55);
        contexto.lineTo(200, 5);
        contexto.stroke();

        contexto.fill();
        //cabeza
        contexto.beginPath();
        contexto.moveTo(50, 55);
        contexto.lineTo(250, 55);
        contexto.lineTo(250, 200);
        contexto.lineTo(50,200);
        contexto.lineTo(50, 55);
        contexto.stroke();
        lineGrad = contexto.createLinearGradient(50, 0, 50, 255);
          lineGrad.addColorStop(0, '#fff');
          lineGrad.addColorStop(0.05, ' #fc431b');
          lineGrad.addColorStop(1, ' #fa795d ');
        contexto.fillStyle = lineGrad;
        contexto.fill();

        //OjoUno
        contexto.beginPath();
        contexto.moveTo(75, 75);
        contexto.lineTo(125, 75);
        contexto.lineTo(125, 100);
        contexto.lineTo(75,100);
        contexto.lineTo(75, 75);
        contexto.stroke();
        contexto.fillStyle = '#000000';
        contexto.fill();

        //OjoDos
        contexto.beginPath();
        contexto.moveTo(175, 75);
        contexto.lineTo(225, 75);
        contexto.lineTo(225, 100);
        contexto.lineTo(175,100);
        contexto.lineTo(175, 75);
        contexto.stroke();
        contexto.fill();

        //Nariz
        contexto.beginPath();
        contexto.moveTo(145, 125);
        contexto.lineTo(155, 125);
        contexto.lineTo(155, 130);
        contexto.lineTo(145,130);
        contexto.lineTo(145, 125);
        contexto.stroke();
        contexto.fill()

        //Boca
        contexto.beginPath();
        contexto.moveTo(75, 145);
        contexto.lineTo(225, 145);
        contexto.lineTo(225,190);
        contexto.lineTo(75,190);
        contexto.lineTo(75, 145);
        contexto.stroke();
        lineGrad = contexto.createLinearGradient(145, 125, 190, 225);
          lineGrad.addColorStop(0, '#fa2323');
          lineGrad.addColorStop(0.05, '#fa2323');
          lineGrad.addColorStop(1, '#fef7f7');
        contexto.fillStyle = lineGrad;
        contexto.fill();
        


        
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