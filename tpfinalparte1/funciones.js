function obtenerTextActual() {
  return posTextoActual;
}
function clickBoton() {
  if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
    estado++;
    posTextoActual++;
  }
}
//rect(270, 400, 100, 50, 50);
