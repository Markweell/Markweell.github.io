let contexto;
img = new Image();
img.src = 'img/perfil.png';

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
    contexto.drawImage(img, 35, 5);
  }
}
