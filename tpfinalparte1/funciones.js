function textosDePantallas() {
  if (estado < misTextos.length) {
    fill(255);
    textSize(20);
    text(misTextos[estado], 50, 180);
  }
}
function clickBoton() {
  if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
    estado++;
  }
}
function creditos () {
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text ("Créditos", width/2, 220);
  textSize(20);
  text("Julieta Pratti legajo 83917/3", width/2, height/2+10);
  text("Guillermo Franco legajo 91308/0", width/2, height/2+50 );
  text("Comision 5 - Trabajo Práctico Final Parte 1", width/2, height/2+90 );
}
